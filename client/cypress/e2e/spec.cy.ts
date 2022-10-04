describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    // cy.intercept('GET', '/weatherforecast', {
    //   statusCode: 200,
    //   body: [{
    //     date: '2022-10-03T11:15:46.6847821+00:00',
    //     temperatureC: 1,
    //     temperatureF: 33,
    //     summary: 'Sweltering'
    //   }, {
    //     date: '2022-10-04T11:15:46.6847965+00:00',
    //     temperatureC: -1,
    //     temperatureF: 31,
    //     summary: 'Balmy'
    //   }, {
    //     date: '2022-10-05T11:15:46.684797+00:00',
    //     temperatureC: -11,
    //     temperatureF: 13,
    //     summary: 'Scorching'
    //   }, {
    //     date: '2022-10-06T11:15:46.6847974+00:00',
    //     temperatureC: -16,
    //     temperatureF: 4,
    //     summary: 'Mild'
    //   }, {date: '2022-10-07T11:15:46.6847979+00:00', temperatureC: 8, temperatureF: 46, summary: 'Mild'}],
    // });
    // cy.get(':nth-child(2) > .nav-link').click();
    // cy.get(':nth-child(1) > [data-cy="summary"]').should('contain.text', 'Sweltering');
    // cy.get(':nth-child(1) > [data-cy="summary"]').should('contain.text', 'Balmy');
    // cy.get(':nth-child(1) > [data-cy="summary"]').should('contain.text', 'Scorching');
    // cy.get(':nth-child(1) > [data-cy="summary"]').should('contain.text', 'Mild');
    // cy.get(':nth-child(1) > [data-cy="summary"]').should('contain.text', 'Mild');
  })
})
