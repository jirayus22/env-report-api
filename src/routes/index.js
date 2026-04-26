const express = require("express");
const reportRoute = require("./operation.route");
const userRoute = require("./user.route");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/operations",
    route: reportRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
