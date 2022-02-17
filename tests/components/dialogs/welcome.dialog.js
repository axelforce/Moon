import AbstractComponent from '../../components/abstract.component';

class WelcomeDialog extends AbstractComponent {
  constructor() {
    super('');
  }
  /** Selectors */
  get $welcomeDialog() {
    return $('app-welcome-banner');
  }

  get $dismissButton() {
    return $('[aria-label = "Close Welcome Banner"]');
  }

  /** Methods */
  async isWelcomeDialogDisplayed() {
    return await this.isElementDisplayed(await this.$welcomeDialog);
  }

  async clickDismissButton() {
    await this.waitThanClick(await this.$dismissButton);
  }
}

export const welcomeDialog = new WelcomeDialog();