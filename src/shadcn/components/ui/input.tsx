import * as React from "react";

import { cn } from "../../utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-inherit/80 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "!bg-transparent text-white placeholder:text-inherit/80 px-0 rounded-none !ring-transparent focus-within:ring-transparent",
          "border-b border-b-white ring-transparent focus-within:ring-transparent focus-visible:ring-transparent focus:outline-transparent focus-visible:outline-transparent ",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
