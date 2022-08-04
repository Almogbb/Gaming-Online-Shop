import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import Games from './pages/Games';
import MainHeader from './components/MainHeader';
import { gamesSliceActions } from './store/games-slice';
import Home from './pages/Home';
import About from './pages/About';
import Hero from './components/Hero';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  async function sendRequest() {
    const options = {
      // method: 'GET',
      headers: {
        'X-RapidAPI-Key': '692174201cmsh2a527e43f382050p14a599jsn5af25d4f012d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    const res = await fetch(
      'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc',
      options
    );

    if (!res.ok) {
      throw new Error('cant fetch games data');
    }

    const resData = res.json();
    console.log('games data', resData);
    return resData;
  }

  useEffect(() => {
    // if I move it from use effect needs to put it inside use callback
    async function fetchData() {
      const games = localStorage.getItem('games');
      if (!games) {
        try {
          const fetchedData = await sendRequest();
          localStorage.setItem('games', JSON.stringify(fetchedData));
          dispatch(gamesSliceActions.getGames(fetchedData));
          console.log('fetchedData', fetchedData);
        } catch (err) {
          console.log(err);
        }
      } else {
        const gamesFromStorage = JSON.parse(localStorage.getItem('games'));
        dispatch(gamesSliceActions.getGames(gamesFromStorage));
        // console.log('from storage');
        // console.log(gamesFromStorage);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <MainHeader />
      {location.pathname === '/Games' && <Hero />}
      <main>
        <section className='main-layout'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<Games />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
