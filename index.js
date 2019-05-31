#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');
const getJobs = require('./src/api').getJobs;
const randomize = require('./src/randomizer');
const print = require('./src/printer');

const geckoConfig = parseConfig();
const careersPageUrl = geckoConfig.careersPage;
const jobsShortcode = geckoConfig.jobs;

console.log('AAAAAAAAAAAAA', careersPageUrl. jobsShortcode)

getJobs(jobsShortcode)
  .then(randomize)
  .then(job => print({ careersPageUrl, job }));
