const getMainBackendPage = async (request, response) => {
  await response.send(
    '<p>Hello, dear comrades!</p><a href="/getCars">Get page</a>'
  );
};

module.exports = { getMainBackendPage };
