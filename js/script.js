const resurse = document.querySelector("#resurse");
const slideShow = document.querySelector("#slide-show");

slideShow.style.display = "none"; 

resurse.addEventListener("dblclick", () => {
    slideShow.style.display = "block";
});
