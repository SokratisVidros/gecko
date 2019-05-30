const fs = require('fs');

function parseConfig() {
  const packageJsonPath = `${process.cwd()}/package.json`;
  const content = fs.readFileSync(packageJsonPath);
  return JSON.parse(content).gecko;
};

module.exports = parseConfig;
