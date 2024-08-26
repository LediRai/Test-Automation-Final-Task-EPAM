class LoginPage {
  get usernameInput() {
    return $('input[data-test="username"]');
  }

  get passwordInput() {
    return $('input[data-test="password"]');
  }

  get loginButton() {
    return $('input[data-test="login-button"]');
  }

  get pageTitle() {
    return browser.getTitle();
  }

  get errorMsg() {
    return $('h3[data-test="error"]');
  }

  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clearInput(input) {
    if (driver.isChromium) {
      const inputLength = (await input.getValue()).length;
      for (let i = 0; i < inputLength; i++) {
        await input.addValue("\uE003");
      }
    } else {
      await input.clearValue();
    }
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async errorMessage() {
    await this.errorMsg.waitForDisplayed();
    return await this.errorMsg.getText();
  }
}

export default new LoginPage();
