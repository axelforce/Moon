import AbstractAssertions from "../assertions/abstract.assertions";
import { searchPage } from "../components/pages/search.page";

class SearchPageAssertions extends AbstractAssertions {
  async checkShoppingBasketIsDisplayed() {
    this.checkElementIsDisplayed(
      await searchPage.isShoppingBasketDisplayed(),
      `Shopping Bucket should be displayed`
    )
  }
}
export const searchPageAssertions = new SearchPageAssertions();