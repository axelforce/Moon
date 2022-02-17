import AbstractAssertions from "../assertions/abstract.assertions";
import { welcomeDialog } from "../components/dialogs/welcome.dialog";
import { registerDialog } from "../components/dialogs/register.dialog";
import { complaintDialog } from "../components/dialogs/complaint.dialog";

class DialogsAssertions extends AbstractAssertions {
  async checkWelcomeDialogDisplayed() {
    this.checkElementIsDisplayed(
      await welcomeDialog.isWelcomeDialogDisplayed(),
      `Welcome dialog should be displayed`
    )
  }

  async checkConfirmRegistrationDialogIsDisplayed() {
    this.checkElementIsDisplayed(
      await registerDialog.isConfirmRegistrationDialogDisplayed(),
      `Confirm Registration Dialog should be displayed`
    )
  }

  async checkComplaintConfirmationMessageTextContains(expectedText) {
    this.checkElementContainsText(
      await complaintDialog.getComplaintConfirmationMessageText(),
      expectedText,
      `Complaint confirmation message should contain ${expectedText}`
    )
  }
}
export const dialogsAssertions = new DialogsAssertions();