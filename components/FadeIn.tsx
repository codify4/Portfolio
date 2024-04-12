"use client"
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type FadeInOnScrollProps = {
    children: React.ReactNode;
    duration: number;
}
const FadeInOnScroll = ({ children, duration }: FadeInOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: duration}}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
