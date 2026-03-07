import { useEffect, useRef, RefObject } from 'react';

export function useScrollAnimation<T extends HTMLElement>(): RefObject<T> {
    // IMPORTANT: Must initialize with 'null' for React .ref compatibility
    const ref = useRef<T>(null); 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-bounce-once');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref as RefObject<T>;
};
