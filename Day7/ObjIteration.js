book ={
    title: "11 Rules For Life: Secrets to Level Up",
    author: "Chetan Bhagat",
    year: "2024",
}

for(const key in book){
    console.log(`${key}: ${book[key]}`)
}

console.log(Object.keys(book))
console.log(Object.values(book))