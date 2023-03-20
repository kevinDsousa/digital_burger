import './Footer.css'
import logo_white from '../../../images/Design/logos/logo-white.png';

export default function Footer() {
    return (
        <div className='db-footer'>
            <div className='db-footer-top'>
                <div className='db-footer-logo'>
                    <img src={logo_white} alt="Digital burger" />
                </div>
                <div>
                    <div className='db-footer-informations'>
                        <h3>Digital Burger</h3>
                        <p>Estamos localizados: <span>Manhattan Square Garden</span></p>
                        <p>Endereço: <span>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</span></p>
                        <p>Telefone: <span>(85) 99972-1749</span></p>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.41808631913!2d-38.5104072!3d-3.7326781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991204f2b1d%3A0x38e3b25bd5d38768!2sDigital%20College%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1677012581814!5m2!1spt-BR!2sbr"
                        width="400" height="200">
                    </iframe>
                </div>
            </div>
            <div className='db-footer-bottom'>
                <p>2023 Digital Burger - Todos os direitos reservados</p>
            </div>
        </div>
    )
}