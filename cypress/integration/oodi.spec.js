describe("Hoas booking", function () {
  beforeEach(function () {
    // log in
    cy.visit("https://booking.hoas.fi/auth/login");
    cy.get("#login").type("temppahemppa");
    cy.get("#password").type("temppah");
    cy.get(".submit").click();
  });

  it("Check sauna thing", function () {
    //TODO
    cy.get("#login").type("temppah");
  });
});
