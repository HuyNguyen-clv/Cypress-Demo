import { BlueprintPage } from "../login_objects";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const blueprintPage = new BlueprintPage();

Given("I open Blueprint page", () => {
  blueprintPage.navigateToHome();
});

When(
  "I type {string} in username and {string} in password and click login",
  (username, password) => {
    blueprintPage.loginWithCredential(username, password);
  }
);

Then("Display Dashboard page", () => {
  blueprintPage.verifyDashboardPage();
});

Then("Display invalid UserID or Password", () => {
  blueprintPage.verifyLoginFailed();
});
