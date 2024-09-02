import React, { useState } from 'react';
import app from '../firebase';
import { set, ref, getDatabase } from 'firebase/database';

const initalFormState = {
  name: '',
  phone: '',
  message: '',
};

const db = getDatabase(app);

function RSVP() {
  const [formState, setFormState] = useState(initalFormState);

  const { name, phone, message } = formState;

  const handleChange = (evt) => {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const folderName = name.trim().replace(/[^a-zA-ZÀ-ú]+/g, '');

    set(ref(db, `${folderName}/`), {
      ...formState,
    })
      .then(() => {
        alert('Respuesta enviada, te esperamos!');
      })
      .catch((error) => {
        alert('Error: ', error.message);
      });
    setFormState(initalFormState);
  };

  return (
    <div id='rsvp' className='section-padding bg-img bg-fixed'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            <span className='oliven-title-meta text-center'>
              ¿Nos acompañarás?
            </span>
            <h2 className='oliven-title text-center'>Registro</h2>
            <br />
            <form className='row' onSubmit={onSubmit}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nombre completo *'
                    name='name'
                    required
                    onChange={handleChange}
                    value={name}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Número de telefono'
                    name='phone'
                    onChange={handleChange}
                    value={phone}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Algún mensajito?'
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
