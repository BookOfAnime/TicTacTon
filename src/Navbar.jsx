import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current.children, {
      opacity: 0,
      y: -50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/art">Art</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;