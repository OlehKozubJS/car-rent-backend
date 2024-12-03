const { getCars } = require("./imports");

const testCollection = [
  {
    firstObjectFirstPorperty: "firstObjectFirstValue",
    firstObjectSecondProperty: "firstObjectSecondValue",
    firstObjectThirdPorperty: "firstObjectThirdValue",
  },
  {
    secondObjectFirstProperty: "secondObjectFirstValue",
    secondObjectSecondProperty: "secondObjectSecondValue",
    secondObjectThirdProperty: "secondObjectThirdValue",
  },
  {
    thirdObjectFirstProperty: "thirdObjectFirstValue",
    thirdObjectSecondProperty: "thirdObjectSecondValue",
    thirdObjectThirdProperty: "thirdObjectThirdValue",
  },
];

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  console.log(carsDataArray);
  await response.send(
    `<ul>${testCollection.map((carDataObject) => {
      return `<li style="background-color: rgb(230, 200, 200);>${Object.keys(
        carDataObject
      ).map((carDataObjectKey) => {
        return `<p style="background-color: rgb(200, 200, 230);">${carDataObjectKey}: ${carDataObject[carDataObjectKey]}</p>`;
      })}</li>`;
    })}</ul>`
  );
};

module.exports = { getBackendInformation };

/*.filter((carDataObjectKey) => carDataObject[carDataObjectKey] !== ",")*/
