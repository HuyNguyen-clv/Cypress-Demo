export class BlueprintPage {
  navigateToHome() {
    cy.visit("https://blueprint.cyberlogitec.com.vn/");
  }

  loginWithCredential(username, password) {
    cy.get('input[name = "username"]').type(username);
    cy.get('input[name = "password"]').type(password);
    cy.get('button[name= "login"]').click();
  }

  verifyDashboardPage() {
    //cy.get('[class^="btn-toggle-background"]').should("be.visible");
    cy.url().should("eq", "https://blueprint.cyberlogitec.com.vn/");
  }

  verifyLoginFailed(){
    cy.url().should("include", "https://auth.cyberlogitec.com.vn/auth/")
  }

}
