
const { ok, catchAsync } = require("../utils");
const { client } = require('../configs/line');

exports.webhook = catchAsync(async (req, res, next) => {
  const result = await Promise.all(req.body.events.map(handleEvent));
  return ok(res, result);
});

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  // Reply message logic here, for example, echoing the received message
  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [{ type: 'text', text: `You said: ${event.message.text}` }],
  });
}