module.extractCompanyNameFromUrl = url => url.slice(8).split('.workable')[0];

module.extractCareersPageFromUrl = url => url.split('com')[0] + 'com';

