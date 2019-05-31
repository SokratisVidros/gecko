exports.extractCompanyNameFromUrl = function (url = '') {
  return url.slice(8).split('.workable')[0];
}

exports.extractCareersPageFromUrl = function (url = '') {
  return url.split('com')[0] + 'com';
}

exports.clearConsole = function () {
  return process.stdout.write('\033c');
}

exports.randomize = function (array) {
  return array[Math.floor(Math.random() * array.length)];
}
