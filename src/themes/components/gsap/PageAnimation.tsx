'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageAnimationProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'scaleIn' | 'rotateIn' | 'stagger';
}

const PageAnimation = ({ children, animation }: PageAnimationProps) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const animations = {
      fadeIn: {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      slideUp: {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      scaleIn: {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      },
      rotateIn: {
        rotation: 180,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      stagger: {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      },
    };

    gsap.from(element, animations[animation]);
  }, [animation]);

  return <div ref={elementRef}>{children}</div>;
};

export default PageAnimation;
