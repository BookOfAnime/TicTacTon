import React from 'react';

const LandingPage = () => {
  const images = [
    '/not.png',
    '/ton.png',
    '/not.png',
    '/ton.png',
    '/not.png',
    '/ton.png',
    '/not.png',
    '/ton.png',
    '/not.png',
  ];

  return (
    <section className="landing-page">
      <div className="image-gallery">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`gallery-item move-${index % 4}`}
          >
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="content">
        <h1>Tic Tac TON</h1>
        <p>Classic game, new experience</p>
        <a href="#game" className="cta-button">Play Now</a>
      </div>
      <style jsx>{`
        .landing-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          background-color: #0098EA;
          padding: 2rem;
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
          gap: 1rem;
          padding: 1rem;
          z-index: 1;
        }
        .gallery-item {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          aspect-ratio: 1 / 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .gallery-item:hover {
          transform: scale(1.05);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover img {
          opacity: 0.8;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .move-0 { animation: float 6s infinite ease-in-out; }
        .move-1 { animation: float 7s infinite ease-in-out; }
        .move-2 { animation: float 8s infinite ease-in-out; }
        .move-3 { animation: float 9s infinite ease-in-out; }
        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 3rem;
          border-radius: 15px;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }
        .content:hover {
          transform: translateY(-5px);
        }
        h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .cta-button {
          display: inline-block;
          background-color: #4CAF50;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 50px;
          font-size: 1.2rem;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .cta-button:hover {
          background-color: #45a049;
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 768px) {
          .image-gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
          }
          h1 {
            font-size: 3rem;
          }
          p {
            font-size: 1.2rem;
          }
          .cta-button {
            font-size: 1rem;
            padding: 12px 24px;
          }
        }
        @media (max-width: 480px) {
          .landing-page {
            padding: 1rem;
          }
          .image-gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
          }
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1rem;
          }
          .content {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingPage;