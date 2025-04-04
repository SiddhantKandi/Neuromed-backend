//Error handler
const errorHandler = (err, req, res, next) => {
    // Default values if the error doesn't have them
    const status = err?.statusCode || 500;
    const message = err?.message || "Internal Server Error";
    const error = err?.error || []; // Default error is an empty array
    
    // Send JSON response with error details
    res.status(statusCode).json({
      status,
      message,
      error,
    });
  };
  
  export { errorHandler };