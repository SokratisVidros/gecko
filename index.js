#!/usr/bin/env node

const parseConfig = require('./src/parseConfig');
const getJobs = require('./src/api').getJobs;
const randomize = require('./src/utils').randomize;
const print = require('./src/printer');

const geckoConfig = parseConfig();

getJobs(geckoConfig.jobs)
  .then(randomize)
  .then(print);
