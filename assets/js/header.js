/** Gera o html do footer automagicamente precisando somente adicionar o link do script no html via head
 * 
 */

const TAGH = document.querySelector(".headNav");
const HTMLHEAD = (`
<div class="header-navbar">
    <nav class="navbar header-navbar-topics">
        <div class="image">
            <img src="assets/images/logo-white.png" alt="">
        </div>
        <div class="mobile-menu" id="mobile-menu">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </div>
        <div class="menu" id="nav-menu">
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

            <ul class="nav flex-row">
                <li>
                    <a href="./assets/pages/instaTroll.html"><i class="bi bi-instagram"></i></a>
                </li>
                <li>
                    <a href="https://github.com/KevinDik/digital_burger"><i class="bi bi-github"></i></a>
                </li>
            </ul>
        </div>
    </nav>
</div>
`)

TAGH.innerHTML = HTMLHEAD;
