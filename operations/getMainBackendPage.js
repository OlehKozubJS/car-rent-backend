const getMainBackendPage = async (request, response) => {
  await response.send(
    `<main>
      <p>Welcome! This is the backend page of the Car Rent project</p>
      <a href="/getCars">Information about every car</a>
    </main>`
  );
};

module.exports = { getMainBackendPage };
