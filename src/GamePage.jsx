import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const GamePage = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [xImage, setXImage] = useState('');
  const [oImage, setOImage] = useState('');

  const boardRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

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
        return { winner: squares[a], line: [a, b, c] };
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

    gsap.to(`#square-${i}`, {
      scale: 1.1,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  const drawWinningLine = (line) => {
    const linePositions = [
      { x1: '10%', y1: '20%', x2: '90%', y2: '20%' }, // top row
      { x1: '10%', y1: '50%', x2: '90%', y2: '50%' }, // middle row
      { x1: '10%', y1: '80%', x2: '90%', y2: '80%' }, // bottom row
      { x1: '20%', y1: '10%', x2: '20%', y2: '90%' }, // left column
      { x1: '50%', y1: '10%', x2: '50%', y2: '90%' }, // middle column
      { x1: '80%', y1: '10%', x2: '80%', y2: '90%' }, // right column
      { x1: '10%', y1: '10%', x2: '90%', y2: '90%' }, // diagonal from top-left to bottom-right
      { x1: '90%', y1: '10%', x2: '10%', y2: '90%' }  // diagonal from top-right to bottom-left
    ];

    const winningLineIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ].findIndex(combo => combo.every(i => line.includes(i)));

    const pos = linePositions[winningLineIndex];
    gsap.fromTo(lineRef.current, {
      attr: { x1: pos.x1, y1: pos.y1, x2: pos.x1, y2: pos.y1 }
    }, {
      attr: { x2: pos.x2, y2: pos.y2 },
      duration: 1,
      ease: 'power2.out'
    });
  };

  useEffect(() => {
    const result = calculateWinner(board);
    setWinner(result);

    if (result) {
      gsap.to('.game-square', {
        opacity: 0.6,
        duration: 0.5
      });
      gsap.to(result.line.map(i => `#square-${i}`), {
        opacity: 1,
        scale: 1.1,
        duration: 0.5,
        boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)'
      });
      drawWinningLine(result.line);
    }
  }, [board]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "bounce.out"
    });

    gsap.from(boardRef.current.children, {
      opacity: 0,
      scale: 0.5,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });
  }, []);

  const renderSquare = (i) => (
    <button
      id={`square-${i}`}
      className="game-square"
      onClick={() => handleClick(i)}
    >
      {board[i] === 'X' && (xImage ? <img src={xImage} alt="X" /> : 'X')}
      {board[i] === 'O' && (oImage ? <img src={oImage} alt="O" /> : 'O')}
    </button>
  );

  const resetGame = () => {
    gsap.to('.game-square', {
      opacity: 1,
      scale: 1,
      boxShadow: 'none',
      duration: 0.5
    });
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    gsap.set(lineRef.current, { attr: { x1: '10%', y1: '10%', x2: '10%', y2: '10%' } });
  };

  return (
    <div className="game-container">
      <h2 ref={titleRef} className="page-title">Tic Tac TON</h2>
      <div className="game-board" ref={boardRef}>
        <svg className="winning-line" ref={lineRef}>
          <line stroke="red" strokeWidth="4" />
        </svg>
        {[...Array(9)].map((_, i) => renderSquare(i))}
      </div>
      <div className="game-info">
        {winner ? (
          <p className="winner-text">Winner: {winner.winner}</p>
        ) : board.every(square => square) ? (
          <p className="draw-text">It's a draw!</p>
        ) : (
          <p>Next player: {xIsNext ? 'X' : 'O'}</p>
        )}
      </div>
      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
      <div className="custom-images">
        <h3>Custom Images</h3>
        <div className="image-inputs">
          <input
            type="text"
            value={xImage}
            onChange={(e) => setXImage(e.target.value)}
            placeholder="Enter X image URL"
          />
          <input
            type="text"
            value={oImage}
            onChange={(e) => setOImage(e.target.value)}
            placeholder="Enter O image URL"
          />
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        .game-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
        }
        .page-title {
          font-size: 3rem;
          color: #2c3e50;
          margin-bottom: 2rem;
        }
        .game-board {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 2rem;
        }
        .game-square {
          width: 150px;
          height: 150px;
          font-size: 4rem;
          background: white;
          border: none;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .game-square:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
        .game-square img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
        .winning-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .game-info {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .winner-text {
          color: #27ae60;
          font-weight: bold;
        }
        .draw-text {
          color: #f39c12;
          font-weight: bold;
        }
        .reset-button {
          font-size: 1.2rem;
          padding: 0.7rem 1.5rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .reset-button:hover {
          background-color: #2980b9;
        }
        .custom-images {
          margin-top: 2rem;
          text-align: center;
        }
        .image-inputs {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .image-inputs input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #bdc3c7;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default GamePage;
