const { writeFile, readFile, appendFile } = require("fs/promises");

const contacts = require("./contacts");

const tryCatcher = async (callback, params) => {
  try {
    await callback(params);
  } catch (error) {
    console.log(error.message);
  }
};

const getText = async () => {
  try {
    const data = await readFile("./simpleTextFile.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const addText = async (newData) => {
  try {
    const oldText = await readFile("./simpleTextFile.txt", "utf-8");
    const newText = oldText + newData;
    await writeFile("./simpleTextFile.txt", newText);
  } catch (error) {
    console.log(error.message);
  }
};

//addText({ developer: ["Oleh", "Zemfira", "Vitalii"] });
/*

    const oldTextObject = await JSON.parse(oldTextJSON);
    const newTextObject = await {
      ...oldTextObject,
      ...newData,
    };
    console.log(newTextObject);
    const newTextJSON = JSON.stringify(newTextObject);

*/

addText("def");
