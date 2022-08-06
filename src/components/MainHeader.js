import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/frenzy.JPG';

import './MainHeader.css';

function MainHeader() {
  const navigate = useNavigate();

  function navigateToHome() {
    return navigate('/');
  }

  return (
    <header className='main-header'>
      <div className='header-layout flex'>
        <h1 className='header-title' onClick={navigateToHome}>
          Games <span className='frenzy'>Frenzy</span>
        </h1>
        <span>
          <img src={logo} alt='logo' />
        </span>

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
      </div>
    </header>
  );
}

export default MainHeader;
