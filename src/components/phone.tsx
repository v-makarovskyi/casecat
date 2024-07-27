import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export default function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone-template"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute inset-0 -z-10">
        <img src={imgSrc} alt="overlaying phone image" className="object-cover min-w-full min-h-full"/>
      </div>
    </div>
  );
}
