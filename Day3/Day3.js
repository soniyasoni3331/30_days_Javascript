// Task 1
let number = 0;
if(number > 0){
    console.log("Number is positive");
}else if(number < 0){
    console.log("Number is Negative");
}else{
    console.log("Number is zero");
}

// Task 2
let age = 24;
if(age >= 18){
    console.log("You can vote!");
}else if(age < 18){
    console.log("You can not vote!");
}

// Task 3
let number1 = 34;
let number2 = 68;
let number3 = 98;

if(number1 > number2 && number1 > number3){
    console.log(number1,"is the highest number");
}else if(number2 > number1 && number2 > number3){
    console.log(number2, "is the highest number");
}else{
    console.log(number3, "is the highest number");
}
// Task 4
let day = 4;
 switch (day) {
    case 1:
            console.log("The day is Monday");
        break;
    case 2:
            console.log("The day is Tuesday");
        break;
    case 3:
            console.log("The day is Wednessday");
        break;
    case 4:
            console.log("The day is Thursday");
        break;
    case 5:
            console.log("The day is Friday");
        break;
    case 6:
            console.log("The day is Saturday");
        break;
    default:
            console.log("The day is Sunday");
        break;
 }
// Task 5

let Score = 70;
let grade;
 switch (true) {
    case (Score >= 90 && Score <=100):
            grade = 'A'
            console.log(`Your grade is ${grade}!`);
        break;
    case (Score >= 80 && Score < 90):
        grade = 'B'
        console.log(`Your grade is ${grade}!`);
        break;
    case (Score >= 60 && Score < 80):
        grade = 'C'
        console.log(`Your grade is ${grade}!`);
        break;
    case (Score >= 40 && Score < 60):
        grade = 'D'
        console.log(`Your grade is ${grade}!`);
        break;
    default:
            grade = 'F'
            console.log(`Your grade is ${grade}`);
        break;
 }

// Task 6
let num = 5;
(num % 2 == 0) ? console.log("Number is even") :console.log("Number is odd");

// Task 7

let year = 1900;
if((year % 100 == 0) ? (year % 400== 0) : (year % 4 === 0)){
    console.log("The year is Leap year");
}else{
    console.log("The year is not a Leap year");
}