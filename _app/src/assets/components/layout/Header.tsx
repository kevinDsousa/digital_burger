import logo from '../../images/logos/logo.png'
import './Header.css'

export default function Header() {
    return(
        <header className="db-header">
            <img src={logo}/>
            <nav>
                <ul>
                    <li>Sobre Nós</li>
                    <li>Quem somos</li>
                    <li>Como chegar</li>
                </ul>
            </nav>
        </header>
    )
}