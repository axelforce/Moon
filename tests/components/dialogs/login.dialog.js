import AbstractComponent from '../../components/abstract.component';

class LoginDialog extends AbstractComponent {
  constructor() {
    super('/#/login');
  }
  /** Selectors */
  get $emailField() {
    return $('[id="email"]');
  }

  get $passwordField() {
    return $('[id="password"]');
  }

  get $loginButton() {
    return $('[id="loginButton"]');
  }

  /** Methods */
  async setEmail(email) {
    await this.waitThanSetValue(await this.$emailField, email);
  }

  async setPassword(password) {
    await this.waitThanSetValue(await this.$passwordField, password);
  }

  async clickLoginButton() {
    await this.waitThanClick(await this.$loginButton);
  }
}
export const loginDialog = new LoginDialog();