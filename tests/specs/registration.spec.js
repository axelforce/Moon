import { priority } from "../../test-data/priority.tags.json";
import { dialogsAssertions } from "../assertions/dialogs.assertions";
import { mainPage } from "../components/pages/main.page";

describe('Registration', async function () {


  beforeEach(async function () {

  });

  it(`Registration of the new customer ${priority.critical}`, async function () {
    await mainPage.open()
    await dialogsAssertions.checkWelcomeDialogDisplayed();
  });
});