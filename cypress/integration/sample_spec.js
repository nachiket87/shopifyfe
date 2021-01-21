/* eslint-disable */
describe("Check Search Input", () => {
  beforeEach(function () {
    cy.visit("localhost:3000");
  });
  it(".type() - type into a DOM element", () => {
    // https://on.cypress.io/type
    cy.get("#search")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
  it("When search empty search result title not visible", () => {
    // https://on.cypress.io/type
    cy.get("#search-results").should("not.exist");
  });
  it("should show search result when input is made", () => {
    // https://on.cypress.io/type
    cy.get("#search")
      .type("The Matrix")
      .get("#search-results")
      .should("be.visible");
  });
  it("should show search result when input is made", () => {
    // https://on.cypress.io/type
    cy.get("#search")
      .type("The Matrix")
      .get("#search-results")
      .should("be.visible");
  });
  it("should change button when clicked", () => {
    // https://on.cypress.io/type
    cy.get("#search")
      .type("The Matrix")
      .get("#movieButton")
      .should("be.visible")
      .click()
      .get("#movieButton")
      .should("have.class", "line-through")
      .click()
      .not("have.class", "line-through");
  });
});
