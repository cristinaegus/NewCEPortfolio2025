import gsap from 'gsap';

export const animateElements = () => {
  gsap.from('.animate', {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
  });
};

export const animateFloatingSpans = () => {
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
};
