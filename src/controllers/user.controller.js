const { userService } = require("../services");
const { ok, fail, catchAsync } = require("../utils");
const { client } = require("../configs/line");

exports.getUsers = catchAsync(async (req, res, next) => {
  const { id } = req.query;

  let result;

  if (id) {
    result = await userService.getUsers(id);
  } else {
    result = await userService.getUsers();
  }

  return ok(res, result);
});
