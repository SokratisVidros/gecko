const readline = require('readline');
const chalk = require('chalk');
const terminalLink = require('terminal-link');

const animateGecko = require('./animateGecko');
const reset = require('../reset');

const PROMPT_TEXT = `
Hi! Have you found us or have we found you? 🙂

You must be good at what you do. ${'companyName'} is hiring and we're looking for talented developers like you.

Are you interested? [Y|n]
`;

const makeAd = ({ companyName, positionLink, carrersPageLink, workableLink }) => `
Apply now for ${companyName}'s next ${positionLink} or
view all ${companyName}'s ${carrersPageLink}.
Powered by ${workableLink}
`;

function showPrompt() {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  return new Promise(resolve => rl.question(PROMPT_TEXT, ans => {
      rl.close();
      resolve(ans);
  }))
}

function showJobAd(data) {
  const { careersPageUrl, job } = data;
  console.log(data);

  const companyName = 'Company-Name'
  const positionLink = terminalLink(job.title, job.shortlink);
  const carrersPageLink = terminalLink(companyName, careersPageUrl);
  const workableLink = terminalLink('Workable', 'https://www.workable.com/');

  return () => console.log(makeAd({
    companyName,
    positionLink,
    carrersPageLink,
    workableLink
  }));
}

function print(data) {
  return animateGecko()
    .then(reset)
    .then(showPrompt)
    .then(promptAnswer => { /* show add or close */})
    .then(showJobAd(data))
    // .then(waitForUserInput)
}

module.exports = print;
