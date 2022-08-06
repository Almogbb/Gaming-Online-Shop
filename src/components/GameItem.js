import Card from './UI/Card';

import './GameItem.css';

function GameItem(props) {
  return (
    <li className='game-container'>
      <Card>
        <div className='game-layout'>
          <img src={props.image} alt='' />
        </div>
      </Card>
      {/* <div> */}
      <h3 className='game-title centered'>{props.title}</h3>
      {/* </div> */}
    </li>
  );
}

export default GameItem;

// key={game.id}
//               id={game.id}
//               genre={game.genre}
//               publisher={game.publisher}
//               image={game.thumbnail}
//               title={game.title}
//               discription={game.short_description}
//               releaseDate={game.release_date}
//               url={game.game_url}
//               developer={game.developer}
