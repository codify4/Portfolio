import { cn } from "@/lib/utils";

type ButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ title, className, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={cn("relative inline-flex h-12 w-[120px] overflow-hidden rounded-full p-[1px]", className)}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880808_0%,#DC143C_50%,#880808_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                   {title}
            </span>
        </button>
        
    )
}

export default Button