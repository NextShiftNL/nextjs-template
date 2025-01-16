'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'scaleIn' | 'rotateIn' | 'stagger';
}

const ScrollAnimation = ({ children, animation }: ScrollAnimationProps) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const baseScrollTrigger = {
      trigger: element,
      start: 'top bottom-=100', // Triggers when element's top passes 100px from bottom of viewport
      end: 'bottom top',        // Ends when element's bottom passes top of viewport
      toggleActions: 'play none none none', // play on enter, no reverse
      once: true,               // Only triggers once
    };

    const animations = {
      fadeIn: {
        opacity: 0,
        duration: 1,
        scrollTrigger: baseScrollTrigger,
      },
      slideUp: {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: baseScrollTrigger,
      },
      scaleIn: {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: baseScrollTrigger,
      },
      rotateIn: {
        rotation: 180,
        opacity: 0,
        duration: 1,
        scrollTrigger: baseScrollTrigger,
      },
      stagger: {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: baseScrollTrigger,
      },
    };

    gsap.from(element, animations[animation]);

    return () => {
      // Cleanup ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation]);

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollAnimation;
