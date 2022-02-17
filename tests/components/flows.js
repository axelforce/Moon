import AbstractComponent from "./abstract.component";
import { registerDialog } from "./dialogs/register.dialog";
import { dialogsAssertions } from "../assertions/dialogs.assertions";
import { welcomeDialog } from "./dialogs/welcome.dialog";
import registrationData from "../../test-data/registration.data";
import { loginDialog } from "./dialogs/login.dialog";

class Flows extends AbstractComponent {
  async registrationFlow(userEmail) {
    await registerDialog.open();
    await dialogsAssertions.checkWelcomeDialogDisplayed();
    await welcomeDialog.clickDismissButton();
    await registerDialog.setEmail(userEmail);
    await registerDialog.setPassword(registrationData.customer1.password);
    await registerDialog.setRepeatPassword(registrationData.customer1.password);
    await registerDialog.clickSecurityQuestionDropdown();
    await registerDialog.scrollThanClickFavoritePetNameQuestion();
    await registerDialog.setAnswer(registrationData.customer1.securityQuestionAnswer);
    await registerDialog.clickRegisterButton();
  };

  async loginFlow (userEmail, userPassword) {
    await loginDialog.open();
    await loginDialog.setEmail(userEmail);
    await loginDialog.setPassword(userPassword);
    await loginDialog.clickLoginButton();
  }
}
export const flows = new Flows();