const { operationService } = require("../services");
const { ok, fail, catchAsync } = require("../utils");

exports.getOperation = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await operationService.getOperation();

  return ok(res, result);
});

exports.createOperation = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await operationService.createOperation(payload);

  return ok(res, result);
});
