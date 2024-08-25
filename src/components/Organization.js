import React from 'react';

function Organization() {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Ceremonia</span>
            <h2 className='oliven-title'>¿Cuándo y dónde?</h2>
          </div>
        </div>
        <div
          className='row bord-box bg-img'
          data-background='images/slider.jpg'
        >
          <div className='col-md-6 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Ceremonia Religiosa</h6>
            <p>
              Parroquia San Luis Obispo Calle Cuahutemoc 6A, Centro Colotlán
              Jalisco
            </p>
          </div>
          <div className='col-md-6 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Ceremonia Civil y Fiesta</h6>
            <p>
              Campestre Hacienda Vieja;
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
