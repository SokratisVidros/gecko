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
    .then(response => response.json());
}

module.exports = { getJobByShortcode };
