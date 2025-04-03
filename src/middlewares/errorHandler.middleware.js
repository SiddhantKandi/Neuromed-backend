const errorHandler = (err, req, res, next) => {
    err = err || {}; // Ensure err is always an object

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const success = false;
    const error = err.error || [];

    res.status(statusCode).json({
        success,
        data: null, // Fix: Ensure data is explicitly set to null
        message,
        error,
    });
};

export { errorHandler };
