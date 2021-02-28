const fs = require("fs");

/**
 * Appends content to file
 * 
 * @param {string} - parsedContent
 * @param {string} - path
 * 
 * 
 */

const writeToFile = (parsedContent, path) => {
    const stringifiedContent = JSON.stringify(parsedContent, null, 2);
    fs.writeFileSync(path, stringifiedContent);
  };

  exports.writeToFile = writeToFile;