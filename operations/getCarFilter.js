const getCarFilter = (onSubmit) => {
  // make rentalPrice mileage

  let make = "";
  let minRentalPrice = 0;
  let maxRentalPrice = 0;
  let minMileage = 0;
  let maxMileage = 0;

  const handleMake = () => {};

  const handleMinimalRentalPrice = () => {};

  const handleMaximalRentalPrice = () => {};

  const handleMinimalMileage = () => {};

  const handleMaximalMileage = () => {};

  const handleSubmit = () => {};

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
      <input
        type="number"
        placeholder="From"
        onChange="handleMinimalRentalPrice()"
      />
      <input
        type="number"  
        placeholder="To"
        onChange="handleMaximalRentalPrice()"
      />
    </div>
    <div>
      <h3>Car mileage</h3>
      <input
        type="number"
        placeholder="From"
        onChange="handleMinimalMileage()"
      />
      <input
        type="number"
        placeholder="To"
        oncChange="handleMaximalMileage()"
      />
    </div>
    <button type="submit">Find car</button>
  </form>`;
};

module.exports = { getCarFilter };

// make rentalPrice mileage
