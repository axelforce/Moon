import { apiHelper } from "./api.helper";

const cookie = require('cookie');

const { baseUrl, domain } = browser.config;

class AuthHelper {

  async setAuthCookiesAndOpenAdminPage(agent, user, url = '/#/administration') {
    await browser.navigateTo(baseUrl);
    const res = JSON.stringify (await apiHelper.userLogin(agent, user));
    const obj = JSON.parse(res.replace(/[/]/g, '"'));
    const token = obj.authentication.token;

    await browser.execute((barToken) => {
      window.localStorage.setItem('token', barToken);
    }, token)

    await browser.navigateTo(`${baseUrl}${url}`);
    return token;
  }
}
export const authHelper = new AuthHelper();