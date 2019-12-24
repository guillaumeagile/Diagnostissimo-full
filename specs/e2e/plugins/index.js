const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  return Object.assign({}, config, {
    fixturesFolder: 'Specs/e2e/fixtures',
    integrationFolder: 'Specs/e2e/specs',
    screenshotsFolder: 'Specs/e2e/screenshots',
    videosFolder: 'Specs/e2e/videos',
    supportFile: 'Specs/e2e/support/index.js'
  });
};
