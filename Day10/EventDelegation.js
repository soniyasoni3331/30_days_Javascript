const list = document.querySelector(".list");
list.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
})
const addBtn = document.querySelector(".addListbtn");
addBtn.addEventListener('click',()=>{
    const listItem = document.createElement('li');
    listItem.textContent = `list item ${list.children.length + 1}`
    list.appendChild(listItem);
})