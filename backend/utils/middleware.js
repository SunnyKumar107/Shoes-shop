const logger = require("./logger");

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  next(error);
};

const unknownEndpoint = (req, res) => {
  res.status(400).send({ error: "unknown endpoint" });
};

module.exports = {
  errorHandler,
  unknownEndpoint,
};
