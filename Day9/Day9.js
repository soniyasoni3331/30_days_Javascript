// Task 1
const headingText = document.getElementById("heading");
headingText.style.color = "red"

// Task 2
const headingBg = document.querySelector(".heading1");
headingBg.style.backgroundColor = "black";

// Task 3
const body = document.body;
const div = document.createElement("div");
div.textContent = "text";
body.appendChild(div);

// Task 4
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "list4";
ul.appendChild(li);

// Task 5
const btn = document.querySelector("btn1");
btn.remove(btn);

// Task 6
ul.removeChild(li);

// Task 7
const a = document.querySelector("a");
const href = a.getAttribute("href");
a.setAttribute("href", "https:/amazon.com");
a.textContent = "amazon"
console.log(a)

// Task 8
a.classList.add("link");
console.log(a.classList);
a.classList.remove("link");
console.log(a.classList);

// Task 9
const btn2 = document.querySelector(".btn2");
const para = document.querySelector(".para");
btn2.addEventListener('click',()=>{
    para.style.color = "red";
})

// Task 10
para.addEventListener('mouseover',()=>{
    para.style.border = "2px solid red"
})

