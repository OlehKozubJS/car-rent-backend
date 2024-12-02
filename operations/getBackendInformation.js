const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  await response.send(
    `<ul>${carsDataArray.map((carDataObject) => {
      return `<li>${Object.keys(carDataObject)}</li>`;
    })}</ul>`
  );
};

module.exports = { getBackendInformation };
/*

.map((carDataObjectKey) => {
        if (carDataObject[carDataObjectKey] !== ",") {
          return `<p>${carDataObjectKey}: ${carDataObject[carDataObjectKey]}</p>`;
        }
      })

*/
