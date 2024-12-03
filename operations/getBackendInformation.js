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

const testArray = [
  "firstItem",
  "secondItem",
  "thirdItem",
  "fourthItem",
  "fifthItem",
];

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  await response.send();
};

module.exports = { getBackendInformation };

/*.filter((carDataObjectKey) => carDataObject[carDataObjectKey] !== ",")*/
/*

    `<ul>${testCollection.map((carDataObject) => {
      console.log(carDataObject);
      return `<li style="background-color: rgb(230, 200, 200);"><ul>${Object.keys(
        carDataObject
      ).map((carDataObjectKey) => {
        console.log(carDataObjectKey);
        return `<li style="background-color: rgb(200, 200, 230); border: 3px dashed rgb(200, 215, 200);">${carDataObjectKey}: ${carDataObject[carDataObjectKey]}</li>`;
      })}</ul></li>`;
    })}</ul>`

*/
