const getCarInformation = (carInformationObject) => {
  return `
    <ul>
      ${Object.keys(carInformationObject)
        .map((carInformationObjectKey) => {
          return `<li>${carInformationObjectKey}:
          ${carInformationObject[carInformationObjectKey]}</li>`;
        })
        .join("")}
    </ul>`;
};

module.exports = { getCarInformation };
