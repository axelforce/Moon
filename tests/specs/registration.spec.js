import { priority } from "../../test-data/priority.tags.json";
import { adminPage } from "../components/pages/admin.page";
import { authHelper } from "../../test-utils/helpers/auth.helper";
import { registerDialog } from "../components/dialogs/register.dialog";
import { dialogsAssertions } from "../assertions/dialogs.assertions";
import { welcomeDialog } from "../components/dialogs/welcome.dialog";

const registrationData = require('../../test-data/registration.data');
const loginData = require('../../test-data/login.data');
const agent = require('../../test-utils/helpers/agent.helper');

describe('Registration', async function () {
  const userEmail = registrationData.customer1.email;

  it(`Registration of the new customer ${priority.critical}`, async function () {
    //registration flow
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
    await dialogsAssertions.checkConfirmRegistrationDialogIsDisplayed();
    //check is new user existing in admin page
    await authHelper.setAuthCookiesAndOpenAdminPage(agent, loginData.admin);
    await adminPage.clickRegisteredUserNextPageButton()
    while (await adminPage.isRegisteredUserDisplayed(userEmail) === false) {
      await adminPage.clickRegisteredUserNextPageButton()
    }
  });
});