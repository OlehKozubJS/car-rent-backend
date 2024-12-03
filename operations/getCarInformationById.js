const { getCars } = require("./imports");

const getCarsInformation = async (request, response) => {
  const { params } = await request;
  const { carId } = await params;

  const carsInformationString = await getCars();
  const carsInformationArray = JSON.parse(carsInformationString);

  const carInformation = carsInformationArray.find(
    (carInformationObject) => carInformationObject.id === carId
  );

  await response.send(
    `<a href="/">Return to main page</a>

    <h2>Selected car information:</h2>

    <ul>
      ${Object.keys(carInformationObject)
        .map((carInformationObjectKey) => {
          return `<li>${carInformationObjectKey}: ${carInformationObject[carInformationObjectKey]}</li>`;
        })
        .join("")}
    </ul>
  );
};

module.exports = { getCarsInformation };
