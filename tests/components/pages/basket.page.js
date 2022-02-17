import AbstractComponent from '../../components/abstract.component';

let itemName;

class BasketPage extends AbstractComponent {
  constructor() {
    super('');
  }

  /** Selectors */
  get $itemInTheBasket() {
    return $(`//mat-cell[contains(text(),"${itemName}")]`)
  }

  /** Methods */
  async isItemInTheBasketDisplayed(item) {
    itemName = item;
    return await this.isElementDisplayed(await this.$itemInTheBasket)
  }
}
export const basketPage = new BasketPage();