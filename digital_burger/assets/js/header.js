/** Gera o html do footer automagicamente precisando somente adicionar o link do script no html via head
 * 
 */

const TAGH = document.querySelector(".headNav");
const HTMLHEAD = (`
<div class="header-navbar">
            <nav class="container nav navbar header-navbar-topics justify-content-between">
                <div class="image">
                    <img src="assets/images/logo.png" alt="">
                </div>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./sobreNos.html">Sobre nós</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Cardápio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">Como chegar</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="./assets/pages/instaTroll.html"><i class="bi bi-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/KevinDik/digital_burger"><i class="bi bi-github"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
`)

TAGH.innerHTML = HTMLHEAD;


let scrolled = window.pageYOffset;
let screenSize = document.getElementsByTagName("body")[0].offsetWidth;
if(scrolled > 200 && screenSize > 400) {
  document.getElemntById("menu").classList.add("onScroll")
} else {
    document.getElemntById("menu").classList.remove("onScroll")

}

window.addEventListener("scroll1", () => {
  menuLateral();
 })