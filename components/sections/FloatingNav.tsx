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
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, X } from 'lucide-react';
 
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

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
          "hidden md:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-accent rounded-full bg-black z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
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
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
        <a href={`mailto:${process.env.EMAIL}`} target="_blank" >
          <button
            className="bg-gradient-to-r from-red-600 to-red-900 text-sm font-medium relative text-white px-4 py-2 rounded-full transition-colors duration-200 ease-in-out hover:bg-gradient-to-r hover:from-red-700 hover:to-red-950"
          >
            <span>Email Me</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px" />
          </button>
        </a>
      </motion.div>

      <Sheet>
        <SheetTrigger asChild>
          <Button 
            className="md:hidden text-white z-[5000] absolute top-4 right-4" 
            size="icon" 
            variant="default"
            onClick={toggleSheet}
          > 
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black bg-opacity-95 z-[6000] text-white">
          <div className="grid gap-6 p-6">
            <nav className="grid gap-4 mt-5">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={`#${navItem.link}`}
                  className={cn(
                    "relative items-center flex space-x-1 text-white transition-colors hover:text-neutral-300"
                  )}
                >
                  <span className="text-sm">{navItem.name}</span>
                </Link>
              ))}
            </nav>
            <a href={`mailto:${process.env.EMAIL}`} target="_blank" >
              <button
                className="bg-gradient-to-r from-red-600 to-red-900 text-sm font-medium relative text-white px-4 py-2 rounded-full transition-colors duration-200 ease-in-out hover:bg-gradient-to-r hover:from-red-700 hover:to-red-950"
              >
                <span>Email Me</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px" />
              </button>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </AnimatePresence>
  );
};

export default FloatingNav;