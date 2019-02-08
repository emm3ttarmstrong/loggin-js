const loggin = require('../index.js');

let logger = loggin.logger({
  ignore(log, notifier) {
    return log.level.toString() == 'INFO';
  },
  preNotify(log, notifier) {
    log.message = '<%b------> <%y' + log.message.toLowerCase() + '> <%b------>';
    log.level.name = log.level.name.toLowerCase();
  },
  color: true,
  formatter: 'detailed',
  channel: 'test'
});

logger.debug('wanted');
logger.debug('wanted');
logger.info('>>__ not wanted');
logger.debug('wanted');
logger.debug('wanted');