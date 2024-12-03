const { getMainBackendPage } = require("./getMainBackendPage");
const { postBackendInformation } = require("./postBackendInformation");
const { getBackendInformation } = require("./getBackendInformation");
const { getCarsInformation } = require("./getCarsInformation");
const { getCarInformationById } = require("./getCarInformationById");
const { getServerState } = require("./getServerState");

module.exports = {
  getMainBackendPage,
  postBackendInformation,
  getBackendInformation,
  getCarsInformation,
  getServerState,
};
