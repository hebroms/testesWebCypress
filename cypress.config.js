const { defineConfig } = require('cypress');


module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions:{
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions:{
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions:{
      charts: true,
      reportPageTitle: 'Relatório de Testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  e2e: {
    baseUrl: 'https://autoforce-academy.pilotodetestes.com.br/ddm-fiat-v2-dois/',
    reporter: 'cypress-mochawesome-reporter',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
