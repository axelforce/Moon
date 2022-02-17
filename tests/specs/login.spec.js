import { priority } from "../../test-data/priority.tags.json";
import { loginDialog } from "../components/dialogs/login.dialog";
import { registerDialog } from "../components/dialogs/register.dialog";
import { dialogsAssertions } from "../assertions/dialogs.assertions";
import { welcomeDialog } from "../components/dialogs/welcome.dialog";
import { searchPageAssertions } from "../assertions/search.page.assertions";

const registrationData = require('../../test-data/registration.data');

describe('Login', async function () {
  const userEmail = registrationData.customer1.email;
  const userPassword = registrationData.customer1.password;

  before( async function () {
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
  })

  it(`User login ${priority.critical}`, async function () {
    await loginDialog.open();
    await loginDialog.setEmail(userEmail);
    await loginDialog.setPassword(userPassword);
    await loginDialog.clickLoginButton();
    await searchPageAssertions.checkShoppingBucketIsDisplayed();
  });
});