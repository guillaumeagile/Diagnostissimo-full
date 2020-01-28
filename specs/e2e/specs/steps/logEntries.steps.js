// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^the home page is loaded with following values$/, table => {
  let res = visitHomePage(table.hashes());
  cy.LastPageLoadedStatus = res;
});

function visitHomePage(jsonArray) {
  cy.window().then(win => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/Diagnostissimo/logentries',
      response: jsonArray
    });
    cy.visit('/');
  });
}

Then(/^there are (\d+) log entries$/, numberOfElements => {
  cy.get('#jobs')
    .find('tr')
    .should('have.length', numberOfElements);
});

Then(/^the 1st list entry is '(.+)'$/, sentence => {
  cy.contains(':nth-child(1) > td > :nth-child(2)', sentence);
});
