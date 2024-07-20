const  a = "Chai";
const b = "Code";
const prop1 = "name";
const prop2 = "age";

const value1 = "John";
const value2 = "25";

const Person = {
    a,
    b,
    [prop1]: value1,
    [prop2]: value2,
}
console.log(Person);
console.log(Person.a);
console.log(Person.b);
console.log(Person.name);
console.log(Person.age);
