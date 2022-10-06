import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-results.xml',
    toConsole: true
  },
  e2e: {
    'baseUrl': 'http://localhost:4200',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    }
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
