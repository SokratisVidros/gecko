const fetch = require('node-fetch');


fetch('https://www.workable.com/api/jobs/9E072E09CD')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log("Apply here: " + myJson.application_url);
    console.log("View Job: " + myJson.shortlink);
    console.log("Job shortcode: " + myJson.shortcode);
  });
