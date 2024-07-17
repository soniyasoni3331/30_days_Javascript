// Task 1
let num = 3;
const oddEven = (num)=>{
    if(num%2==0){
        console.log("Number is even");
    }else{
        console.log("NUmber is odd")
    }
}
oddEven(num);

// Task 2;
let a = 12;
const square= (num)=>{
    return num * num;
}
console.log(square(a));

// Task 3
let num1 = 34;
let num2 = 56;

const maxNum = function(num1, num2){
    if(num1 > num2){
        console.log(`Maximum number is ${num1}`);
    }else if(num2 > num1){
        console.log(`Maximum number is ${num2}`);
    }else{
        console.log("Both numbers are equal");
    }
}
maxNum(num1, num2);

// Task 4
let str1 = "Chai";
let str2 = "Code";

const concatFun = function(str1, str2){
    return str1 + str2;
}
console.log(concatFun(str1, str2));

// Task 5
let num3 = 23;
let num4 = 78;

const sum = (num1, num2)=>{
    return num1 + num2;
}
console.log(sum(num3, num4))

// Task 6
let char = '$';
let str = "soniya"
const checkChar = (str, char) =>str.includes(char)
console.log(checkChar(str, char));

// Task 7
let n1 = 10;
let n2;

const productFun = (a, b = 8)=>{
    return a*b;
}
console.log(productFun(n1, n2));

// Task 8

let name = "soniya";
let age;

const greet = (n, a = 18)=>{
    console.log(`Hello ${n}, your age is ${a}`);
}
 
greet(name, age);

// Task 9 
let v = 3;
const fun2 = ()=>{
    console.log("function is called")
}
const fun1= (fun2, num)=>{
    for(let i = 1; i <= num;i++){
        fun2();
    }
}
fun1(fun2, v);

// Task 10
let x= 3;
const fun3 = (x)=>{
    return x+3;
}
const fun4 = (x)=>{
    return x+2;
}
function hofFun(fun3, fun4, value){
    return fun4(fun3(value));
}

const result = hofFun(fun3, fun4, x);
console.log(result);

