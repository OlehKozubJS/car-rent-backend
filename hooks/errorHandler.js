const errorHandler = (callback) => {
  return async (request, response, next) => {
    try {
      await callback(request, response);
    } catch (error) {
      response.send(`<p style="color: red;">!!!${error}!!!</p>`);
      next(error);
    }
  };
};

module.exports = { errorHandler };
