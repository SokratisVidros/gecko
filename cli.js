#!/usr/bin/env node

let fs = require("fs");

const packageJsonPath = `${process.cwd()}/package.json`;
const content = fs.readFileSync(packageJsonPath);
const packageJson = JSON.parse(content);

console.log(packageJson);
console.log(packageJson.gecko);



// // let  parent = require('parent-package-json');
// console.log(process.cwd());
// console.log(parent, parent())
// // var parentJSON = parent().parse();

// console.log(parentJSON);

// if (!parentJSON) {
//   console.log('Couldn\'t find/parse package.json');
// }

// console.log('gecko config:', parentJSON.gecko);

// console.log('HELLO');
