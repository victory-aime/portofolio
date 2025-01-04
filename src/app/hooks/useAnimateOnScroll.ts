import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScrollAnimation } from './scrollAnimationContect';

export const useAnimateOnScroll = (id: string) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { addVisibleItem, removeVisibleItem } = useScrollAnimation();

  useEffect(() => {
    if (inView) {
      addVisibleItem(id);
    } else {
      removeVisibleItem(id);
    }
  }, [inView, id]);

  return { ref, inView };
};
