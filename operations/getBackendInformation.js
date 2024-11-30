const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  await response.send(carsData);
};

module.exports = { getBackendInformation };
