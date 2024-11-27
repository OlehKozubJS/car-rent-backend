console.log("Welcome to Node.js, folks!");

const { error } = require("console");
const { writeFile, readFile } = require("fs/promises");

const fileOperation = async () => {
  try {
    const data = await readFile("./users.json", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fileOperation();
