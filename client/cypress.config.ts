import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-results-[hash].xml',
    toConsole: true
  },
  env: {
    auth0_username: process.env['AUTH0_USERNAME'],
    auth0_password: process.env['AUTH0_PASSWORD'],
    auth0_domain: process.env['AUTH0_DOMAIN'],
    auth0_audience: process.env['AUTH0_AUDIENCE'],
    auth0_scope: process.env['AUTH0_SCOPE'],
    auth0_client_id: process.env['AUTH0_CLIENTID'],
    auth0_client_secret: process.env['AUTH0_CLIENT_SECRET']
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
