const { defineConfig } = require('cypress');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

module.exports = defineConfig({

  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    defaultCommandTimeout: 70000,
    pageLoadTimeout: 120000,
    viewportWidth: 1900,
    viewportHeight: 1200,
    setupNodeEvents,
    env: {
      URL: "https://opensource-demo.orangehrmlive.com"
    },
  },
});

