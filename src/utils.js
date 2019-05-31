exports.extractCompanyNameFromUrl = function (url) {
  return url.slice(8).split('.workable')[0];
}

exports.extractCareersPageFromUrl = function (url) {
  return url.split('com')[0] + 'com';
}
