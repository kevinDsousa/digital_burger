/** Gera o html do footer automagicamente precisando somente adicionar o link do script no html via head
 * 
 */

const TAG = document.querySelector(".footer");
const HTML = (`
<div class="footer-content">
    <div class="local">
        <img src="assets/images/logo-white.png" alt="Logo digital burger">
        <div class="text">
            <h3>Digital Burger</h3>
            <p>Estamos localizados: <span>Manhattan Square Garden</span></p>
            <p>Endereço: <span>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</span></p>
            <p>Telefone: <span>(85) 99972-1749</span></p>
        </div>
    </div>
    <div class="maps">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.41808631913!2d-38.5104072!3d-3.7326781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991204f2b1d%3A0x38e3b25bd5d38768!2sDigital%20College%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1677012581814!5m2!1spt-BR!2sbr"
            width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="copy">
        <p>2023 Digital Burger - Todos os direitos reservados</p>
    </div>
</div>
`)

TAG.innerHTML = HTML;
