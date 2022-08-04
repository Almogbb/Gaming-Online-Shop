import { useSelector } from 'react-redux/es/exports';

import GameItem from '../components/GameItem';
import Pagination from '../components/Pagination';

import './Games.css';

function Games() {
  const { games } = useSelector((state) => state.games);
  const { currPage } = useSelector((state) => state.pagination);
  const { gamesPerPage } = useSelector((state) => state.pagination);

  const offSet = (currPage - 1) * gamesPerPage;
  const currPageGamesAmount = games?.slice(offSet, offSet + gamesPerPage);

  function showGames() {
    console.log(games);
    console.log('currPage', currPage);
    console.log('offSet', offSet);
    console.log('currPageGamesAmount', currPageGamesAmount);
  }

  return (
    <div>
      <button onClick={showGames}>show games</button>
      <div className='all-games-container'>
        <ul>
          {currPageGamesAmount?.map((game) => (
            <GameItem
              key={game.id}
              id={game.id}
              genre={game.genre}
              publisher={game.publisher}
              image={game.thumbnail}
              title={game.title}
              discription={game.short_description}
              releaseDate={game.release_date}
              url={game.game_url}
              developer={game.developer}
            />
          ))}
        </ul>
        <Pagination
          gamesList={games}
          currPage={currPage}
          gamesPerPage={gamesPerPage}
        />
      </div>
    </div>
  );
}

export default Games;
