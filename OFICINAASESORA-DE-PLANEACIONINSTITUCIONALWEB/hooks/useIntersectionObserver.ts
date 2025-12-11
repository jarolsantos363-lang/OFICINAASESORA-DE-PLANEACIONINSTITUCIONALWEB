import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  options?: IntersectionObserverOptions
): [RefObject<HTMLDivElement>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIntersecting(isVisible);
        if (isVisible && options?.freezeOnceVisible && element) {
          observer.unobserve(element);
        }
      },
      {
        root: options?.root,
        rootMargin: options?.rootMargin,
        threshold: options?.threshold ?? 0.1,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};
