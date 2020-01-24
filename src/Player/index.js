import React from 'react';
import '../Card';
import Card from '../Card';
import './Player.css';

const renderCards = (currentStreak) => currentStreak.map(card => (<Card card={card} key={`${card.suit}-${card.rank}`}/>));

const Player = ({ name, currentStreak }) => (
  <div className="player">
    { name }
    <div className="cards-list">
      { renderCards(currentStreak) }
    </div>
  </div>
);

export default Player;
