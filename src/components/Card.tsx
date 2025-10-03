import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge("bg-slate-950 p-8 rounded shadow", className)}>
      {children}
    </div>
  );
}
