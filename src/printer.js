const chalk = require('chalk');

module.exports = function(data) {
  const line1 = chalk.blue('Hello') + ' World' + chalk.red('!')
  const line2 = chalk.green('I am a 🦎');

  const content = [line1, line2].join('\n')
  console.log(data);
}
