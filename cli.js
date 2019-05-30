#!/usr/bin/env node

import parseConfig from './src/parseConfig';

const config = parseConfig(); 
const carrersPageUrl = config.carrersPage;
const jobs = config.jobs;

console.log(jobs);


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
