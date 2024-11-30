const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  await getCars();
  await response.send(`cars`);
};

module.exports = { getBackendInformation };
