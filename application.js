console.log("Welcome to Node.js, folks!");

const { error } = require("console");
const { writeFile, readFile, appendFile } = require("fs/promises");

const getText = async () => {
  try {
    const data = await readFile("./users.json", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const addText = async () => {
  try {
    const oldData = await readFile("./users.json", "utf-8");
    const newData = await oldData.clients;
    console.log(newData);
    //await writeFile("./users.json", JSON.stringify(newData));
  } catch (error) {
    console.log(error.message);
  }
};

addText();
