import AbstractComponent from '../../components/abstract.component';

class RegisterDialog extends AbstractComponent {
  constructor() {
    super('/#/register');
  }
  /** Selectors */
  get $emailField() {
    return $('[id="emailControl"]');
  }

  get $passwordField() {
    return $('[id="passwordControl"]');
  }

  get $repeatPasswordField() {
    return $('[id="repeatPasswordControl"]');
  }

  get $securityQuestionDropdown() {
    return $('[name="securityQuestion"]');
  }

  get $favoritePetNameQuestion() {
    return $('//*[contains(text()," Name of your favorite pet? ")]');
  }

  get $answerField() {
    return $('[id="securityAnswerControl"]');
  }

  get $registerButton() {
    return $('[id="registerButton"]');
  }

  get $confirmRegistrationDialog() {
    return $('//*[contains(text(),"Registration completed successfully. You can now log in.")]');
  }

  /** Methods */
  async setEmail(email) {
    await this.waitThanSetValue(await this.$emailField, email);
  }

  async setPassword(password) {
    await this.waitThanSetValue(await this.$passwordField, password);
  }

  async setRepeatPassword(password) {
    await this.waitThanSetValue(await this.$repeatPasswordField, password);
  }

  async clickSecurityQuestionDropdown() {
    await this.waitThanClick(await this.$securityQuestionDropdown);
  }

  async scrollThanClickFavoritePetNameQuestion() {
    await this.waitScrollThanClick(await this.$favoritePetNameQuestion);
  }

  async setAnswer(answer) {
    await this.waitThanSetValue(await this.$answerField, answer);
  }

  async clickRegisterButton() {
    await this.waitThanClick(await this.$registerButton);
  }

  async isConfirmRegistrationDialogDisplayed() {
    return await this.isElementDisplayed(await this.$confirmRegistrationDialog);
  }
}
export const registerDialog = new RegisterDialog();