const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  //const cars = await getCars();
  await response.send(`cars`);
};

module.exports = { getBackendInformation };
