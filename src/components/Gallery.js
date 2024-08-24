import React from 'react';
import gallery1 from '../assets/images/galeria1.jpg';
import gallery2 from '../assets/images/galeria2.jpg';
import gallery3 from '../assets/images/galeria3.jpg';
import gallery4 from '../assets/images/galeria4.jpg';
import gallery5 from '../assets/images/galeria5.jpg';
import gallery6 from '../assets/images/galeria6.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Gallery Image 1' },
  { src: gallery2, alt: 'Gallery Image 2' },
  { src: gallery3, alt: 'Gallery Image 3' },
  { src: gallery4, alt: 'Gallery Image 4' },
  { src: gallery5, alt: 'Gallery Image 5' },
  { src: gallery6, alt: 'Gallery Image 6' },
];

function GalleryItem({ src, alt }) {
  return (
    <div className={`col-md-4 gallery-item`}>
      <div className='gallery-box'>
        <div className='gallery-img'>
          <img src={src} className='img-fluid mx-auto d-block' alt={alt} />
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div id='gallery' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Galería</span>
            <h2 className='oliven-title'>Estos Somos</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gallery-filter mt-3'>
          {galleryImages.map((image, index) => (
            <GalleryItem key={`${index}-${image.alt}`} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
