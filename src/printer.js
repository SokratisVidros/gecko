const readline = require('readline');
const chalk = require('chalk');
const terminalLink = require('terminal-link');

const animateGecko = require('./animateGecko');
const reset = require('../reset');

const PROMPT_TEXT = `
Hi! Have you found us or have we found you? 🙂

You must be good at what you do. Semaphore is hiring and we're looking for talented developers like you.

Are you interested? [Y|n]
`;

const makeAd = () => {


  return `
Apply now for Semaphore's next [Senior Software Engineer] (URL)or
view all Semaphore's [jobs]: URL.
Powered by Workable: URL
`}

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
  console.log(data);
  return () => console.log(makeAd(data));
}

function print(data) {
  return animateGecko()
    .then(reset)
    .then(showPrompt)
    .then(promptAnswer => { /* show add or close */})
    .then(showJobAd(data))
    // .then(waitForUserInput)
}

print();

module.exports = print;
