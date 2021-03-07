const tsDependencies = [
  "@typescript-eslint/parser",
  "@types/classnames",
  "@types/node",
  "@types/react",
  "@types/react-dom",
  "@types/react-helmet",
  "@typescript-eslint/eslint-plugin",
  "typescript",
];

const eslint = ["eslint"];

const prettier = ["prettier"];

const eslintPrettierDependencies = [
  "prettier",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
];

const setDependencies = (answers) => {
  let userDependencies = [];

  if (answers.addTypescript) {
    userDependencies = [...userDependencies, ...tsDependencies];
  }
  if (answers.addPrettier === false && answers.addESLint) {
    userDependencies = [...userDependencies, ...eslint];
  }
  if (answers.addESLint === false && answers.addPrettier) {
    userDependencies = [...userDependencies, ...prettier];
  }
  if (answers.addESLint && answers.addPrettier) {
    userDependencies = [...userDependencies, ...eslintPrettierDependencies];
  }

  return userDependencies;
};

exports.setDependencies = setDependencies;
