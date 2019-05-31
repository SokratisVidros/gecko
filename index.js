#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');
const getJobs = require('./src/api').getJobs;
const randomize = require('./src/randomizer');
const print = require('./src/printer');

const geckoConfig = parseConfig();
const careersPageUrl = geckoConfig.careersPage;
const jobsShortcode = geckoConfig.jobs;

getJobs(jobsShortcode)
  .then(randomize)
  .then(jobs => print({ careersPageUrl, jobs }));