import { loggerHelper } from './logger.helper';
import proxy from './proxy.helper';

const { restUrl } = browser.config;

class ApiHelper {
  /** Customers */
  async userLogin(agent, user) {
    try {
      return await agent
        .post(`${restUrl}/user/login`)
        .send(user)
        .proxy(proxy)
        .then((res) => {
          if (res.status !== 200 ) {
            loggerHelper.logInfo(`apiHelper.userLogin status error: ${res.status}`);
          } else {
            loggerHelper.logInfo(`apiHelper.userLogin res: ${JSON.stringify(res.body)}`);
            return res.body;
          }
        });
    } catch (err) {
      loggerHelper.logInfo(`apiHelper.userLogin err: ${err}`);
    }
  };
}
export const apiHelper = new ApiHelper();