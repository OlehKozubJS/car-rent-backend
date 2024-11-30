const { writeFile, readFile, appendFile } = require("fs/promises");

const errorHandler = (callback) => {
  return async (request, response, next) => {
    try {
      callback(request, response);
    } catch (error) {
      next(error);
    }
  };
};

const getText = async () => {
  return await readFile("./contacts/simpleTextFile.txt", "utf-8");
};

const setText = async (newText) => {
  await writeFile("./contacts/simpleTextFile.txt", newText);
};

const addText = async (newText) => {
  const oldText = await readFile("./contacts/simpleTextFile.txt", "utf-8");
  await writeFile("./contacts/simpleTextFile.txt", oldText + newText);
};
