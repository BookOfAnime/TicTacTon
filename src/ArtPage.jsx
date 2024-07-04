import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ArtPage = () => {
  const artRef = useRef(null);

  useEffect(() => {
    gsap.from(artRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  const artItems = [
    { title: 'Classic X', imgSrc: '/api/placeholder/200/200', description: 'The traditional X symbol' },
    { title: 'Classic O', imgSrc: '/api/placeholder/200/200', description: 'The traditional O symbol' },
    { title: 'Futuristic X', imgSrc: '/api/placeholder/200/200', description: 'A modern take on X' },
    { title: 'Futuristic O', imgSrc: '/api/placeholder/200/200', description: 'A modern take on O' },
    { title: 'Nature X', imgSrc: '/api/placeholder/200/200', description: 'X inspired by nature' },
    { title: 'Nature O', imgSrc: '/api/placeholder/200/200', description: 'O inspired by nature' },
  ];

  return (
    <div>
      <h2 className="page-title">Art Gallery</h2>
      <div ref={artRef} className="art-gallery">
        {artItems.map((item, index) => (
          <div key={index} className="art-item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="art-item-content">
              <h3 className="art-item-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtPage;