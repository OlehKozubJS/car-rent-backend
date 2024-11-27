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
    const newData = { ...oldData, developers: ["Oleh", "Zemfira", "Vitalii"] };
    await writeFile("./users.json", newData);
  } catch (error) {
    console.log(error.message);
  }
};
