import React, { useEffect, useState } from 'react';
import { gameStatuses } from '../../constants';
import './App.css';
import PlayersList from '../PlayersList';

const deck = [];

const createDeck = () => {
  const suites = ['club', 'diamond', 'heart', 'spade'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  suites.forEach(suite => {
    ranks.forEach((rank, value) => {
      deck.push({
        suite,
        rank,
        value: value + 1,
      })
    })
  });
  console.log(deck);
}

const App = () => {

  useEffect(() => {
    createDeck();
  }, []);

  
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [gameStatus, setGameStatus] = useState(gameStatuses['NOT_STARTED']);
  const [winner, setWinner] = useState('');
  
  const shuffleDeck = () => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    setShuffledDeck([...deck]);
  }

  const startGame = () => {
    shuffleDeck();
    setGameStatus(gameStatuses['ONGOING']);
  }

  const updateShuffledDeck = (updatedDeck) => {
    setShuffledDeck([...updatedDeck]);
  }

  const updateGameStatus = (status, winner) => {
    setGameStatus(status);
    if(winner) {
      setWinner(winner);
    }
  }

  return (
    <div className="app">
      { gameStatus === gameStatuses['NOT_STARTED'] && <button className="start-game" onClick={() => startGame()}>Start Game</button> }
      {
        gameStatus === gameStatuses['ONGOING'] && (
          <div>
            <div>Remaining Cards in Deck: {`(${shuffledDeck.length})`}</div>
            <div className="back-card"></div>
            <PlayersList
              shuffledDeck={shuffledDeck}
              setShuffledDeck={updateShuffledDeck}
              setGameStatus={updateGameStatus}
            />
          </div>
        )
      }
      {
        gameStatus === gameStatuses['ENDED'] && (
          <div>
            <div>
              {winner ? `${winner} wins !!` : 'Match draw'}
            </div>
            <button onClick={() => startGame()}>Restart game</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
