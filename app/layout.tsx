import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

import FloatingNav from "../components/FloatingNav";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ijon Kushta",
  description: "Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, "flex flex-col bg-black")}>
        <FloatingNav
          navItems={[
            { name: "Home", link: "hero" },
            { name: "Experience", link: "experience" },
            { name: "Services", link: "services" },
            { name: "About", link: "about" },
          ]}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
