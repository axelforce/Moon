import AbstractAssertions from "../assertions/abstract.assertions";
import { adminPage } from "../components/pages/admin.page";

class AdminPageAssertions extends AbstractAssertions {
  async checkRegisteredUserIsDisplayed(email) {
    this.checkElementIsDisplayed(
      await adminPage.isRegisteredUserDisplayed(email),
      `Registered User should be displayed`
    )
  }
}
export const adminPageAssertions = new AdminPageAssertions();