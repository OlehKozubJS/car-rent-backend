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
  const data = await readFile("./simpleTextFile.txt", "utf-8");
  console.log(data);
};

const addText = async (newData) => {
  const oldText = await readFile("./simpleTextFile.txt", "utf-8");
  const newText = oldText + newData;
  console.log(newText);
  await writeFile("./simpleTextFile.txt", newText);
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
