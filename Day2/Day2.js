// Task 1
let num1 = 45;
let num2 = 34;

let total = num1 + num2;
console.log(total);

// Task2
let num3 = 56;
let num4 = 78;

let subtract = num4 - num3;
console.log(subtract);

// Task 3 
let num5 = 45;
let num6 = 10;

let multiply = num5 * num6;
console.log(multiply);

// Task 4 
let num7 = 20;
let num8 = 2;

let divide = num7 / num8;
console.log(divide);

// Task 5
let num9 = 15;
let num10 = 2;

let remainder = num9 % num10;
console.log(remainder);

// Task 6 
let add = 12;
add += 2;
console.log(add);

// Task 7
let sub = 12;
sub -= 2;
console.log(sub);

// Task 8 
let number1 = 45;
let number2 = 56;

console.log(number1 > number2);
console.log(number1 < number2);

// Task 9
let number3 = 34;
let number4 = 34;

console.log(number3 <= number4);
console.log(number3 >= number4);

// Task 10
let number5 = 89;
let number6 = 89;
let number7 = "89";

console.log(number5 == number6);
console.log(number5 === number6);
console.log(number5 == number7);
console.log(number5 === number7);

// Task 11(using variables used in Task 10)

if(number5 == number6 && number5 == number7){
    console.log(true);
}


// Task 12
if(number5 == number6 || number5 === number7){
    console.log(true);
}
// Task 13
let variable = true;
if(!variable){
    console.log("condition fulfilled");
}
// Task 14
let number = 34;

function checkNum(num){
    (num>=0) ? console.log("Number is positive") : console.log("Number is negative");
}
checkNum(number);

