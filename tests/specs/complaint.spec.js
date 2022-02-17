import { priority } from "../../test-data/priority.tags.json";
import { dialogsAssertions } from "../assertions/dialogs.assertions";
import { searchPageAssertions } from "../assertions/search.page.assertions";
import { flows } from "../components/flows";
import { complaintDialog } from "../components/dialogs/complaint.dialog";

const registrationData = require('../../test-data/registration.data');

describe('Complaint', async function () {
  const userEmail = registrationData.customer1.email;
  const userPassword = registrationData.customer1.password;
  const testComplaintMessage = "test message for complaint";
  const complaintConfirmationMessage = "Customer support will get in touch with you soon! Your complaint reference is ";

  before( async function () {
    await flows.registrationFlow(userEmail);
    await dialogsAssertions.checkConfirmRegistrationDialogIsDisplayed();
    await flows.loginFlow(userEmail, userPassword);
    await searchPageAssertions.checkShoppingBasketIsDisplayed();
  })
  it(`Send complaint with attachment  ${priority.low}`, async function () {
    await complaintDialog.open();
    await complaintDialog.setMessage(testComplaintMessage);
    await complaintDialog.uploadFiles();
    await complaintDialog.clickSubmitButton();
    await dialogsAssertions.checkComplaintConfirmationMessageTextContains(complaintConfirmationMessage);
  });
});