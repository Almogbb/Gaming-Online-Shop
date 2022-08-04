import heroImage from '../images/division.jpg';
import './Hero.css';

//fix later - strech on wide screen / or the opposite
function Hero() {
  return (
    <section>
      <div className='hero-container'>
        <img src={heroImage} alt='' />
      </div>
    </section>
  );
}

export default Hero;
