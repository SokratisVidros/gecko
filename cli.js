#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');
const getJobs = require('./src/api').getJobs;
const randomize = require('./src/randomizer');
const print = require('./src/printer');

const geckoConfig = parseConfig();
const careersPageUrl = geckoConfig.careersPage;
const jobsShortcode = geckoConfig.jobs;

console.log('careers page: ' + careersPageUrl);
console.log('jobs shortcode:', jobsShortcode);

getJobs(jobsShortcode)
  .then(randomize)
  .then(print);

// console.log("--JOBS--", jobs);
