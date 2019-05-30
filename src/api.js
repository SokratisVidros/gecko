const fetch = require('node-fetch');

const BASE_URL = 'https://www.workable.com/api';

// 'https://www.workable.com/api/accounts/6504'
// 'https://www.workable.com/api/jobs/9E072E09CD'

function getJobByShortcode(shortcode) {
  return fetch(`${BASE_URL}/jobs/${shortcode}`)
    .then(response => {
      // console.log('RESPONSE:', response);
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

exports.getJobs = function getJobs(shortcodes, onSuccess = () => {}, onFailure = () => {}) {
  return Promise.all(shortcodes.map(getJobByShortcode))
    .then(jobs => {
      // console.log('VALUES:', jobs);
      return jobs.filter(job => !!job);
    })
    .catch(err => {
      // console.log('ERROR ALL', err);
      onFailure(err);
    });
};
