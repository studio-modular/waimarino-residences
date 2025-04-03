import type { ReactNode } from "react";

import NavigationBar from "@/components/header";

export default async function OnboardingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <NavigationBar className="!text-white" />
      {children}
    </>
  );
}
