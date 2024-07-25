// Task 1
import  addNumbers  from "./Task1.mjs";

const num1 = 4;
const num2 = 5;

const result = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}`);

// Task 2
import obj from "./Task2.mjs";
console.log(`First Name: ${obj.firstName}`);
console.log(`Last Name: ${obj.lastName}`);
console.log(obj.name());

// Task 3
import { add, multiply, divide } from "./Task3.mjs";

console.log(add(4 , 5));
console.log(multiply(2, 10));
console.log(divide(10, 2));

// Task 4
import fullName from "./Task4.mjs";
console.log(fullName("John", "Cooper"))

// Task 5
import * as Task5 from './Task5.mjs'

const obj2 = {
    name: Task5.name,
    age: Task5.age,
    person: Task5.person(),
    personCar: Task5.personCar(),
}

console.log(obj2)

// Task 6
import _ from 'lodash';

const array = [1, 2, 3, 4, 5, 6];
const shuffledArray = _.shuffle(array);

console.log('Original array: ', array);
console.log('Shuffled array: ', shuffledArray);

// Task 7
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
    .then((response)=>{
        console.log("Data: ",response.data);
    }).catch((error)=>{
        console.error('Error fetching data: ', error);
    })

