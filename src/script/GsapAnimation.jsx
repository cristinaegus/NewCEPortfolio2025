import { useEffect } from 'react';
import gsap from 'gsap';

const GsapAnimation = () => {
  useEffect(() => {
    // Animation for elements with class 'animate'
    gsap.from('.animate', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Animation for elements with class 'floating-span'
    const spans = document.querySelectorAll('.floating-span');
    spans.forEach(span => {
      gsap.to(span, {
        y: '-5',
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    // Animation for elements with class 'animated-text'
    gsap.to('.animated-text', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return null;
};

export default GsapAnimation;
