const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  await response.send(
    '<p>Hello, dear comrades!</p><a href="/get">Get page</a>'
  );
};

module.exports = { getBackendInformation };
