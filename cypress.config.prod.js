const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://autoforce-academy.producao.com.br/ddm-fiat-v2-dois/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});