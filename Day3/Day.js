// Task 1
let number = 34;
if(number >= 0){
    console.log("Number is positive");
}else if(number < 0){
    console.log("Number is Negative");
}else{
    console.log("Number is zero");
}

// Task 2
let age = 34;
if(age >= 18){
    console.log("You can vote!");
}else if(age < 18){
    console.log("You can not vote!");
}

// Task 3
let number1 = 34;
let number2 = 34;
let number3 = 34;

if(number1 > number2 && number1 > number3){
    console.log(number1," is the highest number");
}else if(number2 > number1 && number2 > number3){
    console.log(number2, " is the highes number");
}else{
    console.log(number3, " is the highes number");
}
// Task 4
let day = "Wednessday"
 switch (day) {
    case Monday:
            console.log("The day is Monday");
        break;
    case Tuesday:
            console.log("The day is Tuesday");
        break;
    case Wednessday:
            console.log("The day is Wednessday");
        break;
    case Thursday:
            console.log("The day is Thursday");
        break;
    case Friday:
            console.log("The day is Friday");
        break;
    case Saturday:
            console.log("The day is Saturday");
        break;
    default:
            console.log("The day is Monday");
        break;
 }
// Task 5

let Score = 70;
let grade;
 switch (Score) {
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
(num % 2 == 0) ? "Number is even" :"Number is odd";
// Task 7