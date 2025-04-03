"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Scroll() {
  const pathname = usePathname();
  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <></>;
}
