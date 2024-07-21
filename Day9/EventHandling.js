const btn2 = document.querySelector(".btn2");
const para = document.querySelector(".para");
btn2.addEventListener('click',()=>{
    para.style.color = "red";
})

para.addEventListener('mouseover',()=>{
    para.style.border = "2px solid red"
})