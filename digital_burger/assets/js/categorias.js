function menuLateral() {
    let scrolled = window.pageYOffset;
    let screenSize = document.getElementsByTagName("body")[0].offsetWidth;
    if(scrolled > 700 && screenSize > 400) {
        document.getElementById("categorias").classList.add("onScroll")
    } else {
        document.getElementById("categorias").classList.remove("onScroll")
    }
}

window.addEventListener("scroll", () => {
  menuLateral();
 })