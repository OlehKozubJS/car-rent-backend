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

application.get("/get", errorHandler(getBackendInformation));

application.get("/post", errorHandler(postBackendInformation));

application.listen(3001, getServerState);
