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
  errorHandler((request, response) => {
    response.send("<p>Hello dudes!</p>");
  })
);

application.get(
  "/get",
  errorHandler((request, response) => {
    response.send("<p>Hello! I am VioletFox! Progress Wins!</p>");
  })
);

application.post(
  "/put",
  errorHandler((request, response) => {
    const {} = request;
  })
);

application.listen(3001);
