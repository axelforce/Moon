require('global-agent/bootstrap');

const drivers = {
    chrome: { version: '97.0.4692.71' }, // https://chromedriver.chromium.org/
};

exports.config = {
    services: [
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: { drivers },
            args: { drivers },
        }],
    ],
    /** GENERAL */
    baseUrl: 'http://localhost:3000',
    specs: ['tests/specs/*.spec.js'],
    retries: 0,
    reporters: [
        'spec',
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 0,
    },
    runner: 'local',
    logLevel: 'warn',
    coloredLogs: true,
    waitForTimeout: 10000,
    waitForInterval: 500,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    deprecationWarnings: true,
    sessionOverride: true,
    debugLogSpacing: true,
    logTimestamp: true,
    testImagePath: 'test-data/attachments/testPDF.pdf',
}



