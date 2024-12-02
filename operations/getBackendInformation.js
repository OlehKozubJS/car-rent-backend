const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  await response.send("A!");
};

module.exports = { getBackendInformation };
/*

  `<ul>${carsDataArray.map((carDataObject) => {
      return `<li>${carDataObject}</li>`;
    })}</ul>`

*/
