const getCarFilter = () => {
  return `<form >
    <div>
      <h3>Car brand (make)</h3>
      <label>
        <input placeholder="Enter car make name or its part" />
      <label />
    </div>
    <div></div>
    <div></div>
    <button type="submit">Find car</button>
  </form>`;
};

module.exports = { getCarFilter };

// make rentalPrice mileage
