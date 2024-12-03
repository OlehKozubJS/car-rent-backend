const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  const carsData = await getCars();
  const carsDataArray = JSON.parse(carsData);
  console.log(carsDataArray);
  await response.send(
    `<ul>${carsDataArray.map((carDataObject) => {
      return `<li style="background-color: blue;>${Object.keys(carDataObject)
        /*.filter((carDataObjectKey) => carDataObject[carDataObjectKey] !== ",")*/
        .map((carDataObjectKey) => {
          return `<p style="background-color: red;">${carDataObjectKey}: ${carDataObject[carDataObjectKey]}</p>`;
        })}</li>`;
    })}</ul>`
  );
};

module.exports = { getBackendInformation };
/*



*/
