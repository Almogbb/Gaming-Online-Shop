import React from 'react';

import pic1 from '../images/CoD.jpg';
import pic2 from '../images/division.jpg';
import pic3 from '../images/Diablo-Immortal.jpg';

import './Carousel2.css';

export default function Carousel2() {
  const carouselPics = [pic1, pic2, pic3];

  return (
    <div className='slider--container'>
      <div className='slider'>
        {carouselPics.map((pic, index) => (
          // <div key={index}>
          <span style={{ '--i': index + 1 }}>
            <img key={index} src={pic} alt='' />
          </span>
          //</div>
        ))}
      </div>
    </div>
  );
}
