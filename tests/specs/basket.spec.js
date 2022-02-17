import { priority } from "../../test-data/priority.tags.json";
import { dialogsAssertions } from "../assertions/dialogs.assertions";
import { searchPageAssertions } from "../assertions/search.page.assertions";
import { flows } from "../components/flows";
import { searchPage } from "../components/pages/search.page";
import { basketAssertions } from "../assertions/basket.assertions";

const registrationData = require('../../test-data/registration.data');
const marketItems = require('../../test-data/items.data');

describe('Basket', async function () {
  const userEmail = registrationData.customer1.email;
  const userPassword = registrationData.customer1.password;

  before( async function () {
    await flows.registrationFlow(userEmail);
    await dialogsAssertions.checkConfirmRegistrationDialogIsDisplayed();
    await flows.loginFlow(userEmail, userPassword);
    await searchPageAssertions.checkShoppingBasketIsDisplayed();
  })
  it(`Put any item to basket and check that it presented ${priority.medium}`, async function () {
    await searchPage.clickAddItemToBasketButton(marketItems.greenSmoothie);
    await searchPage.clickShoppingBucketButton();
    await basketAssertions.checkItemInTheBasketIsDisplayed(marketItems.greenSmoothie);
  });
});