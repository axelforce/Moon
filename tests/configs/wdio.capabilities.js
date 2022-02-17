module.exports = {
  desktop: [
    {
      browserName: 'chrome',
      maxInstances: 1,
      'goog:chromeOptions': {
        args: ['--window-size=1920,1080'],
      },
    },
  ],
};