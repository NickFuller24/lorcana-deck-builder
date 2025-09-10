import React from 'react';
import CardsGrid from '../components/cards/CardsGrid';
import SearchAndFilters from '../components/shared/SearchAndFilters';

const Cards: React.FC = () => {
  return (
    <div>
      <SearchAndFilters />
      <CardsGrid />
    </div>
  );
};

export default Cards;
