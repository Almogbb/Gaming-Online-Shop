import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { gamesSliceActions } from '../store/games-slice';

// import searchIcon from '../images/search.png';
import './SearchBar.css';

function SearchBar() {
  const dispatch = useDispatch();
  const titleInputRef = useRef();
  const genreInputRef = useRef();

  function filterGames() {
    const titleInputValue = titleInputRef.current.value;
    const genreInputValue = genreInputRef.current.value;

    // console.log(genreInputValue);
    dispatch(
      gamesSliceActions.filteredGames({
        title: titleInputValue,
        genre: genreInputValue,
      })
    );
  }

  return (
    <section className='search-title'>
      <div className='search-container'>
        <label htmlFor='title'></label>
        <input
          className='filter-input'
          placeholder='Search by title...'
          ref={titleInputRef}
          type='text'
          name='title'
          onChange={filterGames}
        />
        {/* <span className='search-icon' onClick={filterGames}>
          <img src={searchIcon} alt='' />
        </span> */}

        <div className='dropdown'>
          <label htmlFor='genre'></label>
          <input
            className='filter-input'
            placeholder='Select genre...'
            ref={genreInputRef}
            type='text'
            name='genre'
            onChange={filterGames}
          />
          <div className='dropdown-menu'>
            <option value='mmo'>mmo</option>
            <option value='mmo'>mmo</option>
            <option value='mmo'>mmo</option>
            <option value='mmo'>mmo</option>
            <option value='mmo'>mmo</option>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
