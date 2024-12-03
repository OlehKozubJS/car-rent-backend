const { getCars } = require("./imports");

const getCarsInformation = async (request, response) => {
  const { params } = await request;
  const { carId } = await params;

  const carsInformationString = await getCars();
  const carsInformationArray = JSON.parse(carsInformationString);
  await response.send(
    `<a href="/">Return to main page</a>

    <h2>Selected car information:</h2>

  ${carsInformationArray
    .map((carInformationObject) => {
      return `<ul>
        ${Object.keys(carInformationObject)
          .map((carInformationObjectKey) => {
            return `<li>${carInformationObjectKey}: ${carInformationObject[carInformationObjectKey]}</li>`;
          })
          .join("")}
      </ul>`;
    })
    .join("")}`
  );
};

module.exports = { getCarsInformation };
