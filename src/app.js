const express = require("express");
const routes = require("./routes");
const routeLine = require("./routes/line.route");
const { errorConverter, errorHandler } = require("./middlewares/error");
const cors = require("cors");

const app = express();

// The Line Bot must always be configured before express.json().
app.use("/api/v1/line", routeLine);

app.use(express.json());

app.use(cors());
app.use("/api/v1", routes);

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
