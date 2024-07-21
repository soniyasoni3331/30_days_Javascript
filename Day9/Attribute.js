const a = document.querySelector("a");
const href = a.getAttribute("href");
a.setAttribute("href", "https:/amazon.com");
a.textContent = "amazon"
console.log(a)