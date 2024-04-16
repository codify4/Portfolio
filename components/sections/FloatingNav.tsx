"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
 
const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(false);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setVisible(true);
  });
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-accent rounded-full bg-black z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={`#${navItem.link}`}
            className={cn(
              "relative items-center flex space-x-1 text-white transition-colors hover:text-neutral-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <a href={`mailto:${process.env.EMAIL}`} target="_blank" >
          <button
            className="bg-gradient-to-r from-red-600 to-red-900 text-sm font-medium relative text-white px-4 py-2 rounded-full transition-colors duration-200 ease-in-out hover:bg-gradient-to-r hover:from-red-700 hover:to-red-950"
          >
            <span>Email Me</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px   h-px" />
          </button>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;