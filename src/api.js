const fetch = require('node-fetch');

const BASE_URL = 'https://www.workable.com/api';

function getJobByShortcode(shortcode) {
  return fetch(`${BASE_URL}/jobs/${shortcode}`)
    .then(response => {
      if (!response.ok) {
        new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch(err => {
      console.error('ERROR:', err);
    });
};

exports.getJobs = function getJobs(shortcodes) {
  return Promise.all(shortcodes.map(getJobByShortcode))
    .then(jobs => {
      return jobs.filter(job => !!job);
    })
    .catch(err => {
      return err;
    });
};
