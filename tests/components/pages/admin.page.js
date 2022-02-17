import AbstractComponent from '../../components/abstract.component';

let userEmail;

class AdminPage extends AbstractComponent {
  constructor() {
    super('/#/administration');
  }
  /** Selectors */
  get $registeredUser() {
    return $(`//*[contains(text(),"${userEmail}")]`)
  }

  get $registeredUserNextPageButton() {
    return $(`[aria-label="Next page"]`)
  }

  /** Methods */
  async isRegisteredUserDisplayed(email) {
    userEmail = email;
    return await this.isElementDisplayed(await this.$registeredUser)
  }

  async clickRegisteredUserNextPageButton() {
    await this.waitThanClick(await this.$registeredUserNextPageButton);
  }
}
export const adminPage = new AdminPage();