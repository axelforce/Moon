import AbstractComponent from '../../components/abstract.component';

const { testImagePath } = browser.config;

class ComplaintDialog extends AbstractComponent {
  constructor() {
    super('/#/complain');
  }
  /** Selectors */
  get $messageField() {
    return $('[id="complaintMessage"]');
  }

  get $submitButton() {
    return $('[id="submitButton"]');
  }

  get $fileInput() {
    return $('input[id="file"]');
  }

  get $confirmationMessage() {
    return $('[class="confirmation"]');
  }

  /** Methods */
  async uploadFiles() {
    const remoteFilePath = await browser.uploadFile(testImagePath);
    await this.waitThanSetValue(await this.$fileInput, remoteFilePath);
  }

  async getComplaintConfirmationMessageText() {
    return await this.waitThanGetText(await this.$confirmationMessage);
  }

  async clickSubmitButton() {
    await this.waitThanClick(await this.$submitButton);
  }

  async setMessage(message) {
    await this.waitThanSetValue(await this.$messageField, message);
  }
}
export const complaintDialog = new ComplaintDialog();