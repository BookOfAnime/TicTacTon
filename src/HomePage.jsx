import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const HomePage = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    });
  }, []);

  return (
    <div>
      <h1 ref={titleRef} className="page-title">Welcome to Tic Tac Ton</h1>
      <div ref={contentRef} className="home-content">
        <p>Experience the classic game of Tic Tac Toe with a twist!</p>
        <p>Use custom images for X and O, enjoy smooth animations, and challenge your friends.</p>
        <Link to="/game" className="cta-button">Start Playing</Link>
      </div>
    </div>
  );
};

export default HomePage;