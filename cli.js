#!/usr/bin/env node

var parent = require('parent-package-json');
var parentJSON = parent().parse();

console.log(parentJSON);

if (!parentJSON) {
  console.log('Couldn\'t find/parse package.json');
}

console.log('gecko config:', parentJSON.gecko);

console.log('HELLO');
