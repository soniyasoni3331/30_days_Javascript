const para = document.querySelector(".para");
para.addEventListener('mouseover', ()=>{
    para.style.backgroundColor = "yellow";
})

para.addEventListener('mouseout', ()=>{
    para.style.backgroundColor = "white";
})