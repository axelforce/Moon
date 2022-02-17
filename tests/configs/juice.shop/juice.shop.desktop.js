const { config } = require('../wdio.conf');
const capabilities = require('../wdio.capabilities');

config.baseUrl = 'http://localhost:3000';
config.apiUrl = 'http://localhost:3000/api';
config.restUrl = 'http://localhost:3000/rest';
config.domain = 'localhost';
config.resolution = 'desktop';
config.language = 'en';
config.platform = 'Web';
config.capabilities = capabilities.desktop;

exports.config = config;
