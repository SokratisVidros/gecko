const boxen = require('boxen');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// 🦎 === "\uD83E\uDD8E"
const line1 = chalk.blue('Hello') + ' World' + chalk.red('!')
const line2 = chalk.green('I am a 🦎');
// const line3 = chalkAnimation.karaoke('and I am green!').stop();

// line3.render();

const content = [line1, line2].join('\n')
console.log(boxen(content, { padding: 2, borderColor: 'yellow', borderStyle: 'round' }));
