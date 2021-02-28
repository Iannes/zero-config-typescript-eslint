const { promisifiedSpawn } = require("./promisifiedSpawn");

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

/**
 * Runs npm install command
 * 
 */

const runInstaller = async () => {
  console.log("\nPreparing to install...\n");
  try {
    await promisifiedSpawn("npm", ["i", "-D", ...dependencies], {
      stdio: "inherit",
    });
    console.log("All done!");
    process.exit(0);
  } catch (error) {
    console.log(`Exited with: ${error}`);
    process.exit(1);
  }
};

exports.runInstaller = runInstaller;
