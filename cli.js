#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');

const geckoConfig = parseConfig();
const carrersPageUrl = geckoConfig.carrersPage;
const jobs = geckoConfig.jobs;

console.log('carrers page:' + carrersPageUrl);
console.log('jobs:', jobs);
