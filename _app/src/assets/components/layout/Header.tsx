import './Header.css'
import logo_white from '../../../images/Design/logos/logo-white.png';

import { Link } from 'react-router-dom'

import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'

export default function Header() {
    return(
        <header className="db-header">
            <img src={logo_white}/>
            <nav>
                <ul>
                    <Link className='db-header-nav-link' to={'/'}>Cardápio</Link>
                    <Link className='db-header-nav-link' to={'/quemsomos'}>Quem Somos</Link>
                    <Link className='db-header-nav-link' to={'#'}>Como Chegar</Link>
                </ul>
            </nav>
            <div className='db-icons'>
                <Link className='db-header-icons' to={'/instagram'}>
                    <FaInstagram className='db-icons-itens'/>
                </Link>
                <Link className='db-header-icons' to={'https://github.com/KevinDik/digital_burger'}>
                    <FaGithub className='db-icons-itens'/>
                </Link>
            </div>
        </header>
    )
}