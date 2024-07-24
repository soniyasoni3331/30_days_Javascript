class CustomError extends Error{
    constructor(message){
        supper(message);
        this.name = "CustomError";
    }
}
function throwErrorFunction(){
    throw new CustomError('This is a custom error message.');
}

try {
    throwErrorFunction();
} catch (error) {
    if(error instanceof CustomError){
        console.error("Caught a custom error:", error.message);
    }else{
        console.error("Caught an unexpected error:", error)
    }
    
}
