exports.extractCompanyNameFromUrl = function extractCompanyNameFromUrl(url = '') {
  return url.slice(8).split('.workable')[0];
}

exports.extractCareersPageFromUrl = function extractCareersPageFromUrl(url = '') {
  return url.split('com')[0] + 'com';
}

exports.clearConsole = function clearConsole() {
  return process.stdout.write('\033c');
}

exports.capitalizaFirstLetter = function capitalizaFirstLetter(str = '') {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
