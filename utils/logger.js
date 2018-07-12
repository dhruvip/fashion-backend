var winston = require('winston');
winston.emitErrs = true;
var fs = require('fs');

if (!fs.existsSync('./log')){
    fs.mkdirSync('./log');
}

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'silly',
            filename: './log/all.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            'timestamp':true,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
