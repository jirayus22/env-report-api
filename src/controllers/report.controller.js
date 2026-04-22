const reportService = require("../services/report.service");

exports.createReport = async (req, res) => {
  try {
    const payload = req.body;

    const result = await reportService.createReport(payload);

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
