import { type ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import gsap from 'gsap';

// Styling utilities
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Icon utilities
export const renderCustomIcon = (icon: string) => {
  // Basic icon rendering implementation
  return icon;
};

// Animation utilities
export const animateElements = (selector: string, options = {}) => {
  gsap.from(selector, {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    ...options,
  });
};

export const animateFloating = (selector: string, options = {}) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    gsap.to(element, {
      y: '-5',
      duration: 1,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      ...options,
    });
  });
};
