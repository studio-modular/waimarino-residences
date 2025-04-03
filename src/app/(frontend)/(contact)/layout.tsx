import type { ReactNode } from "react";

import NavigationBar from "@/components/header";

export default function ContactLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <NavigationBar className="!text-black dark:!text-white from-transparent" />
      {children}
    </>
  );
}
