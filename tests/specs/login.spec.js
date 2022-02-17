import { priority } from "../../test-data/priority.tags.json";
import { loginDialog } from "../components/dialogs/login.dialog";
import { dialogsAssertions } from "../assertions/dialogs.assertions";
import { searchPageAssertions } from "../assertions/search.page.assertions";
import { flows } from "../components/flows";

const registrationData = require('../../test-data/registration.data');

describe('Login', async function () {
  const userEmail = registrationData.customer1.email;
  const userPassword = registrationData.customer1.password;

  before( async function () {
    await flows.registrationFlow(userEmail);
    await dialogsAssertions.checkConfirmRegistrationDialogIsDisplayed();
  })
  it(`User login ${priority.high}`, async function () {
    //registration flow
    await loginDialog.open();
    await loginDialog.setEmail(userEmail);
    await loginDialog.setPassword(userPassword);
    await loginDialog.clickLoginButton();
    await searchPageAssertions.checkShoppingBasketIsDisplayed();
  });
});