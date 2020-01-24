import React from 'react';
import './Card.css';

const suites = {
  club : '♣️',
  diamond : '♦️',
  heart : '♥️',
  spade : '♠️'
}

const Card = ({
  card: { suite, rank }
}) => (
  <div className="card">
    <div className="outline">
      <div className="top"><span>{rank}&nbsp;</span><span>{suites[suite]}</span></div>
      <h1>{suites[suite]}</h1>
      <div className="bottom"><span>{suites[suite]}</span><span>{rank}</span></div>
    </div>
  </div>
);

export default Card;
