const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    work_date: {
      type: Date,
      required: true,
    },
    system_status: {
      type: Boolean,
      default: false,
    },
    pump_status: {
      type: Boolean,
      default: false,
    },
    aerator_status: {
      type: Boolean,
      default: false,
    },
    sludge_pump_status: {
      type: Boolean,
      default: false,
    },
    chlorine_status: {
      type: Boolean,
      default: false,
    },
    do_value: {
      type: Number,
    },
    sv30_value: {
      type: Number,
    },
    ph_value: {
      type: Number,
    },
    ramark: {
      type: String,
    },
    user_create: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Operation", operationSchema, "operations");
