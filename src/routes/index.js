const express = require("express");
const reportRoute = require("./operation.route");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/operations",
    route: reportRoute,
  },
  {
    path: "/users",
    route: reportRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
