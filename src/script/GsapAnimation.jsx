import { useEffect } from 'react';
import gsap from 'gsap';

const GsapAnimation = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate');
    if (animateElements.length) {
      gsap.from(animateElements, {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }

    const spans = document.querySelectorAll('.floating-span');
    if (spans.length) {
      spans.forEach(span => {
        gsap.to(span, {
          y: '-5',
          duration: 1,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        });
      });
    }

    const animatedText = document.querySelectorAll('.animated-text');
    if (animatedText.length) {
      gsap.to(animatedText, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, []);

  return null;
};

export default GsapAnimation;
