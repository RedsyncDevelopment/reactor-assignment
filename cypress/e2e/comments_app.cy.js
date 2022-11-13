/// <reference types="Cypress" />

describe("Comments App", function () {
  beforeEach(function () {
    cy.request("GET", "http://localhost:3001/api/comments");
    cy.visit("http://localhost:3000");
  });
});
