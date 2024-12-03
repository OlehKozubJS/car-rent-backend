const getMainBackendPage = async (request, response) => {
  await response.send(
    `<main>
      <p>Hello, dear comrades!</p>
      <a href="/getCars">Information about every car</a>
    </main>`
  );
};

module.exports = { getMainBackendPage };
