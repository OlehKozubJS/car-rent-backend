const { writeFile, readFile, appendFile } = require("fs/promises");
const { resolve } = require("path");

const cars = "./advertsCars.json";
const makes = "./makes.json";

const getCars = async () => {
  //const cars = resolve("database", "advertsCars.json");
  const carsData = await readFile("../database/advertsCars.json", "utf-8");
  return carsData;
};

const setCars = async (newCars) => {
  await writeFile(cars, newCars);
};

const addCar = async (newCar) => {
  const oldCars = await readFile(cars, "utf-8");
  const oldCarsObject = await JSON.parse(oldCars);
  const newCarsObject = await { ...oldCarsObject, newCar };
  const newCars = await JSON.stringify(newCarsObject);
  await writeFile(cars, newCars);
};

module.exports = { getCars, setCars, addCar };
