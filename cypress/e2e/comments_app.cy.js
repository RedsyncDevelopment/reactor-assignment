/// <reference types="Cypress" />

describe("Comments App", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("should show initial comments", function () {
    cy.contains(
      "Hello there, so I was wondering if you know how much MB is in a GB?"
    );
  });
  describe("on new comment entry", function () {
    it("scould create new comment", function () {
      cy.get("#comment-input").type("This is a new comment");
      cy.get("#submit-button").click();
      cy.contains("This is a new comment");
    });
  });
});
