const { getCars } = require("./imports");

const { getCarInformation } = require("./getCarInformation.js");

const getCarInformationById = async (request, response) => {
  const { params } = await request;
  const { carId } = await params;

  const carsInformationString = await getCars();
  const carsInformationArray = JSON.parse(carsInformationString);

  const carInformationObject = await carsInformationArray.find(
    (car) => car.id === Number(carId)
  );

  await response.send(
    `<a href="/">Return to main page</a>

    <h2>Selected car information:</h2>

    ${getCarInformation(carInformationObject)}`
  );
};

module.exports = { getCarInformationById };
