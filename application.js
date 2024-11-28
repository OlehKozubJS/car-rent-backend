const { writeFile, readFile, appendFile } = require("fs/promises");

const express = require("express");
const cors = require("cors");

const application = express();
