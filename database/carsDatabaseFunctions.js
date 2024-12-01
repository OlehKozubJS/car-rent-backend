const { writeFile, readFile, appendFile } = require("fs/promises");
const { resolve } = require("path");

const carsPath = resolve("database", "advertsCars.json");
const makesPath = resolve("database", "makes.json");

const getCars = async () => {
  const carsData = await readFile(carsPath, "utf-8");
  return carsData;
};

const setCars = async (newCars) => {
  await writeFile(carsPath, newCars);
};

const addCar = async (newCar) => {
  const oldCars = await readFile(carsPath, "utf-8");
  const oldCarsObject = await JSON.parse(oldCars);
  const newCarsObject = [...oldCarsObject, newCar];
  const newCars = JSON.stringify(newCarsObject);
  await writeFile(carsPath, newCars);
};

module.exports = { getCars, setCars, addCar };
