// Task 1
let book = {
    title: "11 Rules For Life: Secrets to Level Up",
    author: "Chetan Bhagat",
    year: "2024",
}
console.log(book);
// Task 2
console.log(book.title);
console.log(book.author);
// Task 3
book ={
    title: "11 Rules For Life: Secrets to Level Up",
    author: "Chetan Bhagat",
    year: "2024",
    method: function(){
        return book.title + book.author;
    }
}
console.log(book.method());
// Task 4
book ={
    title: "11 Rules For Life: Secrets to Level Up",
    author: "Chetan Bhagat",
    year: "2024",
    method: function(){
        return book.title + book.author;
    },
    methodYear: function(year){
        return this.year = year;
    }
}
book.methodYear("2023");
console.log(book);
// Task 5
const Library = {
    name: "City Libray",
    books: [
        {
            title: "11 Rules For Life: Secrets to Level Up",
            author: "Chetan Bhagat",
            year: "2024",
        },
        {
            title: "Do It Today",
            author: "Darius Foroux",
            year: "2022",
        },
        {
            title: "YOU ONLY LIVE ONCE",
            author: "Stuti Changle",
            year: "2021",
        },
    ]
}
console.log(Library);
// Task 6
console.log(Library.name);
for (const book in Library.books) {
   console.log(Library.books[book].title);    
}

// Task 7
book ={
    title: "11 Rules For Life: Secrets to Level Up",
    author: "Chetan Bhagat",
    year: "2024",
    method: function(){
        return `${this.title} ${this.year}`
    }  
}
console.log(book.method())

// Task 8

for (const key in book) {
   console.log(`${key}: ${book[key]} `)
}
// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));