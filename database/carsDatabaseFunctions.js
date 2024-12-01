const { writeFile, readFile, appendFile } = require("fs/promises");
const { resolve } = require("path");

const carsPath = resolve("database", "advertsCars.json");
const makesPath = resolve("database", "makes.json");

const getCars = async () => {
  return await readFile(carsPath, "utf-8");
};

const setCars = async (newCars) => {
  await writeFile(carsPath, newCars);
};

const addCar = async (newCar) => {
  const oldCars = await readFile(carsPath, "utf-8");
  const oldCarsArray = await JSON.parse(oldCars);
  const newCarsArray = [...oldCarsArray, newCar];
  const newCars = JSON.stringify(newCarsArray);
  await writeFile(carsPath, newCars);
};

module.exports = { getCars, setCars, addCar };
