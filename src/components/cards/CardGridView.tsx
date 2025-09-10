import React from "react";
import brunoTemp from '../../images/bruno-temp.png';
import './Cards.css';

const CardGridView: React.FC = () => {
    return (
        <div className="card">
            <img src={brunoTemp} alt="bruno-temp"/>
        </div>
    );
};

export default CardGridView;