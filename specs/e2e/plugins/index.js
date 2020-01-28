const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  return Object.assign({}, config, {
    fixturesFolder: 'specs/e2e/fixtures',
    integrationFolder: 'specs/e2e/specs',
    screenshotsFolder: 'specs/e2e/screenshots',
    videosFolder: 'specs/e2e/videos',
    supportFile: 'specs/e2e/support/index.js'
  });
};
