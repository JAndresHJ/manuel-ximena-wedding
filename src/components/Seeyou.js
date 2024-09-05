import React from 'react';

function Seeyou() {
  return (
    <>
      <div
        id='seeyou'
        className='seeyou section-padding-seeyou bg-img bg-fixed'
      >
        <div className='container'>
          <div className='row'>
            <div className='section-head col-md-12 text-center'>
              <span>
                <i className='ti-heart'></i>
              </span>
              <h4>Esperamos Verte!</h4>
              <h3>27.12.2024</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='bridegroom clear section-padding-gift bg-pink'>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>
              Consideraciones Importantes!
            </h3>
          </div>
        </div>
        <div className='container'>
          <div className='row mb-60'>
            <div className='col-md-12'>
              <div
                className='item mb-30 animate-box toright'
                data-animate-effect='fadeInRight'
              >
                <div
                  className='full-width'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <li>Código de vestimenta formal</li>
                  <li>NO NIÑOS</li>
                  <li>No olvides tu pase de ingreso </li>
                  <em>
                    (se te hará llegar al hacer la confirmación de asistencia)
                  </em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seeyou;
