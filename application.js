console.log("Welcome to Node.js, folks!");

const { error } = require("console");
const { writeFile, readFile } = require("fs/promises");

readFile("./package.json")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
