class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", error = [], stack = "") {
        super(message); // Call the parent class constructor with the message
        this.statusCode = statusCode;
        this.error = error;
        this.data = null;
        this.message = message;
        this.success = false;
        this.error = error;

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}
