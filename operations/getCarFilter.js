const getCarFilter = (onSubmit) => {
  // make rentalPrice mileage

  let make = "";
  let rentalPrice = 0;
  let mileage = 0;

  const handleMake = () => {};

  const handleMinimalRentalPrice = () => {};

  const handleMaximalRentalPrice = () => {};

  const handleMinimalMileage = () => {};

  const handleMaximalMileage = () => {};

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
      <input placeholder="From" onChange="handleMinimalMileage()" />
      <input placeholder="To" oncChange="handleMaximalMileage()" />
    </div>
    <button type="submit">Find car</button>
  </form>`;
};

module.exports = { getCarFilter };

// make rentalPrice mileage
