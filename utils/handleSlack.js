const {IncomingWebhook} = require('@slack/webhook');
const slackWebhook = 'https://hooks.slack.com/services/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';
const webHook = new IncomingWebhook(slackWebhook)


const loggerStream = {
  write: (message) => {
    webHook.send({
      text: message,
    });
    // do anything - emit to websocket? send message somewhere? log to cloud?
  },
};

module.exports = loggerStream;
