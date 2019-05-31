module.extractCompanyNameFromUrl = function (url) {
  url.slice(8).split('.workable')[0];
}

module.extractCareersPageFromUrl = function (url) {
  url.split('com')[0] + 'com';
}
