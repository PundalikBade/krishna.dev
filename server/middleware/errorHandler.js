/* 404 fallback for unknown routes */
export const notFound = (req, res, next) => {
  res.status(404);
  next(new Error(`Route not found: ${req.method} ${req.originalUrl}`));
};

/* central error handler */
export const errorHandler = (err, req, res, next) => {
  /* if an earlier handler already set a status, honour it;
     otherwise infer from the error type so clients see 4xx for bad input. */
  let statusCode = res.statusCode;

  if (statusCode === 200) {
    if (err.name === "ValidationError") statusCode = 400;          // Mongoose schema validation
    else if (err.name === "CastError") statusCode = 400;           // bad ObjectId / type mismatch
    else if (err.name === "MongoServerError" && err.code === 11000) statusCode = 409; // duplicate key
    else statusCode = 500;
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};