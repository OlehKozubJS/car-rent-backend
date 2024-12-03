const express = require("express");
const cors = require("cors");

const { errorHandler } = require("./hooks");
const {
  getMainBackendPage,
  postBackendInformation,
  getBackendInformation,
  getServerState,
} = require("./operations");

const application = express();

application.use(cors());

application.get("/", errorHandler(getMainBackendPage));

application.get("/getCars", errorHandler(getCarsInformation));

application.get("/addCars", errorHandler(postBackendInformation));

application.listen(3001, getServerState);
