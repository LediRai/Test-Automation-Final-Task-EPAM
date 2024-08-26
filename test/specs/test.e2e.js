import { expect } from "@wdio/globals";
import LoginPage from "../po/login.page.js";
import { loginCred } from "../utils/data.js";

describe("Epam TA final task", () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it("UC-1 Test Login form with empty credentials:", async () => {
    await LoginPage.login(loginCred.standartUser, loginCred.pass);

    await LoginPage.clearInput(LoginPage.usernameInput);
    await LoginPage.clearInput(LoginPage.passwordInput);
    
    await LoginPage.clickLogin();

    const errorMessage = await LoginPage.errorMessage();
    expect(errorMessage).toEqual("Epic sadface: Username is required");
  });

  it("UC-2 Test Login form with credentials by passing Username:", async () => {
    await LoginPage.login(loginCred.standartUser, loginCred.pass);

    await LoginPage.clearInput(LoginPage.passwordInput);

    await LoginPage.clickLogin();

    const errorMessage = await LoginPage.errorMessage();
    expect(errorMessage).toEqual("Epic sadface: Password is required");
  });

  it("UC-3 Test Login form with credentials by passing Username & Password:", async () => {
    await LoginPage.login(loginCred.standartUser, loginCred.pass);
    LoginPage.clickLogin();

    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual("Swag Labs");
  });
});