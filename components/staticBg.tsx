"use client"
import React from "react";

const DotBackgroundDemo = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="h-full w-full bg-black bg-dot-white/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-[-1] pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
    </div>
  );
}

export default DotBackgroundDemo