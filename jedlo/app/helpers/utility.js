const winston = require('winston');

exports.logError = async (error) => {
	const logger = winston.createLogger({
        level: 'error',
        transports: [
            new winston.transports.File({ filename: 'error.log' })
        ]
    })

    logger.log({
        level: 'error',
        message: error
    });
}