import React from 'react';
import Logo from '../assets/images/logo.png';

function Footer() {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <div>
                <img src={Logo} alt='leafs' />
                <span>
                  Manuel <small>&</small> Ximena
                </span>
              </div>
            </h2>
            <p className='copyright'>Diciembre 27, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
