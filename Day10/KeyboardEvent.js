const input = document.querySelector(".input");
input.addEventListener('keydown',(e)=>{
    console.log(e.target.value)
})

// Task 6
const input2 = document.querySelector(".input2");
input2.addEventListener('keyup',()=>{
    input2.value = input2.value.toUpperCase();
})
