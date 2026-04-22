const express = require("express");
const reportRoutes = require("./routes/report.route");

const app = express();

app.use(express.json());

app.use("/api/reports", reportRoutes);

module.exports = app;
