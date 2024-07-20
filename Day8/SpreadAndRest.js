const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const newArr = [...arr1, ...arr2];
console.log(newArr);


// rest operator
function sum(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

const result = sum(1, 2, 4, 5);
console.log(result);