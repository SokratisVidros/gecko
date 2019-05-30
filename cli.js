#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');
const getJobs = require('./src/api').getJobs;

const geckoConfig = parseConfig();
const careersPageUrl = geckoConfig.careersPage;
const jobsShortcode = geckoConfig.jobs;

console.log('careers page: ' + careersPageUrl);
console.log('jobs shortcode:', jobsShortcode);

getJobs(
  jobsShortcode,
  jobs => console.log('JOBS:', jobs)
);
