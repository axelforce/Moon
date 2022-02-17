import AbstractComponent from '../../components/abstract.component';

let itemName;

class SearchPage extends AbstractComponent {
  constructor() {
    super('');
  }
  /** Selectors */
  get $shoppingBasket() {
    return $(`[routerlink="/basket"]`)
  }

  get $addToBasketGreenSmoothieButton() {
    return $(`//div[contains(text(),"${itemName}")]/../..//following-sibling::div/button`)
  }

  /** Methods */
  async isShoppingBasketDisplayed() {
    return await this.isElementDisplayed(await this.$shoppingBasket);
  }

  async clickShoppingBucketButton() {
    await this.waitThanClick(await this.$shoppingBasket);
  }

  async clickAddItemToBasketButton(item) {
    itemName = item;
    await this.waitThanClick(await this.$addToBasketGreenSmoothieButton);
  }
}
export const searchPage = new SearchPage();