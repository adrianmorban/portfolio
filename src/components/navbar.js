import React from 'react';
import Logo from './logo';

function NavBar(){
    return (
        <nav className="navBar navPinned" id="navBar">
            <div className="menuMobile">
                <Logo/>
                <i className="fa fa-bars toggleMenu" id="toggleIcon"/>
            </div>
            <ul id="links" className="links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
           );
}

export default NavBar;
