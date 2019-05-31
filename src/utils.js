modules.extractCompanyNameFromUrl =  extractCompanyNameFromUrl = url => url.slice(8).split('.workable')[0];

modules.extractCareersPageFromUrl = url => url.split('com')[0] + 'com';

