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
    const oldTextJSON = await readFile("./users.json", "utf-8");
    const oldTextObject = await JSON.parse(oldTextJSON);
    const newTextObject = {
      ...oldTextObject,
      developers: ["Oleh", "Zemfira", "Vitalii"],
    };
    console.log(newTextObject);
    const newTextJSON = JSON.stringify(newTextObject);
    await writeFile("./users.json", newTextJSON);
  } catch (error) {
    console.log(error.message);
  }
};

addText();
