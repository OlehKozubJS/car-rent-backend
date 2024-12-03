const errorHandler = (callback) => {
  return async (request, response, next) => {
    try {
      await callback(request, response);
    } catch (error) {
      response.send(`<p>${error.message}</p>`);
      next(error);
    }
  };
};

module.exports = { errorHandler };
