let btn = document.getElementById("mobile-menu");
btn.addEventListener("click", menuHamb);

function menuHamb(){
    document.getElementById("nav-menu").classList.toggle("active")
}