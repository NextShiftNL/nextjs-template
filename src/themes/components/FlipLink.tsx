"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FlipLink({
  children,
  href,
  color,
}: {
  children: React.ReactNode;
  href: string;
  color?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href && pathname !== "/";

  switch (color) {
    case "white":
      color = "text-white";
      break;
    case "black":
      color = "text-black";
      break;
    default:
      color = "text-primary";
      break;
  }

  const DURATION = 0.25;
  const STAGGER = 0.01;

  if (typeof children !== "string") {
    console.error("FlipLink expects 'children' to be a string.");
    return null;
  }

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative block w-fit overflow-hidden whitespace-nowrap text-foreground font-plusJakartaSans ${color} ${
        isActive ? "border-b border-primary" : ""
      }`}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              key={i}
              transition={{
                duration: DURATION,
                ease: "easeOut",
                delay: STAGGER * i,
              }}
              className="inline-block normal-case text-foreground"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              key={i}
              transition={{
                duration: DURATION,
                ease: "easeOut",
                delay: STAGGER * i,
              }}
              className="inline-block normal-case text-foreground"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
}
