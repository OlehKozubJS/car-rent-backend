const { getCars } = require("./imports");

const getCarsInformation = async (request, response) => {
  const carsInformationString = await getCars();
  const carsInformationArray = JSON.parse(carsData);
  await response.send(
    `<ul>${carsInformationArray
      .map((carInformationObject) => {
        return `<li><ul>${Object.keys(carInformationObject)
          .map((carInformationObjectKey) => {
            return `<li>${carInformationObjectKey}: ${carInformationObject[carInformationObjectKey]}</li>`;
          })
          .join("")}</ul></li>`;
      })
      .join("")}</ul>`
  );
};

module.exports = { getCarsInformation };
