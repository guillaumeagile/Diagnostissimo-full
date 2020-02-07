// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^the home page is loaded with following values as (.?)$/, (serviceUrl, table) => {
  let res = visitHomePage(table.hashes(), serviceUrl); //https://gist.github.com/wswebcreation/ae98ecf66aedd7b1037cfe70b188c26c
  cy.LastPageLoadedStatus = res;
});

var  funcThatLoadPageWithInitialData = 


Given(/^(\d+) questionnaire existe déjà$/, (numberOfQuestionnaire)=> {
 // ?? = numberOfQuestionnaire;
} );

When( /^la page s'ouvre$/, ()=>{
  cy.visit("/");
});

Then(/^un message contient '(.+)'$/ , (text)=>{
  cy.get('h3').should('contain.text', text);
} );


function visitHomePage(jsonArray, serviceUrl) {
  cy.window().then(win => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/Diagnostissimo/' + serviceUrl,
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
