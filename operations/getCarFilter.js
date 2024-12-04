const getCarFilter = (onSubmit) => {
  // make rentalPrice mileage

  let make = "";
  let minRentalPrice = 0;
  let maxRentalPrice = 0;
  let minMileage = 0;
  let maxMileage = 0;

  const handler = (event) => {
    return event.target.value;
  };

  const handleMake = (event) => {
    make = handler(event);
  };

  const handleMinimalRentalPrice = (event) => {
    minRentalPrice = handler(event);
  };

  const handleMaximalRentalPrice = (event) => {
    maxRentalPrice = handler(event);
  };

  const handleMinimalMileage = (event) => {
    minMileage = handler(event);
  };

  const handleMaximalMileage = (event) => {
    maxMileage = handler(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });
  };

  return `<form onSubmit="handleSubmit()">
    <div>
      <h3>Car brand (make)</h3>
      <label for="carMakeInput">
        <input
          id="carMakeInput"
          type="text"
          placeholder="Enter car make name or its part"
          onChange="handleMake()"
          style="width: 200px;"
        />
      <label />
    </div>
    <div>
      <h3>Car rental price</h3>
      <label for="minCarRentalPriceInput">
        <input
          id="minCarRentalPriceInput"
          type="number"
          placeholder="From"
          onChange="handleMinimalRentalPrice()"
        />
      </ label>
      <label for="maxCarRentalPriceInput">
        <input
          id="maxCarRentalPriceInput"
          type="number"  
          placeholder="To"
          onChange="handleMaximalRentalPrice()"
        />
      </ label>
    </div>
    <div>
      <h3>Car mileage</h3>
      <label for="minCarMileageInput">
        <input
          id="minCarMileageInput"
          type="number"
          placeholder="From"
          onChange="handleMinimalMileage()"
        />
      </label>
      <label for="mapCarMileageInput">
        <input
          id="maxCarMileageInput"
          type="number"
          placeholder="To"
          oncChange="handleMaximalMileage()"
        />
      </label>
    </div>
    <button type="submit">Find car</button>
  </form>`;
};

module.exports = { getCarFilter };

// make rentalPrice mileage
