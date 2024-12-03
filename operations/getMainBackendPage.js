const getMainBackendPage = async (request, response) => {
  await response.send(
    '<p>Hello, dear comrades!</p><a href="/getCars">Information about every car</a>'
  );
};

module.exports = { getMainBackendPage };
