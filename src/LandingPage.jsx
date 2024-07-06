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
          background: linear-gradient(135deg, #0098EA, #00C9FF);
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
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
          aspect-ratio: 1 / 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
        .gallery-item:hover {
          transform: scale(1.05) rotate(3deg);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
        }
        .gallery-item img {
          width: 80%;
          height: 80%;
          object-fit: contain;
          transition: all 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .move-0 { animation: float 8s infinite ease-in-out; }
        .move-1 { animation: float 9s infinite ease-in-out 0.5s; }
        .move-2 { animation: float 10s infinite ease-in-out 1s; }
        .move-3 { animation: float 11s infinite ease-in-out 1.5s; }
        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 4rem;
          border-radius: 25px;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.5s ease;
        }
        .content:hover {
          transform: translateY(-10px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
        }
        h1 {
          font-size: 5rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          background: linear-gradient(45deg, #FF8E3C, #FF4E50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.8rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #FF8E3C, #FF4E50);
          color: white;
          padding: 18px 36px;
          text-decoration: none;
          border-radius: 50px;
          font-size: 1.4rem;
          transition: all 0.5s;
          text-transform: uppercase;
          letter-spacing: 2px;
          box-shadow: 0 6px 12px rgba(255, 78, 80, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 78, 80, 0.5);
        }
        @media (max-width: 768px) {
          .image-gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
          }
          h1 {
            font-size: 4rem;
          }
          p {
            font-size: 1.5rem;
          }
          .cta-button {
            font-size: 1.2rem;
            padding: 15px 30px;
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
            font-size: 3rem;
          }
          p {
            font-size: 1.2rem;
          }
          .content {
            padding: 2.5rem;
          }
          .cta-button {
            font-size: 1rem;
            padding: 12px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingPage;