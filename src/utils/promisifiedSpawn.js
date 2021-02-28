const { spawn } = require("child_process");
const util = require("util");

/**
 * Custom spawn wrapper
 * 
 * @param {string} - command
 * @param {array} - args
 * @param {object} - options
 * @param {CallableFunction} - cb
 * 
 * 
 */

const customSpawn = (command, args, options, cb) => {
  const child = spawn(command, args, options);
  child.on("close", (exitCode) => {
    cb(null, exitCode);
  });
  return child;
};

const promisifiedSpawn = util.promisify(customSpawn);

exports.promisifiedSpawn = promisifiedSpawn;
