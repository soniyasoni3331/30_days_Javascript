const newArr = [1, 2, 3, 4, 5];
const doubleArr = newArr.map(mapArr);
function mapArr(value){
    return value * 2
}

console.log(doubleArr);

const evenArr = newArr.filter((item)=>{
    return item % 2 ===0
})
console.log(evenArr);

const sumArr = doubleArr.reduce((value, total)=>{
    return total + value;
})
console.log(sumArr);
