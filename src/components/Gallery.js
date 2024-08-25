import React from 'react';
import gallery1 from '../assets/images/galeria1.jpg';
import gallery2 from '../assets/images/galeria2.jpg';
import gallery3 from '../assets/images/galeria3.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Gallery Image 1' },
  { src: gallery2, alt: 'Gallery Image 2' },
  { src: gallery3, alt: 'Gallery Image 3' },
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
    <div id='gallery' className='section-padding-gallery'>
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
