#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');
const getJobs = require('./src/api').getJobs;

const geckoConfig = parseConfig();
const careersPageUrl = geckoConfig.careersPage;
const jobsShortcode = geckoConfig.jobs;

console.log('careers page: ' + careersPageUrl);
console.log('jobs shortcode:', jobsShortcode);

const jobs = getJobs(jobsShortcode);
console.log('jobs:', jobs);
