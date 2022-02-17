import AbstractAssertions from "../assertions/abstract.assertions";
import { basketPage } from "../components/pages/basket.page";

class BasketAssertions extends AbstractAssertions {
  async checkItemInTheBasketIsDisplayed(item) {
    this.checkElementIsDisplayed(
      await basketPage.isItemInTheBasketDisplayed(item),
      `Item In The Basket should be displayed`
    )
  }
}
export const basketAssertions = new BasketAssertions();