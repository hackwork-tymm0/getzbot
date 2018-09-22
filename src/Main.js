
const Log = require("./helpers/Log");
const VKBot = require("node-vk-bot-api");

const { token, group_id } = require("../auth");

const log = new Log();

class GetzBot {
    main () {
        log.started();

        const bot = new VKBot({
            token: token,
            group_id: group_id
        });
        
        bot.command("/ping", (ctx) => {
            console.log(ctx);
        });

        bot.startPolling();
    }
}

module.exports = GetzBot;
