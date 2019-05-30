const fetch = require('node-fetch');

const BASE_URL = 'https://www.workable.com/api';

// 'https://www.workable.com/api/accounts/6504'
// 'https://www.workable.com/api/jobs/9E072E09CD'

function getJobByShortcode(shortcode, onSuccess = Promise.resolve, onFailure = Promise.reject) {
  return fetch(`${BASE_URL}/jobs/${shortcode}`)
    .then(response => {
      // console.log('RESPONSE:', response);
      if (!response.ok) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    })
    .then(response => response.json())
    .catch(err => {
      console.log('ERROR:', err);
    });
};

exports.getJobs = function getJobs(shortcodes, onSuccess = () => {}, onFailure = () => {}) {
  Promise.all(shortcodes.map(getJobByShortcode))
    .then(jobs => {
      // console.log('VALUES:', jobs);
      onSuccess(jobs.filter(job => !!job));
    })
    .catch(err => {
      // console.log('ERROR ALL', err);
      onFailure(err);
    });
};
