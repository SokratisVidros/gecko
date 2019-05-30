let fs = require("fs");

const parseConfig = () => {
  const packageJsonPath = `${process.cwd()}/package.json`;
  const content = fs.readFileSync(packageJsonPath);
  const packageJson = JSON.parse(content);
};

export default parseConfig;
