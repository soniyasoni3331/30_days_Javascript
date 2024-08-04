// Task 1
const outerFun = ()=>{
    let name = "Soniya";
    return function(){
        console.log(`Hello ${name}`);
    }
}
const result = outerFun()
result();

// Task 2 
const createCounter = () =>{
    let counter = 0;
    return {
        increment: function(){
            counter++;
        },
        getValue: function(){
            return counter;
        }
    }
}
const myCounter = createCounter();

myCounter.increment();
console.log(myCounter.getValue());

myCounter.increment();
console.log(myCounter.getValue());

// Task 3
const idGenerator = () =>{
    let lastID = 0;
    return function generatedId(){
        lastID++;
        return `Id-${lastID}`
    }
}
const generateId = idGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());

// Task 4
const createGreet = (userName) =>{
    return function greet(){
        return `Hello ${userName}`
    }
}
const greetSoniya = createGreet("Soniya");
console.log(greetSoniya());

const greetRadhika = createGreet("Radhika");
console.log(greetRadhika());

// Task 5
const createFunArray = (size)=>{
    let arr = []
    for(let i=0;i < size; i++ ) {
        arr.push(function(){
        console.log(`function ${i} is called`)
        })
    }
    return arr;
}

const functions = createFunArray(3)
functions.forEach((func)=>{
    func()
})

// Task 6
const collectionManager = () =>{
    let items = [];
    return {
        addItems: function(item){
            items.push(item);
            console.log(`Added: ${item}`)
        },
        removeItem: function(item){
            let index = items.indexOf(item)
            items.splice(index, 1)
            console.log(`Removed: ${item}`)         
        },
        listItem: function(){
            console.log(items)
        }
    }
}
const itemManage = collectionManager();
itemManage.addItems("apple");
itemManage.addItems("banana");
itemManage.addItems("orange");

itemManage.removeItem("banana");
itemManage.listItem()

// Task 7
function memoize(fn) {
    const cache = {}; 
  
    return function(...args) {
      const key = args.toString(); 
  
      if (key in cache) {
        return cache[key]; 
      }
  
     const result = fn(...args); 
     cache[key] = result; 
     return result;
  };
}
  
function add(a, b) {
    return a + b;
}
  
const memoizedAdd = memoize(add);
  
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 


// Task 8
const memoize2 = (fn)=>{
    let cache = {}
    return function(...arg){
        const key = arg[0];
        if(key in cache){
            return cache[key]
        }
        const result = fn(...arg);
        cache[key] = result;
        return result;
    };
}
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
}
  
const memoizedFactorial = memoize2(factorial);
  
console.log(memoizedFactorial(5)); // Output: 120 (computed)
console.log(memoizedFactorial(5)); // Output: 120 (cached)
console.log(memoizedFactorial(6)); // Output: 720 (computed)
console.log(memoizedFactorial(6)); // Output: 720 (cached)
