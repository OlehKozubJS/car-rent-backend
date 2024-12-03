const errorHandler = (callback) => {
  return async (request, response, next) => {
    try {
      await callback(request, response);
    } catch (error) {
      response.send(`<p style="color: red;">!!! ${error} !!!</p>
        <a>Return to main page</a>`);
      next(error);
    }
  };
};

module.exports = { errorHandler };
