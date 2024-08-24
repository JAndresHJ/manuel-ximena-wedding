import React from 'react';

function Gifts() {
  return (
    <div id='gifts' className='bridegroom clear section-padding-gift bg-pink'>
      <div className='row'>
        <div
          className='col-md-12 text-center animate-box'
          data-animate-effect='fadeInUp'
        >
          <h3 className='oliven-couple-title'>Mesa de regalos</h3>
        </div>
      </div>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-12'>
            <div
              className='item mb-30 animate-box toright'
              data-animate-effect='fadeInRight'
            >
              <div className='info valign gift'>
                <div className='full-width'>
                  <h6>
                    Banorte<i className='ti-heart'></i>
                  </h6>
                  <p>Nombre: Manuel Jara Navarro</p>
                  <p>Tarjeta: 4189 1400 5130 0183</p>
                  <p>CLABE: 072320012185322040</p>
                  <p>
                    En caso de hacer una transferencia o depósito, por favor
                    háznolo saber para poder darte las gracias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
