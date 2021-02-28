const fs = require("fs");
const inquirer = require("inquirer");
const tsconfig = require("../config/tsconfig.json");
const eslint = require("../config/.eslintrc.json");
const prettier = require("../config/.prettierrc.json");
const { globalTSContent } = require("../config/globalTS");

const { runInstaller } = require("./runInstaller");
const { writeToFile } = require("./writeToFile");

const vsCodeSettings = require("../config/.vscode/settings.json");
const vsCodeExtensions = require("../config/.vscode/extensions.json");

const vscodeDir = "./.vscode";

const makeDir = (folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
};

const runInquirer = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    if (answers.addTypescript) {
      writeToFile(tsconfig, "./tsconfig.json");
      fs.writeFileSync("./global.d.ts", globalTSContent);
    }
    if (answers.addESLint) {
      writeToFile(eslint, ".eslintrc.json");
    }
    if (answers.addCode) {
      makeDir(vscodeDir);
      writeToFile(vsCodeSettings, "./.vscode/settings.json");
      writeToFile(vsCodeExtensions, "./.vscode/extensions.json");
    }
    if (answers.addPrettier) {
      writeToFile(prettier, "./src/.prettierrc");
    }
    runInstaller();
  });
};

exports.runInquirer = runInquirer;
