const fs = require("fs");
const inquirer = require("inquirer");
const fsExtra = require("fs-extra");
const { spawn } = require("child_process");
const util = require("util");
const tsconfig = require("../config/tsconfig.json")
const eslint = require("../config/.eslintrc.json")
const prettier = require("../config/.prettierrc")
const vsCodeSettings = require("../config/.vscode/settings.json")

const vscodeDir = './.vscode';

const dependencies = [
  "prettier",
  "eslint",
  "typescript",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
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
  try {
    await promisifiedSpawn(
      "npm",
      ["i", "-D", ...dependencies],
      { stdio: "inherit" }
    );
    console.log('All done!')
    process.exit(0)
  } catch (error) {
    console.log(`Exited with: ${exitCode}`);
    process.exit(1)
  }
};

const runInquirer = (questions) => {
  var cwd = require('path').basename(process.cwd());
  console.log('CWD: ',cwd)
  inquirer.prompt(questions).then((answers) => {
    if (answers.addTypescript) {
      let data = JSON.stringify(tsconfig, null, 2);
      fs.writeFileSync('./src/tsconfig.json', data);
    }
    if (answers.addESLint) {
      let data = JSON.stringify(eslint, null, 2);
      fs.writeFileSync('.eslintrc.json', data);
    }
    if (answers.vsCode) {
      fs.mkdirSync(vscodeDir);
      let data = JSON.stringify(vsCodeSettings, null, 2);
      fs.writeFileSync('./.vscode/settings.json', data);
    }
    runInstaller();
  });
};

exports.runInquirer = runInquirer;
