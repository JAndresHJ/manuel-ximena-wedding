import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';

function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  };

  return (
    <>
      <a
        href='/'
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? ' active' : ''
        }`}
      >
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='leafs' />
            <span>
              Manuel <small>&</small> Ximena
            </span>
            <h6>27.12.2024</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Inicio</a>
            </li>
            <li>
              <a href='#couple'>Nosotros</a>
            </li>
            <li>
              <li>
                <a href='#whenwhere'>Cuándo & Dónde?</a>
              </li>
              <a href='#gifts'>Mesa de regalos</a>
            </li>
            <li>
              <a href='#rsvp'>Registro</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          <span className='separator'></span>
          <p>
            Boda Manuel & Ximena
            <br />
            29 de Diciembre 2024
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
