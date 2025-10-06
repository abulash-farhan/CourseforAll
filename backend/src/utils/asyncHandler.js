
// we are using a higher order function ie passing a function
// as a parameter to the next fn
// using try catch
/*
const asyncHandler = (fn) => async (req,res,next)=>{
    try {
        
    } catch (error) {
        res.status(error.code||400).json({
            suceess: false,
            messsage : error.messsage
        })
    }
}

*/
//-----------------------------------------------------------

// same code using promises


const asyncHandler = (requestHandler) => {
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}


export {asyncHandler}