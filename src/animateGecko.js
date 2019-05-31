require('./array');
const fs = require('fs');
const animation = require('ascii-animation');
const chalk = require('chalk');

const gecko = fs
  .readFileSync(__dirname + '/gecko.txt', 'utf8')
  .split(/\r?\n/g)

const [columns, lines] = process.stdout.getWindowSize();

const mainFrame = Array(lines + gecko.length - 1).fill('').concat(gecko);

const frames = Array(Math.ceil(mainFrame.length / 2)).fill('').map((_, i) => {
  const hOffset = ' '.repeat(
    Math.floor(columns / 2) - 15 +    // Center horizontally
    Math.floor(Math.random() * 5) + 1 // Add some random horizontal offset for a more natural move
  );

  return mainFrame
    .rotate(-i * 2)
    .slice(gecko.length, -gecko.length)
    .map(l => chalk.green(hOffset + l))
    .join("\n");
});

function animateGecko() {
  let condition = true;
  let secondsPerFrame = 0.15;
  
  animation.secondsPerFrame(secondsPerFrame);
  animation.animate(frames, () => condition, () => {}).bold();

  setTimeout(() => {
    condition = false
    console.log('DONE')
  }, secondsPerFrame * frames.length * 1000);
}

module.exports = animateGecko;
