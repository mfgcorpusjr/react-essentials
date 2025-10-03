import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TabButtonProps = {
  isActive?: boolean;
} & ComponentProps<"button">;

export default function TabButton({ isActive, ...rest }: TabButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "px-4 py-2 rounded text-white text-sm cursor-pointer hover:bg-slate-950 transition-colors duration-500",
        isActive ? "bg-purple-500 hover:bg-purple-500" : ""
      )}
    />
  );
}
