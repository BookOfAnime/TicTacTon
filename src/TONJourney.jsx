import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TONJourney = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: "-300vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    return () => {
      pin.kill();
    };
  }, []);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      const isTitle = el.tagName.toLowerCase() === 'h2';
      const direction = index % 2 === 0 ? 'horizontal' : 'vertical';

      gsap.fromTo(el, {
        autoAlpha: 0,
        ...(direction === 'horizontal' ? { x: isTitle ? -100 : 100 } : { y: isTitle ? -50 : 50 })
      }, {
        duration: 1, 
        autoAlpha: 1,
        x: 0,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        }
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="ton-journey" ref={triggerRef}>
      <div ref={sectionRef} className="ton-journey-content">
        <div className="ton-journey-section bg-1">
          <h2 ref={addToRefs}>Discover TON</h2>
          <p ref={addToRefs}>The Future of Cryptocurrency</p>
        </div>
        <div className="ton-journey-section bg-2">
          <h2 ref={addToRefs}>Lightning Speed</h2>
          <p ref={addToRefs}>Experience transactions as fast as sending a message.</p>
        </div>
        <div className="ton-journey-section bg-3">
          <h2 ref={addToRefs}>Smart Contracts Reimagined</h2>
          <p ref={addToRefs}>Unlock endless possibilities with TON's flexible smart contracts.</p>
        </div>
        <div className="ton-journey-section bg-4">
          <h2 ref={addToRefs}>Join the TON Revolution</h2>
          <p ref={addToRefs}>Be part of the next generation of blockchain technology.</p>
        </div>
      </div>

      <style jsx>{`
        .ton-journey {
          overflow: hidden;
        }
        .ton-journey-content {
          display: flex;
          width: 400vw;
          height: 100vh;
        }
        .ton-journey-section {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          transition: background 0.5s ease;
        }
        .bg-1 { background: linear-gradient(135deg, #0088cc, #00d1ff); }
        .bg-2 { background: linear-gradient(135deg, #ff6b6b, #feca57); }
        .bg-3 { background: linear-gradient(135deg, #54a0ff, #5f27cd); }
        .bg-4 { background: linear-gradient(135deg, #ff9ff3, #feca57); }
        h2 {
          font-size: 3rem;
          color: #ffffff;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        p {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #ffffff;
          max-width: 600px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default TONJourney;