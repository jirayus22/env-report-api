const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    project_id: {
      type: String,
      required: true,
    },
    work_date: {
      type: Date,
      required: true,
    },
    system_status: Boolean,
    pump_status: Boolean,
    aerator_status: Boolean,
    sludge_pump_status: Boolean,
    chlorine_status: Boolean,
    do_value: Number,
    sv30_value: Number,
    ph_value: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Report", reportSchema, "operaltions");
