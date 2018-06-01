'use strict';

// A basic example on how Loggin'JS is used.

// Require the logging library
// const logging = require('loggin-js'); // Should be logging-js
const logging = require('../index');

// Shortcut for the severity constants
const { Severity } = logging;

// Get a logger with DEBUG severity. 
// Severity DEBUG will output any severity.
const logger = logging.getLogger({
  level: Severity.DEBUG,
  color: true,
  /**
   * You can also use a custom formater if the default one does not satisfy your needs.
   * In the formater you can access all log properties and you can also set the 
   * color of some segments of the log by using % folowed by one of:
   *  - r red
   *  - g green
   *  - b blue
   *  - p pink
   *  - y yellow
   *  - c cyan
   *
   * If you use %b lets say it will color until the breakpoint: [-,_|]  
   */
  formater: '[{time.toLocaleString}] - %p<{user}> | {severityStr} | {message} - {data}'
});

// Does the same as passing into settings
logger.setLevel(Severity.DEBUG);
logger.setColor(true);

// Set user to root
logger.setUser('root');


// Available predefined log levels
logger.info('info', {
  user: 'pedro',
  id: 10
});
logger.error('error');
logger.info('info', { data: 'Hi' });
logger.alert('alert');
logger.emergency('emergency');
