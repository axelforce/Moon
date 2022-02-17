const winston = require('winston');

class LoggerHelper {
  logInfo(message) {
    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.simple(),
    });
    logger.info(message);
  }
}
export const loggerHelper = new LoggerHelper();