let readBtn = document.getElementById("readBtn");
let notifications = document.querySelectorAll(".unseen");
let num = document.getElementById("number")
let dots = document.querySelectorAll(".dot")
console.log(dots);
readBtn.addEventListener("click",()=>{
notifications.forEach(box => {
    box.classList.remove("unseen");
})
dots.forEach(dot => {
    dot.classList.remove("dot");
})
num.textContent = "0";
})