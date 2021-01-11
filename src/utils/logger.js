const { createLogger, format, transports } = require('winston');
const appRoot = require('app-root-path');
require('winston-daily-rotate-file');

const logger = createLogger({
    format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`+(info.splat!==undefined?`${info.splat}`:" "))
    ),
    transports: [
        new transports.Console(),
        new transports.DailyRotateFile ({
        filename:  'application-%DATE%.log',
        dirname:  `${appRoot}/logs/`,
        level:  'info',
        handleExceptions:  true,
        colorize:  true,
        json:  false,
        zippedArchive:  true,
        maxSize:  '20m',
        maxFiles:  '14d'
    }),  new transports.DailyRotateFile ({
        filename:  'application-error-%DATE%.log',
        dirname:  `${appRoot}/logs/`,
        level:  'error',
        handleExceptions:  true,
        colorize:  true,
        json:  false,
        zippedArchive:  true,
        maxSize:  '20m',
        maxFiles:  '14d'
    })
],exitOnError:  false});

module.exports = logger;
 