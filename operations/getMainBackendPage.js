const { getCarFilter } = require("./getCarFilter");

const getMainBackendPage = async (request, response) => {
  await response.send(
    `<main>
      <p>Welcome! This is the backend page of the Car Rent project</p>
      <a href="/getCars">Information about every car</a>
      <p style="background-color: rgb(150, 160, 120);">${getCarFilter()}</p>
    </main>`
  );
};

module.exports = { getMainBackendPage };

// make rentalPrice mileage
