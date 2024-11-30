const { getCars } = require("./imports");

const getBackendInformation = async (request, response) => {
  const cars = await String(getCars());
  await response.send(`<p>Hello, dear comrades!</p><a href="/">${"cars"}</a>`);
};

module.exports = { getBackendInformation };
