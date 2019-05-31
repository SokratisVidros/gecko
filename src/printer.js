const chalk = require('chalk');
const boxen = require('boxen');
const readline = require('readline');

const animateGecko = require('./animateGecko');
const clearConsole = require('./utils').clearConsole;

const extractCompanyNameFromUrl = require('./utils').extractCompanyNameFromUrl;
const extractCareersPageFromUrl = require('./utils').extractCareersPageFromUrl;

function makePrompt({ companyName = 'Someone' }) {
  return `
${chalk.bold('Hi! Have you found us or have we found you? 🙂')}

You must be good at what you do.

${chalk.blueBright.bold(companyName)} is hiring and we're looking for talented developers like you.

${chalk.green('Are you interested?') + ' ' + chalk.bold('[Y|n]: ')}`;
}

function makeAd({
  title,
  shortlink,
  carrersPageLink,
  companyName,
  workableLink = 'https://www.workable.com'
} = {}) {
  return `
${chalk.bold.bgGreen(`Apply now for ${companyName}'s next ${title} at `)}${chalk.bold.bgGreen.underline(shortlink)}


Or view all ${chalk.blueBright.bold(`${companyName}'s`)} jobs at ${chalk.underline(carrersPageLink)}


Powered by Workable Gecko 🦎.

${workableLink}`;
}

function showPrompt({ shortlink }) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let companyName = extractCompanyNameFromUrl(shortlink)
  companyName = companyName.charAt(0).toUpperCase() + companyName.slice(1)
  const prompt = makePrompt({ companyName });

  return new Promise((resolve, reject) => {
    rl.question(prompt, answer => {
      if (answer === 'n') {
        resolve(false);
      } else {
        resolve(true);
      }
      rl.close();
    });
  });
}

function showJobAd(job) {
  const companyName = extractCompanyNameFromUrl(job.shortlink);
  const carrersPageLink = extractCareersPageFromUrl(job.shortlink);

  const ad = makeAd({
    companyName,
    carrersPageLink,
    ...job
  });

  console.log(boxen(ad, {padding: 1}));
}

function print(data) {
  return animateGecko()
    .then(clearConsole)
    .then(() => showPrompt(data))
    .then((shouldShowAd = true) => {
      if (shouldShowAd) {
        return showJobAd(data)
      }
    })
}

module.exports = print;
