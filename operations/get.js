const { writeFile, readFile, appendFile } = require("fs/promises");

const express = require("express");
const cors = require("cors");

const { errorHandler } = require("./hooks");

const application = express();

application.use(cors());

application.get(
  "/",
  errorHandler(async (request, response) => {
    await response.send(
      '<p>Hello, dear comrades!</p><a href="/get">Get page</a>'
    );
  })
);

application.get(
  "/get",
  errorHandler(async (request, response) => {
    await response.send(
      '<p>Hello! I am VioletFox! Progress Wins!</p><a href="/">Main page</a>'
    );
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
      }</p><a href="/">Main page</a>`
    );
  })
);

application.listen(3001, () => {
  console.log("Server is working!");
});