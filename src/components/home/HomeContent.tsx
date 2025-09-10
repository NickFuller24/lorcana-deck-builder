import React from 'react';
import './HomeContent.css';
import { Link } from 'react-router-dom';

const HomeContent: React.FC = () => {
  return (
    <div className="homeContainer">
        <h2 style={{ fontSize: '5vh', margin: '5px', color: '#FFFFFF' }}>
            A deck building website for
        </h2>
        <h1 style={{ fontSize: '12vh', margin: '5px', color: '#FFFFFF'}}>
            Disney Lorcana.
        </h1>

        <p style={{ fontSize: '3vh', color: '#FFFFFF'}}>
            Create your own deck or simply browse the cards
        </p>
        <div className='buttonContainer'>
            <Button url="/deck-builder" content="Create a Deck" />
            <Button url="/cards" content="Browse Cards" />
        </div>
    </div>
  );
};

interface ButtonProps {
    url: string;
    content: string;
}

const Button: React.FC<ButtonProps> = ({ url, content }) => {
    return (
        <Link to={url} className='button'>
            {content}
        </Link>
    );
}

export default HomeContent;
