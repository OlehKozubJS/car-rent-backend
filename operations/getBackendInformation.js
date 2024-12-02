const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  await response.send(`${carsDataArray}`);
};

module.exports = { getBackendInformation };
