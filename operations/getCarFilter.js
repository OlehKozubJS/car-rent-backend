const getCarFilter = () => {
  return `<form >
    <div>
      <h3>Car brand (make)</h3>
      <label>
        <input placeholder="Enter car make name or its part" onChange="" />
      <label />
    </div>
    <div>
      <h3>Car rental price</h3>
      <input placeholder="From" onChange="handleMinimalRentalPrice()" />
      <input placeholder="To" onChange="handleMaximalRentalPrice()" />
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
