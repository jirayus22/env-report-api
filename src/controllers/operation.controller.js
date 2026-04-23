const { operationService } = require("../services");
const { ok, fail, catchAsync } = require("../utils");
const { client } = require('../configs/line');

exports.getOperation = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await operationService.getOperation();

  return ok(res, result);
});

exports.createOperation = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await operationService.createOperation(payload);

  await client.broadcast({
    messages: [
      {
        type: 'text',
        text: `New operation created \nDetails: ${JSON.stringify(result, null, 2)}`
      }
    ]
  });

  return ok(res, result);
});
