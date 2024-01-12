const errorMiddleware = (err, req, res, next) => {
  const status = error.status || 5000;
  const message = error.message || "server problem";
  const extraDetails = error.extraDetails || "backend problem";
  res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
