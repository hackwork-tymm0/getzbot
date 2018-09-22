
const TymLogger = require("tymlogger");

const logger = new TymLogger();

class Log {
    started() {
        logger.success("getzbot started!");
    }
}

module.exports = Log;
