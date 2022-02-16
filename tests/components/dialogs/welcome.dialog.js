import AbstractComponent from '../../components/abstract.component';

class WelcomeDialog extends AbstractComponent {
  constructor() {
    super('');
  }
  /** Selectors */
  get $welcomeDialog() {
    return $('app-welcome-banner');
  }

  /** Methods */
  async isWelcomeDialogDisplayed() {
    return await this.isElementDisplayed(await this.$welcomeDialog);
  }
}

export const welcomeDialog = new WelcomeDialog();