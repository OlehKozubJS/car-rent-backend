const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  await response.send(
    `<p>Hello, dear comrades!</p><a href="/get">${JSON.stringify(
      getCars()
    )}</a>`
  );
};

module.exports = { getBackendInformation };
