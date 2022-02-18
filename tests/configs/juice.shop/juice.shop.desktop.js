const { config } = require('../wdio.conf');
const capabilities = require('../wdio.capabilities');

config.baseUrl = 'https://demo.owasp-juice.shop';
config.apiUrl = 'https://demo.owasp-juice.shop/api';
config.restUrl = 'https://demo.owasp-juice.shop/rest';
config.domain = 'localhost';
config.resolution = 'desktop';
config.language = 'en';
config.platform = 'Web';
config.capabilities = capabilities.desktop;

exports.config = config;
