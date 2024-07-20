// Task 1
let name = "John";
let age = 25;

console.log(`Your name is ${name} and age is ${age}.`);

// Task 2
const multiline = `My name is John.
My age is
25. I am learning 
JavaScript
`
console.log(multiline);

// Task 3
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;

console.log(first);
console.log(second);

// Task 4
const book = {
    Title: "Do It Today",
    Author: "Darius Foroux"
}

const {Title, Author} = book;
console.log(Title);
console.log(Author);

// Task 5
const newArr = [...arr, 6, 7, 8];
console.log(newArr);

// Task 6
function sum(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

const result = sum(1, 2, 4, 5);
console.log(result);

// Task 7
function multiply(a, b = 1){
    return a*b;
}
console.log(multiply(4, 6));
console.log(multiply(4));

// Task 8
const  a = "Chai";
const b = "Code";
function greet(){
    return this.a + this.b
}

const channel ={ a, b, greet};
console.log(channel);
console.log(channel.greet());

// Task 9
const prop1 = "name";
const prop2 = "age";

const value1 = "John";
const value2 = "25";
const Person = {
    [prop1]: value1,
    [prop2]: value2,
}
console.log(Person);
