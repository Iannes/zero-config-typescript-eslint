const { promisifiedSpawn } = require("./promisifiedSpawn");
const { setDependencies } = require("./setDependencies");

/**
 * Runs npm install command
 *
 */

const runInstaller = async (answers) => {
  console.log("\nPreparing to install...\n");
  const dependencies = setDependencies(answers);
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
