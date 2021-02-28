const fs = require("fs");
const inquirer = require("inquirer");
const tsconfig = require("../config/tsconfig.json");
const eslint = require("../config/.eslintrc.json");
const prettier = require("../config/.prettierrc.json");
const { runInstaller } = require("./runInstaller");

const vsCodeSettings = require("../config/.vscode/settings.json");
const vsCodeExtensions = require("../config/.vscode/extensions.json");

const vscodeDir = "./.vscode";

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
