const fs = require("fs");
const inquirer = require("inquirer");
const { spawn } = require("child_process");
const util = require("util");
const tsconfig = require("../config/tsconfig.json");
const eslint = require("../config/.eslintrc.json");
const prettier = require("../config/.prettierrc.json");

const vsCodeSettings = require("../config/.vscode/settings.json");
const vsCodeExtensions = require("../config/.vscode/extensions.json");

const vscodeDir = "./.vscode";

const dependencies = [
  "prettier",
  "eslint",
  "typescript",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
  "@typescript-eslint/parser",
  "@types/classnames",
  "@types/node",
  "@types/react",
  "@types/react-dom",
  "@types/react-helmet",
  "@typescript-eslint/eslint-plugin",
];

const customSpawn = (command, args, options, cb) => {
  const child = spawn(command, args, options);
  child.on("close", (exitCode) => {
    cb(null, exitCode);
  });
  return child;
};

const promisifiedSpawn = util.promisify(customSpawn);

const runInstaller = async () => {
  console.log("\nPreparing to install...\n");
  try {
    await promisifiedSpawn("npm", ["i", "-D", ...dependencies], {
      stdio: "inherit",
    });
    console.log("All done!");
    process.exit(0);
  } catch (error) {
    console.log(`Exited with: ${exitCode}`);
    process.exit(1);
  }
};

const runInquirer = (questions) => {
  var cwd = require("path").basename(process.cwd());
  console.log("CWD: ", cwd);
  inquirer.prompt(questions).then((answers) => {
    if (answers.addTypescript) {
      let data = JSON.stringify(tsconfig, null, 2);
      fs.writeFileSync("./tsconfig.json", data);
    }
    if (answers.addESLint) {
      let data = JSON.stringify(eslint, null, 2);
      fs.writeFileSync(".eslintrc.json", data);
    }
    if (answers.addCode) {
      if (!fs.existsSync(vscodeDir)) {
        fs.mkdirSync(vscodeDir);
      }
      let settings = JSON.stringify(vsCodeSettings, null, 2);
      let extensions = JSON.stringify(vsCodeExtensions, null, 2);
      fs.writeFileSync("./.vscode/settings.json", settings);
      fs.writeFileSync("./.vscode/extensions.json", extensions);
    }
    if (answers.addPrettier) {
      let data = JSON.stringify(prettier, null, 2);
      fs.writeFileSync("./src/.prettierrc", data);
    }
    runInstaller();
  });
};

exports.runInquirer = runInquirer;
