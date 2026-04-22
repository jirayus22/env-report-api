const express = require("express");
const routes = require('./routes');
const { errorConverter, errorHandler } = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/api/v1', routes);

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
