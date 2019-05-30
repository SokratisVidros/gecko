const BASE_URL = 'https://www.workable.com/api';

// 'https://www.workable.com/api/accounts/6504'
// 'https://www.workable.com/api/jobs/9E072E09CD'

function get(url, )

function getJobByShortcode(shortcode, cb) {
  fetch(`${BASE_URL}/jobs/${shortcode}`)
    .then(response => {
      console.log('response:', response);
      if (response.ok) {
        return response.json();        
      }
      console.log('error');
    })
    .then(data => {
      console.log('data');
      cb(data);
    })
    .catch(err => console.log(err));
};

function getJobs(shortcodes) {
  const array = [];
  shortcodes.forEach(shortcode => getJobByShortcode(shortcode, function(job) {array.push(job)}));
  console.log(array);
}

