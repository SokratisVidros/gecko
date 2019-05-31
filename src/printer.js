const chalk = require('chalk');
const boxen = require('boxen');
const readline = require('readline');
const terminalLink = require('terminal-link');

const animateGecko = require('./animateGecko');
const clearConsole = require('./utils').clearConsole;

const extractCompanyNameFromUrl = require('./utils').extractCompanyNameFromUrl;
const extractCareersPageFromUrl = require('./utils').extractCareersPageFromUrl;

function makePrompt({ companyName = 'Someone' }) {
  return [
    chalk.bold('Hi! Have you found us or have we found you? 🙂'),
    `You must be good at what you do. ${companyName} is hiring and we're looking for talented developers like you.`,
    chalk.green.underline('Are you interested?') + ' ' + chalk.bold('[Y|n]: ')
  ].join('\n\n');
}

function makeAd({
  title,
  shortlink,
  carrersPageLink,
  companyName,
  workableLink = 'https://www.workable.com'
} = {}) {
  return `
${chalk.bold.bgGreen(`Apply now for ${companyName}'s next ${title} at ${shortlink}`)}


Or view all ${chalk.blueBright(`${companyName}'s`)} jobs at ${carrersPageLink}


Powered by ${workableLink}.
`;
}

function showPrompt({ shortlink }) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const companyName = extractCompanyNameFromUrl(shortlink)
  const prompt = makePrompt({ companyName });

  return new Promise((resolve, reject) => {
    rl.question(prompt, answer => {
      if (answer === 'y') {
        resolve(true);
      } else {
        resolve(false);
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
