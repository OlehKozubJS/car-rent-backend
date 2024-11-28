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
  "/post/:first/:second",
  errorHandler(async (request, response) => {
    const { params } = await request;
    const { first, second } = await params;
    await response.send(
      `<p>${first}+${second}=${Number(first) + Number(second)}</p>`
    );
  })
);

application.listen(3001);
