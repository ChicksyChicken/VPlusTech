import { useState, useEffect, useRef } from 'react';

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
}

export const useIntersectionObserver = (
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
): UseIntersectionObserverReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, options]);

  return { ref, isVisible };
};
