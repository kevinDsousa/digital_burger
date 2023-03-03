function menuLateral() {
    let scrolled = window.pageYOffset;
    let screenSize = document.getElementsByTagName("body")[0].offsetWidth;
    if(scrolled > 700 && scrolled < 3300) {
        document.getElementById("categorias").classList.add("onScroll")
    } 
    else if (screenSize < 800 && scrolled > 700 && scrolled < 6600){
        document.getElementById("categorias").classList.add("onScroll")
    }
    else {
        document.getElementById("categorias").classList.remove("onScroll")
    }
}

window.addEventListener("scroll", () => {
  menuLateral();
 })