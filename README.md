This is a webdriverIO project by Alexander Kulagin

## Setup

1. Clone the repo and run `npm install`
2. Take a look to `package.json` and make sure all dependencies are installed correctly.

### Run all tests via configs

In this framework you can run cases through prepared configurations that have all necessary capabilities

Example of script:
`wdio tests/configs/juice.shop/juice.shop.desktop.js`
This script will run all available test cases for Home assignment

All available scripts are in `package.json`.
Example:
To run all test cases - `npm run to_the_moon`

### Run the specific 'spec'

To run the specific 'spec' you should add this spec to script in this way:

`wdio tests/configs/juice.shop/juice.shop.desktop.js --spec tests/specs/complaint.spec.js`

To run the specific test case in a suite add `only` to case description, like this:

`it.only('Send complaint with attachment', function () { ...`

To skip the specific test case in a suite add `skip` to case description, like this:

`it.skip('Send complaint with attachment', function () { ...`

### Run tests by priorities

Examples:
1. Run all tests with 'critical' priority' : `wdio tests/configs/juice.shop/juice.shop.desktop.js --mochaOpts.grep='#critical` 
2. Run all tests with 'critical' and 'high' priority': `wdio tests/configs/juice.shop/juice.shop.desktop.js --mochaOpts.grep='#critical|#high`

### Folder Structure (e2e-web)

Tests for Web located in the `tests/specs` folder. Name tests with a `.spec.js` extension. For example: `mytest.spec.js`

- Page objects located in the `tests/components/pages`.
- Dialogs/popups etc. components located in the `tests/components/dialogs`.
- Configs for web test cases located in the `tests/configs`.