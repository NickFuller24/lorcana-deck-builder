import React from 'react';
import './Cards.css';
import CardGridView from './CardGridView';

const CardsGrid: React.FC = () => {
    return (
        <div className='cardsGrid'>
            <CardGridView />
            <CardGridView />
            <CardGridView />
            <CardGridView />
            <CardGridView />
            <CardGridView />
        </div>
    );
};

export default CardsGrid;