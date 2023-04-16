const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.cypress.io',
    retries: {
      "runMode": 2,
      "openMode": 2
    },
  },
  'watchForFileChanges': false,
  'defaultCommandTimeout': 20000,
  'viewportHeight': 800,
  'viewportWidth': 1280
});
