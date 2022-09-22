const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");


hamburger.addEventListener("click",function(){
    navMenu.classList.toggle("active");
});


