const { writeFile, readFile, appendFile } = require("fs/promises");

const express = require("express");
const cors = require("cors");

const errorHandler = (callback) => {
  return async (request, response, next) => {
    try {
      callback(request, response);
    } catch (error) {
      next(error);
    }
  };
};

const application = express();

application.use(cors());

application.get(
  "/",
  errorHandler(async (request, response) => {
    await response.send("<p>Hello, dear comrades!</p>");
  })
);

application.get(
  "/get",
  errorHandler(async (request, response) => {
    await response.send("<p>Hello! I am VioletFox! Progress Wins!</p>");
  })
);

application.get(
  "/post",
  errorHandler(async (request, response) => {
    const { query } = await request;
    const { first, second } = await query;
    await response.send(
      `<p style="background-color: rgb(220, 220, 240); color: rgb(180, 160, 200);">${first}+${second}=${
        Number(first) + Number(second)
      }</p>`
    );
  })
);

application.listen(3001, () => {
  console.log("Server is working!");
});
