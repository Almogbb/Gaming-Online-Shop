import { useEffect, useState } from 'react';

import pic1 from '../images/CoD.jpg';
import pic2 from '../images/division.jpg';
import pic3 from '../images/Diablo-Immortal.jpg';

import './Carousel.css';

function Carousel() {
  const [currentPic, setCurrentPic] = useState(0);

  const carouselPics = [pic1, pic2, pic3];
  const picsLength = carouselPics.length;

  function nextSlide() {
    setCurrentPic(currentPic === picsLength - 1 ? 0 : currentPic + 1);
  }

  function prevSlide() {
    setCurrentPic(currentPic === 0 ? picsLength - 1 : currentPic - 1);
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  // });

  return (
    <section>
      <title>Carousel Test</title>
      <div className='slide-container'>
        <div className='prev-arrow' onClick={prevSlide}></div>
        <div className='next-arrow' onClick={nextSlide}></div>
        {carouselPics.map((pic, index) => (
          <div
            key={index}
            className={
              index === currentPic
                ? 'slide-layout slide active'
                : 'slide-layout slide'
            }
          >
            {index === currentPic && <img src={pic} alt='' />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
