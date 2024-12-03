const { getCars } = require("./imports");

const getCarsInformation = async (request, response) => {
  const carsInformationString = await getCars();
  const carsInformationArray = JSON.parse(carsInformationString);
  await response.send(
    `<a href="/">Return to main page</a>

    <h2>Cars information:</h2>

    <ul>${carsInformationArray
      .map((carInformationObject) => {
        return `<li>
          <ul>${Object.keys(carInformationObject)
            .map((carInformationObjectKey) => {
              return `<li>${carInformationObjectKey}
              : ${carInformationObject[carInformationObjectKey]}</li>`;
            })
            .join("")}
          </ul>  
        </li>`;
      })
      .join("")}
    </ul>`
  );
};

module.exports = { getCarsInformation };
