const errorResponse = require('../utils/errorResponse');
function errorHandler(err, req, res, next){
    let error = {... err};
    error.message=err.message;
    
    //1.BAD OBJECT ID 
    if(err.name === 'CastError'){
     const message = `Bootcamp not found of id ${err.value}`;
     error = new errorResponse(message,404);
    }
    //2.DUPLICATE FIELD ENTERED
    if(err.code === 11000){
        const message = `Duplicate Fields Entered`;
        error = new errorResponse(message,400);
    }
    //3.NULL BODY
    if(err.name=== 'ValidationError'){
        const message = Object.values(err.errors).map(val=>val.message);
        error = new errorResponse(message,400);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;
