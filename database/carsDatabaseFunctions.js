const { writeFile, readFile, appendFile } = require("fs/promises");

const cars = "./advertsCars.json";
const makes = "./makes.json";

const errorHandler = (callback) => {
  return async (request, response, next) => {
    try {
      callback(request, response);
    } catch (error) {
      next(error);
    }
  };
};

const getCars = async () => {
  return await readFile(cars, "utf-8");
};

const setCars = async (newCars) => {
  await writeFile(cars, newCars);
};

const addText = async (newCars) => {
  const oldCars = await readFile(cars, "utf-8");
  const oldCarsObject = JSON.parse(oldCars);
  await writeFile(cars, oldText + newText);
};

module.exports = {};
