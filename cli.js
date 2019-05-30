#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');

const geckoConfig = parseConfig();
const careersPageUrl = geckoConfig.careersPage;
const jobs = geckoConfig.jobs;

console.log('careers page: ' + careersPageUrl);
console.log('jobs:', jobs);
