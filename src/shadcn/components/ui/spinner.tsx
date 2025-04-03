import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React from "react";

import { cn } from "../../utils";

const spinnerVariants = cva("flex-col items-center justify-center", {
  defaultVariants: {
    show: true,
  },
  variants: {
    show: {
      false: "hidden",
      true: "flex",
    },
  },
});

const loaderVariants = cva("animate-spin text-primary", {
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      large: "size-12",
      medium: "size-8",
      small: "size-6 stroke-1",
    },
  },
});

interface SpinnerContentProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
  children?: React.ReactNode;
  className?: string;
}

export function Spinner({ children, className, show, size }: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  );
}
