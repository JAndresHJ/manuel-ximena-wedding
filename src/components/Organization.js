import React from 'react';

function Organization() {
  return (
    <div id='whenwhere' className='organization section-padding bg-pink'>
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
            <p>Hora: 6:00 p.m</p>
            <p>Parroquia San Luis Obispo Jalisco</p>
            <p>Calle Cuahutémoc 6A, Centro</p>
            <p>Colotlán, Jálisco</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.2675023911343!2d-103.2699176240661!3d22.115774279819803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8682a72ca0b87edb%3A0xdd6444b04f371348!2sParroquia%20San%20Luis%20Obispo!5e0!3m2!1sen!2smx!4v1725567345334!5m2!1sen!2smx'
              width='100%'
              height={450}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              title='ceremonia-religiosa'
            ></iframe>
          </div>
          <div className='col-md-6 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Ceremonia Civil & Fiesta</h6>
            <p>Hora: 8:00 p.m - 2:00 a.m</p>
            <p>Campestre Hacienda Vieja</p>
            <p>Calle Obregon 87</p>
            <p>Colotlán, Jalisco</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.4732788669794!2d-103.27172422406633!3d22.107923779825438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8682a73291baccb1%3A0x72ea0df7fdc5a4ba!2sCampestre%20Hacienda%20Vieja!5e0!3m2!1sen!2smx!4v1725567625835!5m2!1sen!2smx'
              width='100%'
              title='ceremonia_civil'
              height='450'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
