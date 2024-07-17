// Task 1
for(let i=1; i<=10; i++){
    console.log(i);
}

// Task 2
let table = 5;
for(let i=0; i<=10; i++){
    console.log(`${table} * ${i} = ${i*table}`);
}

// Task 3
let num = 1;
let sum = 0;
while(num <= 10){
    sum += num;
    num ++;
}
console.log(sum);

// Task 4
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}

// Task 5
let a = 1;
do{
    console.log(a);
    a++;
}while(a <= 5);

// Task 6 
let n = 6;
let result = 1;
function factorialFun(n){
    if(n === 1){
        result = 1;
        return result;
    }else{
        let i = 1;
        do{
            result *= i; 
            i++;
        }while(i <= n);
    return result; 
    }
}
const factorial = factorialFun(n);
console.log(factorial);


// Task 7
let p = 5;
for(let i = 0; i < p; i++){
    let star = "*"
    for(let j = 1; j <= i; j++){
        star += '*';
    }
    console.log(star)
}

// Task 8
for(let i = 1; i <=10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

// Task 9
for(let i = 1; i <=10; i++){
    if(i === 7){
        break;
    }
    console.log(i);
}

