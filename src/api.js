const fetch = require('node-fetch');

const BASE_URL = 'https://www.workable.com/api';

// 'https://www.workable.com/api/accounts/6504'
// 'https://www.workable.com/api/jobs/9E072E09CD'

function getJobByShortcode(shortcode, onSuccess, onFailure = () => {}) {
  fetch(`${BASE_URL}/jobs/${shortcode}`)
    .then(response => {
      console.log('RESPONSE:', response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('DATA:', data);
      onSuccess(data);
    })
    .catch(err => {
      console.log('ERROR:', err);
      onFailure(err);
    });
};

exports.getJobs = function getJobs(shortcodes) {
  const jobs = [];
  shortcodes.forEach(shortcode => getJobByShortcode(shortcode, jobs.push));
  return jobs;
}

