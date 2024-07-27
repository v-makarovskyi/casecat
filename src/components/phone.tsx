import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  srcImg: string;
  dark?: boolean;
}

export default function Phone({
  srcImg,
  className,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div className={cn("relative z-50 overflow-hidden pointer-events-none")}>
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone-template"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 inset-0">
        <img
          src={srcImg}
          alt="configure-image"
          className="object-cover min-w-full min-h-full"
        />
      </div>
    </div>
  );
}
