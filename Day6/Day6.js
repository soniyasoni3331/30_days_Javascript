// Task 1
const arr = [1, 2, 3, 4, 5];
console.log(arr)

// Task 2
let first = arr[0];
console.log(first);

let second = arr.at(length - 1)
console.log(second)

// Task 3
arr.push(6);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift();
console.log(arr);

// Task 6
arr.unshift(1);
console.log(arr);

// Task 7
const newArr = [1, 2, 3, 4, 5];
const doubleArr = newArr.map(mapArr);

function mapArr(value){
    return value * 2
}

console.log(doubleArr);

// Task 8
const newArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = newArr2.filter((item)=>{
    return item % 2 ===0
})
console.log(evenArr);

// Task 9 
const sumArr = newArr2.reduce((value, total)=>{
    return total + value;
})
console.log(sumArr);

// Task 10
for(let i=0; i < newArr2.length; i++){
    console.log(newArr2[i]);
}

// Task 11
newArr.forEach((item)=>{
    console.log(item)
})

// Task 12
const Multiarray = [
    [1, 2, 3],
    [4, 5, 6]
]
for (let i = 0; i < Multiarray.length; i++) {
    for (let j = 0; j < Multiarray[i].length; j++) {
        console.log(Multiarray[i][j]);
    }
}

// Task 13
const Multiarray1 = [
    [1, 2, 3],
    [4, 5, 6]
]

const element = Multiarray[1][2];
console.log(element)


