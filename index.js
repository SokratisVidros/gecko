#!/usr/bin/env node

require('./src/array');

const parseConfig = require('./src/parseConfig');
const { getJobByShortcode } = require('./src/api');
const { randomize } = require('./src/utils');
const print = require('./src/printer');

const { jobs = [] } = parseConfig();

getJobByShortcode(jobs.random())
  .then(print)
  .catch(err => console.err('Gecko:> ', err.stack || err.message || err));
