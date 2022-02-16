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
    await browser.pause(500); // TODO investigate issue with click on elements after scrolling
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

  async setNotInteractableInput($element, value, timeInMilliseconds = 10 * 1000) {
    const fileUpload = await $element;
    await browser.execute(
      // assign style to elem in the browser
      (el) => el.style.display = 'block',
      // pass in element so we don't need to query it again in the browser
      fileUpload,
    );
    await fileUpload.waitForExist({ timeout: timeInMilliseconds });
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

  async waitForPageIsFullScreenMode() {
    await browser.waitUntil(
      async function () {
        return await browser.execute(function () {
          return Boolean(document.fullscreenElement);
        });
      },
      {
        timeout: 7000,
        timeoutMsg: 'Oops! Page is not in full screen mode',
      },
    );
  }

  /** Is... */
  async isElementDisplayed($element, timeInMilliseconds = 10 * 1000) {
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
  async clickCloseDialogButton() {
    const closeButton = await $('mat-dialog-container [class*="icon-close"], [class*="icon-close"]');
    await this.waitThanClick(await closeButton);
  }

  async clickOnOverlay() {
    const overlay = await $('.cdk-overlay-container');
    await this.waitThanClick(await overlay);
  };

  /** Get */
  async getPageTitle() {
    return browser.getTitle();
  }

  /** Application */
  async appDoubleClick($element) {
    await $element.doubleClick();
  }

  // multi action on an element
  // drag&drop from position 200x200 down >= 200px on the screen
  async appScrollDown(pixels = 200) {
    await browser.touchAction([
      { action: 'press', x: 200, y: 200 },
      { action: 'moveTo', x: 200, y: 200 + pixels },
      'release'
    ])
  }

  async appTapOutside() {
    await browser.touchAction([
      { action: 'press', x: 200, y: 50 },
    ])
  }

  async appMobileScrollDown() {
    await browser.execute("mobile: scroll", { direction: 'down' });
  }

  async appWaitThanClick($element, timeInMilliseconds = 10 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.click();
  }
}
