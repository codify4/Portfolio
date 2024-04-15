import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const techLogos = [
  {
    name: "HTML",
    logo: '/html.png',
    width: 90,
    height: 90,
  },
  {
    name: "CSS",
    logo: '/css.png',
    width: 90,
    height: 90,
  },
  {
    name: "JavaScript",
    logo: '/js.png',
    width: 90,
    height: 90,
  },
  {
    name: "Next.js",
    logo: '/nextjs-w.webp',
    width: 90,
    height: 90,
  },
  {
    name: "React",
    logo: '/react.png',
    width: 90,
    height: 90,
  },
  {
    name: "Tailwind",
    logo: '/tailwind.png',
    width: 105,
    height: 105,
  },
  {
    name: "Typescript",
    logo: '/ts.png',
    width: 90,
    height: 90,
  },
  {
    name: "Framer Motion",
    logo: '/fMotion.png',
    width: 90,
    height: 90,
  },
  {
    name: "ShadcnUI",
    logo: '/shadcn-w.png',
    width: 90,
    height: 90,
  },
  {
    name: "AceternityUi",
    logo: '/aceternity.png',
    width: 100,
    height: 100,
  },
  {
    name: "Vercel",
    logo: '/vercel.svg',
    width: 90,
    height: 90,
  },
  {
    name: "GitHub",
    logo: '/github-w2.svg',
    width: 150,
    height: 150,
  },
  {
    name: "Git",
    logo: '/git.svg',
    width: 100,
    height: 100,
  },
  {
    name: "VS Code",
    logo: '/vscode.svg',
    width: 100,
    height: 100,
  },
  {
    name: "ChatGPT",
    logo: '/chatgpt.png',
    width: 100,
    height: 100,
  },
  {
    name: "Codeium",
    logo: '/codeium.svg',
    width: 100,
    height: 100,
  },
]

export const socials = ["instagram.svg", "linkedin.svg"];
