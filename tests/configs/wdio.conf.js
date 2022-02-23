require('global-agent/bootstrap');
import { ReportAggregator } from 'wdio-html-nice-reporter';

let reportAggregator;

const drivers = {
  chrome: { version: '98.0.4758.102' }, // https://chromedriver.chromium.org/
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
  baseUrl: 'https://demo.owasp-juice.shop',
  specs: ['tests/specs/*.spec.js'],
  retries: 0,
  reporters: ['spec',
    ["html-nice", {
      outputDir: 'test-utils/reports/html-reports',
      filename: 'report.html',
      reportTitle: 'Test Report Title',
      linkScreenshots: true,
      //to show the report in a browser when done
      showInBrowser: true,
      collapseTests: false,
      //to turn on screenshots after every test
      useOnAfterCommandForScreenshot: true,
    }
    ]
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

  onPrepare: function (config, capabilities) {

    reportAggregator = new ReportAggregator({
      outputDir: 'test-utils/reports/html-reports',
      filename: 'master-report.html',
      reportTitle: 'Master Report',
      browserName: 'chrome',
      collapseTests: true
    });
    reportAggregator.clean();
  },

  onComplete: function (exitCode, config, capabilities, results) {
    (async () => {
      await reportAggregator.createReport();
    })();
  },
}