import React from 'react';

const LandingPage = () => {
  const images = [
    './ton.png',
    './not.png',
    './ton.png',
    './not.png',
    './ton.png',
    './not.png',
    './ton.png',
    './not.png',
    './ton.png',
  ];

  return (
    <section className="landing-page">
      <div className="image-gallery">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`gallery-item move-${index % 4}`}
            style={{backgroundImage: `url(${src})`}}
          />
        ))}
      </div>
      <div className="content">
        <h1>Tic Tac TON</h1>
        <p>Classic game, new experience</p>
        <a href="#game" className="cta-button">Play Now</a>
      </div>
      <style jsx>{`
        .landing-page {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          background-color: #0098EA;
        }
        .image-gallery {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 10px;
          padding: 10px;
          z-index: 1;
        }
        .gallery-item {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 10px;
          opacity: 0.7;
        }
        @keyframes moveUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes moveDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes moveLeft {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }
        @keyframes moveRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        .move-0 { animation: moveUp 5s infinite ease-in-out; }
        .move-1 { animation: moveDown 7s infinite ease-in-out; }
        .move-2 { animation: moveLeft 6s infinite ease-in-out; }
        .move-3 { animation: moveRight 8s infinite ease-in-out; }
        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.6);
          padding: 2rem;
          border-radius: 10px;
          color: white;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .cta-button {
          display: inline-block;
          background-color: #4CAF50;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 5px;
          font-size: 1.2rem;
          transition: background-color 0.3s;
        }
        .cta-button:hover {
          background-color: #45a049;
        }
        @media (max-width: 768px) {
          .image-gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
          }
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1rem;
          }
          .cta-button {
            font-size: 1rem;
            padding: 10px 20px;
          }
        }
        @media (max-width: 480px) {
          .image-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(9, 1fr);
          }
          h1 {
            font-size: 2rem;
          }
          .content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingPage;