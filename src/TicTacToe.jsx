import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const gameSection = document.getElementById('game');
      if (gameSection) {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        setActiveSection(scrollPosition < gameSection.offsetTop ? 'intro' : 'game');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newBoard));
  };

  const renderSquare = (i) => (
    <button className={`square ${board[i] ? 'filled' : ''}`} onClick={() => handleClick(i)}>
      {board[i]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every(square => square !== null)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <span className="navbar-logo">Tic Tac TON</span>
          <ul className="navbar-menu">
            <li><a href="#intro" className={activeSection === 'intro' ? 'active' : ''}>Intro</a></li>
            <li><a href="#game" className={activeSection === 'game' ? 'active' : ''}>Play Game</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <LandingPage />

        <section id="game" className="game">
          <h2 className="game-title">Tic Tac TON</h2>
          <div className="game-board">
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
          <div className="game-info">
            <div className={`status ${winner ? 'winner' : ''}`}>{status}</div>
            <button className="reset-button" onClick={resetGame}>New Game</button>
          </div>
        </section>
      </main>

      <style jsx>{`
        .app {
          font-family: 'Arial', sans-serif;
          background-color: #0098EA;
          margin: 0px;
          padding: 0px;
        }
        .navbar {
          background-color: #333;
          color: white;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .navbar-menu {
          list-style-type: none;
          display: flex;
          gap: 20px;
        }
        .navbar-menu a {
          color: white;
          text-decoration: none;
          padding: 5px 10px;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        .navbar-menu a:hover, .navbar-menu a.active {
          background-color: rgba(255,255,255,0.2);
        }
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .game {
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: fadeIn 1s ease-out;
        }
        .game-title {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 20px;
        }
        .game-board {
          background-color: #fff;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .board-row {
          display: flex;
        }
        .square {
          width: 120px; /* Increased size */
          height: 120px; /* Increased size */
          font-size: 48px; /* Increased font size */
          font-weight: bold;
          color: #333;
          background-color: #fff;
          border: 1px solid #ccc;
          margin: -1px -1px 0 0;
          padding: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .square:hover {
          background-color: #f0f0f0;
        }
        .square.filled {
          animation: pop 0.3s ease-out;
        }
        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .game-info {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .status {
          font-size: 1.5rem;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }
        .status.winner {
          color: #4CAF50;
          font-weight: bold;
          transform: scale(1.1);
        }
        .reset-button {
          padding: 10px 20px;
          font-size: 1.2rem;
          color: #fff;
          background-color: #4CAF50;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .reset-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default TicTacToe;
