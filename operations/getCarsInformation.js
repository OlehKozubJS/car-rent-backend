const { getCars } = require("./imports");

const getCarsInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  await response.send(
    `<ul>${carsDataArray
      .map((carDataObject) => {
        return `<li><ul>${Object.keys(carDataObject)
          .map((carDataObjectKey) => {
            return `<li>${carDataObjectKey}: ${carDataObject[carDataObjectKey]}</li>`;
          })
          .join("")}</ul></li>`;
      })
      .join("")}</ul>`
  );
};

module.exports = { getBackendInformation };
