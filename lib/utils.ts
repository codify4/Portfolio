import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const techLogos = [
  {
    name: "HTML",
    logo: '/html.svg'
  },
  {
    name: "CSS",
    logo: '/css.svg'
  },
  {
    name: "JavaScript",
    logo: '/javascript.svg'
  },
  {
    name: "Next.js",
    logo: '/nextjs-w.webp'
  },
  {
    name: "React",
    logo: '/react.svg'
  },
  {
    name: "Tailwind",
    logo: '/tailwindcss.svg'
  },
  {
    name: "Typescript",
    logo: '/typescript.svg'
  },
  {
    name: "Framer Motion",
    logo: '/fMotion.png'
  },
  {
    name: "Shadcn UI",
    logo: '/shadcn-w.png'
  },
  {
    name: "Aceternity",
    logo: '/aceternity.png'
  },
  {
    name: "Vercel",
    logo: '/vercel.svg'
  },
  {
    name: "GitHub",
    logo: '/github-w2.svg'
  },
  {
    name: "Git",
    logo: '/git.svg'
  },
  {
    name: "VS Code",
    logo: '/vscode.svg'
  },
  {
    name: "ChatGPT",
    logo: '/chatgpt.png'
  },
  {
    name: "Codeium",
    logo: '/codeium.svg'
  },
]

export const socials = ["instagram.svg", "linkedin.svg"];
