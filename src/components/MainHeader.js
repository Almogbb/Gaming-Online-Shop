import { NavLink } from 'react-router-dom';

import './MainHeader.css';

function MainHeader() {
  return (
    <header className='main-header'>
      <h1 className='header-title'>Games Frenzy</h1>
      <nav className='nav-container'>
        <ul className='centered'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Games'>Games</NavLink>
          </li>
          <li>
            <NavLink to='/About'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
