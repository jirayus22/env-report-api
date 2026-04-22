const ok = (res, data) => {
  res.status(200).json({
    success: true,
    data,
  });
};

module.exports = {
  ok,
};