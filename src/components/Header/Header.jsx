import React, { useState } from 'react';
import"./header.css";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const[Toggle, showMenu] = useState(false);

  return (
    <>
      <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>Prince</a>

            <div className={Toggle ?"nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className='nav__item'>
                        <NavLink to='/' className={({isActive}) => isActive ? " active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon  text-center"></i>Home
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink to="/about" className={({isActive}) => isActive ? " active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon  text-center"></i>About
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink to='/skill' className={({isActive}) => isActive ? " active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon text-center"></i>Skills
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink to="/services" className={({isActive}) => isActive ? " active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon text-center"></i>Services
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink to="/work" className={({isActive}) => isActive ? " active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon  text-center"></i>Projects
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink to="/contact" className={({isActive}) => isActive ? " active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon  text-center"></i>Contact
                        </NavLink>
                    </li>
                </ul>

                <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i> 

             
            </div>

            <div className="nav__toggle fixed" 
            onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
            </div>
           
        </nav>
      </header>
    </>
  )
}

export default Header