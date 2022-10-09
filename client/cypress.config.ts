import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-results-[hash].xml',
    toConsole: true
  },
  env: {
    auth0_username: 'a4002e9c48f918@smtp.mailtrap.io',
    auth0_password: '8379deb6a1a939',
    auth0_domain: 'miedziana.eu.auth0.com',
    auth0_audience: 'https://miedziana.eu.auth0.com/api/v2/',
    auth0_scope: 'openid profile email',
    auth0_client_id: 'yL6hguqWA45TUatw1pVemSlVLjOyxn6n',
    auth0_client_secret: '0DnVMJFEEwpTA0ZG_dhRshpF8QIrAA8PAjRx76mL5IPvyYeAyxJvEsIemVOAqkFR'
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
