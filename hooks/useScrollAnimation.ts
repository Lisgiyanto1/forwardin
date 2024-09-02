import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(index: number) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: [50, 0],
        opacity: [0, 1],
        transition: { delay: index * 0.2, duration: 0.7 },
      });
    } else {
      controls.start({
        y: [0, 50],
        opacity: [1, 0],
        transition: { delay: index * 0.2, duration: 0.7 },
      });
    }
  }, [inView, controls, index]);

  return { ref, controls };
}
