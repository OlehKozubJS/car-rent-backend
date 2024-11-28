const { writeFile, readFile, appendFile } = require("fs/promises");

const express = require("express");
const cors = require("cors");

const application = express();

application.use(cors());

application.get("/", (request, response) => {
  response.send("<p>Hello dudes!</p>");
});

application.get("/get", (request, response) => {
  response.send("<p>Hello! I am VioletFox! Progress Wins!</p>");
});

application.listen(3001);
