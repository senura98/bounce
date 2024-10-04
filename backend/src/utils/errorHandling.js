
export const errorHandler = (err, req, res, next) => {
    console.error(err.message);  
    console.log('hi im here')
  
    if (err.response && err.response.status) {
      return res.status(err.response.status).json({
        error: err.response.data,
        message: err.message,
      });
    }
  
    res.status(500).json({
      message: 'An internal server error occurred.',
      error: err.message,
    });
  };
  