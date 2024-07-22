const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
})
