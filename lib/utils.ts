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
    logo: '/next-js.svg'
  },
  {
    name: "React",
    logo: '/react.svg'
  },
  {
    name: "Tailwind",
    logo: '/tailwind.svg'
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
    logo: '/shadcn-ui.svg'
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
    logo: '/github.svg'
  },
  {
    name: "Git",
    logo: '/git.svg'
  },
  {
    name: "Visual Studio Code",
    logo: '/vscode.svg'
  },
  {
    name: "ChatGPT",
    logo: '/chatgpt-6.svg'
  },
  {
    name: "Codeium",
    logo: '/codeium.svg'
  },
  {
    name: "Node.js",
    logo: '/nodejs.svg'
  },
  {
    name: "MongoDB",
    logo: '/mongodb.svg'
  },
  {
    name: "NPM",
    logo: '/npm.svg'
  }
]

export const socials = ["instagram.svg", "linkedin.svg"];
