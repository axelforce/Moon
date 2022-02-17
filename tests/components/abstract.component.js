export default class AbstractComponent {
  constructor(relativeUrl) {
    this.relativeUrl = relativeUrl;
  }

  /** Open... */
  async openUrl(path) {
    await browser.navigateTo(path);
    await this.waitForUrl(this.relativeUrl);
    await this.waitForPageIsLoaded();
  }

  async open(addOnParameter = '') {
    const path = `${browser.config.baseUrl}${this.relativeUrl}${addOnParameter}`;
    await this.openUrl(path);
  }

  async openCurrentUrlWithQueryString(queryString) {
    const currentUrl = await browser.getUrl();
    await this.openUrl(currentUrl + queryString);
  }

  /** Wait... */
  async waitFor(condition, timeout = browser.config.waitforTimeout, message) {
    await browser.waitUntil(condition, {
      timeout,
      timeoutMsg: message,
    });
  }

  async waitForUrl(url) {
    await this.waitFor(
      async () => await (await browser.getUrl()).includes(url),
      60 * 1000, `Expected ${url} but got ${await browser.getUrl()}`,
    );
  }

  async waitForPageIsLoaded() {
    await browser.waitUntil(
      async function () {
        const state = await browser.execute(function () {
          return document.readyState;
        });
        return state === 'complete';
      },
      {
        timeout: 60000,
        timeoutMsg: 'Oops! Check your internet connection',
      },
    );
  }

  async waitThanClick($element, timeInMilliseconds = 10 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.waitForClickable({ timeout: timeInMilliseconds });
    await $element.click();
  }

  async waitScrollThanClick($element, timeInMilliseconds = 5 * 1000) {
    await $element.waitForExist({ timeout: timeInMilliseconds });
    await $element.scrollIntoView({ block: 'center' });
    await $element.click();
  }

  async waitForDisplayed($element, timeInMilliseconds = 10 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
  }

  async waitThanSetValue($element, value, timeInMilliseconds = 5 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.setValue(value);
  }

  async waitClearThanAddValue($element, value, timeInMilliseconds = 5 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.waitForClickable({ timeout: timeInMilliseconds });
    await $element.clearValue();
    await $element.addValue(value);
  }

  async waitThanGetText($element, timeInMilliseconds = 5 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    return await $element.getText();
  }

  async waitThanGetValue($element, timeInMilliseconds = 5 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.waitForClickable({ timeout: timeInMilliseconds });
    return await $element.getValue();
  }

  async waitThanClearValueInputs($element, count, timeInMilliseconds = 5 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.setValue(' ');
    for (let index = 0; index < count; ++index) {
      await browser.keys('\uE003');
    }
  }

  async waitThanMoveTo($element, timeInMilliseconds = 5 * 1000) { // used for mouse hover
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.moveTo();
  }

  /** Is... */
  async isElementDisplayed($element, timeInMilliseconds = 4 * 1000) {
    try {
      await $element.waitForDisplayed({ timeout: timeInMilliseconds });
      return true;
    } catch (e) {
      return false;
    }
  }

  async isElementEnabled($element, timeInMilliseconds = 5 * 1000) {
    await $element.waitForExist({ timeout: timeInMilliseconds });
    return await $element.isEnabled();
  }

  async isElementNotClickable($element, timeInMilliseconds = 5 * 1000) {
    try {
      await this.waitFor(
        async () => await (await $element).isClickable() === false,
        `Expected ${$element} to be not clickable`,
        timeInMilliseconds,
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  async isTextContainsNumber(text) {
    const regex = /\d/g;
    return regex.test(text);
  }

  /** Close */
  async clickOnOverlay() {
    const overlay = await $('.cdk-overlay-container');
    await this.waitThanClick(await overlay);
  };

  /** Get */
  async getPageTitle() {
    return browser.getTitle();
  };
}
