const readline = require('readline');
const chalk = require('chalk');
const terminalLink = require('terminal-link');

const animateGecko = require('./animateGecko');
const clearConsole = require('./utils').clearConsole;

const extractCompanyNameFromUrl = require('./utils').extractCompanyNameFromUrl;
const extractCareersPageFromUrl = require('./utils').extractCareersPageFromUrl;

const makePrompt = ({ companyName }) => `
Hi! Have you found us or have we found you? 🙂

You must be good at what you do. ${companyName} is hiring and we're looking for talented developers like you.

Are you interested? [Y|n]
`;

const makeAd = ({ companyName, positionLink, carrersPageLink, workableLink }) => `
Apply now for ${companyName}'s next ${positionLink} or view all ${companyName}'s ${carrersPageLink}.
Powered by ${workableLink}.
`;

function showPrompt(job) {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  return () => new Promise(resolve => rl.question(makePrompt(extractCompanyNameFromUrl(job.shortlink)), ans => {
      rl.close();
      resolve(ans);
  }))
}

function showJobAd(job) {
  const companyName = extractCompanyNameFromUrl(job.shortlink);
  const positionLink = terminalLink(job.title, job.shortlink);
  const carrersPageLink = terminalLink('jobs', extractCareersPageFromUrl(job.shortlink));
  const workableLink = terminalLink('Workable', 'https://www.workable.com/');

  return () => console.log(makeAd({
    companyName,
    positionLink,
    carrersPageLink,
    workableLink
  }));
}

function print(data) {
  console.log('data', data);
  return animateGecko()
    .then(clearConsole)
    .then(showPrompt(data))
    .then(promptAnswer => { /* show add or skip */})
    .then(showJobAd(data))
    // .then(waitForUserInput)
}

module.exports = print;
