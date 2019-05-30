const fs = require('fs');

function parseConfig() {
  const packageJsonPath = `${process.cwd()}/package.json`;
  console.log('---PATH:' + packageJsonPath);
  const content = fs.readFileSync(packageJsonPath);
  return JSON.parse(content)
};

module.exports = parseConfig;
