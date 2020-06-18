context("mzh.us", () => {
  beforeEach(() => {
    cy.visit("https://mzh.us");
  });

  it("has my name", () => {
    cy.contains("Mingyang Zhao").should("be.visible");
  });
});