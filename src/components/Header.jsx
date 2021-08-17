import React from 'react';
import Logo from '../images/logo_alternativas_odontológicas-removebg.png';
import '../global.css';

const Header = () => {
    return(
        <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src={Logo} alt="Alternativas Odontológicas Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#main">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#speakers">Servicios Odontológicos</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="#place-time">Ubicación</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="#conviertete-en-orador">Testimonios</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="https://www.alternativasodontologicas.com/blog/">Blog</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link text-ac-geek" href="tel:+573002161403">Contacto</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}


    
export default Header; 