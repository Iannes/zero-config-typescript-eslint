#!/usr/bin/env node

const fs = require("fs");
const { runInquirer } = require("./utils");
const packageJSON = fs.existsSync("package.json");

const questions = [
  {
    type: "confirm",
    name: "addTypescript",
    message: "Would you like to add a tsconfig.json file?",
    default: false,
  },
  {
    type: "confirm",
    name: "addESLint",
    message: "Would you like to add a .eslint.js file?",
    default: false,
  },
  {
    type: "confirm",
    name: "vsCode",
    message: "Would you like to add a local .vscode folder?",
    default: false,
  },
];

if (packageJSON) {
  runInquirer(questions);
} else {
  console.log("No package.json detected!");
}
