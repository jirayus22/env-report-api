const Report = require("../models/Report");

exports.createReport = async (data) => {
  // validate สำคัญ ๆ
  if (!data.project_id) {
    throw new Error("project_id is required");
  }

  if (!data.work_date) {
    throw new Error("work_date is required");
  }

  const report = await Report.create(data);

  return report;
};
