import AbstractAssertions from "../assertions/abstract.assertions";
import { welcomeDialog } from "../components/dialogs/welcome.dialog";

class DialogsAssertions extends AbstractAssertions {
async checkWelcomeDialogDisplayed() {
  this.checkElementIsDisplayed(
    await welcomeDialog.isWelcomeDialogDisplayed(),
    `Welcome dialog should be displayed`
  )
}
}

export const dialogsAssertions = new DialogsAssertions();