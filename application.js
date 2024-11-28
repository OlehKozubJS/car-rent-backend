const { writeFile, readFile, appendFile } = require("fs/promises");
const application = require("express");
const cors = require("cors");

/*
const getText = async () => {
  try {
    const data = await readFile("./users.json", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const addText = async (newData) => {
  try {
    const oldTextJSON = await readFile("./users.json", "utf-8");
    const oldTextObject = await JSON.parse(oldTextJSON);
    const newTextObject = await {
      ...oldTextObject,
      ...newData,
    };
    console.log(newTextObject);
    const newTextJSON = JSON.stringify(newTextObject);
    await writeFile("./users.json", newTextJSON);
  } catch (error) {
    console.log(error.message);
  }
};
*/
//addText({ developer: ["Oleh", "Zemfira", "Vitalii"] });
