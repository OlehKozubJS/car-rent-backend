const { addCar } = require("./imports");

const postBackendInformation = async (request, response) => {
  const { query } = await request;
  const { first = 0, second = 0 } = await query;
  await response.send(addCar({ first, second }));
};

module.exports = { postBackendInformation };
