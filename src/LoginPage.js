class LoginPage {
  /**
   * @param {object} value
   */
  constructor(page) {
    //The page locators will be initialized
    this.usernameInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.submitLoginFormButton = page.getByTestId("login-button");
  }

  /**
   * @param {string} param
   * @return {number}
   */
  async submitLoginForm(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitLoginFormButton.click();
  }
}
export default LoginPage;
