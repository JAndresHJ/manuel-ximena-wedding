import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';

const sections = [
  { href: '#home', title: 'Inicio' },
  { href: '#couple', title: 'Nosotros' },
  { href: '#whenwhere', title: '¿Cuándo & Dónde?' },
  { href: '#gifts', title: 'Mesa de regalos' },
  { href: '#rsvp', title: 'Registro' },
];

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
            {sections.map(({ href, title }) => (
              <li>
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='footer1'>
          <span className='separator'></span>
          <p>
            Boda Manuel & Ximena
            <br />
            27 de Diciembre 2024
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
