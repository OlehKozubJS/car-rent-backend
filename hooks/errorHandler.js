const errorHandler = (callback) => {
  return async (request, response, next) => {
    try {
      await callback(request, response);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { errorHandler };
