book ={
    title: "11 Rules For Life: Secrets to Level Up",
    author: "Chetan Bhagat",
    year: "2024",
    method: function(){
        return this.title + this.author;
    }
}
console.log(book);
console.log(book.method());