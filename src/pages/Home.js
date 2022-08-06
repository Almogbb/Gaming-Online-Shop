import Carousel from '../components/Carousel';
import Carousel2 from '../components/Carousel2';
import Sponsors from '../components/Sponsors';
import SubscribeForm from '../components/SubscribeForm';

import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <Carousel />
      {/* <Carousel2 /> */}
      {/* <Sponsors /> */}
      <SubscribeForm />
    </div>
  );
}

export default Home;
