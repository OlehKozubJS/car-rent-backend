const cars = require("./advertsCars.json");
const makes = require("./makes.json");

const { getCars, setCars, addCar } = require("./carsDatabaseFunctions");

module.exports = { cars, makes, getCars, setCars, addCar };
