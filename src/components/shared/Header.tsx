import React from 'react';
import favicon from '../../images/favicon.svg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
        <div className="homeLogoContainer">
            <Link to="/" className='homeLogo'>
                dreamborn.ink
                <img src={favicon} alt="favicon" />
            </Link>
        </div>
        <div className="navItemContainer">
            <NavItem url="/deck-builder" content="Deck Builder" />
            <NavItem url="/decks" content="Decks" />
            <NavItem url="/cards" content="Cards" />
        </div>
    </div>
  );
}

interface NavItemProps {
    url: string;
    content: string;
}

const NavItem: React.FC<NavItemProps> = ({ url, content }) => {
    return (
        <NavLink
            to={url}
            className={({ isActive }) => isActive ? 'navItem navItem--active' : 'navItem'}
        >
            {content}
        </NavLink>
    );
}

export default Header;