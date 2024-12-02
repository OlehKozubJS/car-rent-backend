const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  await response.send(
    `<ul>${carsDataArray.map((carDataObject) => {
      return `<li>${carDataObject}</li>`;
    })}</ul>`
  );
};

module.exports = { getBackendInformation };
