import AbstractComponent from '../../components/abstract.component';

class SearchPage extends AbstractComponent {
  constructor() {
    super('');
  }
  /** Selectors */
  get $shoppingBucket() {
    return $(`[routerlink="/basket"]`)
  }



  /** Methods */
  async isShoppingBucketDisplayed() {
    return await this.isElementDisplayed(await this.$shoppingBucket);
  }

  async clickShoppingBucketButton() {
    await this.waitThanClick(await this.$shoppingBucket);
  }
}
export const searchPage = new SearchPage();