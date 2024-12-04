const getCarFilter = () => {
  return `<form >
    <div>
      <h3>Car brand (make)</h3>
      <label>
        <input placeholder="Enter car make name or its part" />
      <label />
    </div>
    <div>
      <h3>Car rental price</h3>
      <input placeholder="From" />
      <input placeholder="To" />
    </div>
    <div>
      <h3>Car mileage</h3>
      <input placeholder="From" />
      <input placeholder="To" />
    </div>
    <button type="submit">Find car</button>
  </form>`;
};

module.exports = { getCarFilter };

// make rentalPrice mileage
