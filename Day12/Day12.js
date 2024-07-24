// Task 1
const errorHandleFun = () =>{
    throw new Error("This is an intensional error")
}

try {
    errorHandleFun()
} catch (error) {
    console.error("An error occurred:", error.message);
}

// Task 2
const divideFun = (num1, num2) =>{
    if(num2 === 0){
        throw new Error("denominator is zero.")
    }
    return num1/num2;
}

try {
    const divide = divideFun(10, 0)
    console.log(divide)
} catch (error) {
    console.error("An error occurred:", error.message);
}

// Task 3
try {
    console.log("try")
} catch{
    console.log("catch")
}finally{
    console.log("finally")
}

// Task 4
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


// Task 5
class ValidationError extends Error {
    constructor(message) {
        super(message); 
        this.name = "ValidationError"; 
    }
}
function checkStringFun(input){
    if(!input || typeof input !== "string" || input.trim() === ""){
        throw new ValidationError("Invalid input: input must be a non-empty string.");
    }
    return true;
}

try {
    checkStringFun("");
    console.log("Input is valid.")
} catch (error) {
    if(error instanceof ValidationError){
        console.log("Validation error:", error.message);
    }else{
        console.log("An unexpected error occured: ",error);
    }
}

// Task 6
const randomPromise = ()=>{
    return new Promise((resolve, rejected)=>{
        const isSuccess = Math.random() > 0.5;
        setTimeout(()=>{
            if(isSuccess){
                resolve("Promise resolved!");
            }else{
                rejected(new Error("Promise rejected!"))
            }
        },1000)
    })
}

async function handlePromise(){
    try {
        const result = await randomPromise()
        console.log(result)
    } catch (error) {
        console.error("An error occured:",error.message)
    }
}
handlePromise();

// Task 7
// Task 8
// Task 9