

import favicon from '../images/favicon.svg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="headerContainer">
        <div className="homeLogoContainer">
            <Link to="/" className='homeLogo'>
                dreamborn.ink
                <img src={favicon} alt="favicon" />
            </Link>
        </div>
        <div className="navItemContainer">
            <NavLink
                to="/cards"
                className={({ isActive }) => isActive ? 'navItem navItem--active' : 'navItem'}
            >
                Cards
            </NavLink>
            <NavLink
                to="/deck-builder"
                className={({ isActive }) => isActive ? 'navItem navItem--active' : 'navItem'}
            >
                Deck Builder
            </NavLink>
        </div>
    </div>
  );
}

export default Header;