import AbstractAssertions from "../assertions/abstract.assertions";
import { searchPage } from "../components/pages/search.page";

class SearchPageAssertions extends AbstractAssertions {
  async checkShoppingBucketIsDisplayed() {
    this.checkElementIsDisplayed(
      await searchPage.isShoppingBucketDisplayed(),
      `Shopping Bucket should be displayed`
    )
  }
}
export const searchPageAssertions = new SearchPageAssertions();