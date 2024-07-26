// Task 1 & 2
class Person {
    constructor(name, age, firstName, lastName){
        this.name = name
        this.age = age
        this.firstName = firstName
        this.lastName = lastName
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetings(){
        return `Hi ${this.name}! You are ${this.age} years old.`
    }
    updateAge(age){
        this.age = age;
        console.log(age);
    }

    static greetings(){
        return `Hi this is Soniya. Welcome to 30 days of Javascript challenge.`
    }
}
const person = new Person("Soniya", 20);
console.log(person.greetings());
person.updateAge(23);

// Task 3 & 4
class Student extends Person{
    static studentCount = 0;
    constructor(studentId, name, age){
        super(name, age)
        this.studentId = studentId;
        this.constructor.studentCount++;
        
    }
    studentIdFun(){
        console.log(this.studentId);
    }
    greetings(){
        return `Welcome ${this.name}! Your are ${this.age} years old and your student Id is ${this.studentId}.`
    }
}

const student = new Student("001", person.name, person.age);
student.studentIdFun();
console.log(student.greetings());

// Task 5 & 6
console.log(Person.greetings());
const student2 = new Student("002", person.name, person.age)
const student3 = new Student("003", person.name, person.age)
const student4 = new Student("004", person.name, person.age)
console.log(Student.studentCount);

// Task 7
const person2 = new Person("Soniya", 21,"Soniya", "Soni")
console.log(person2.fullName);

// Task 8
person2.fullName = "Radhika Soni";
console.log(person2.fullName);


