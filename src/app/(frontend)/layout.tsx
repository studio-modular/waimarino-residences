import type { Metadata, Viewport } from "next";

import Footer from "@/components/footer";
import { PasswordProtection } from "@/components/password-protection";

import "../../styles/global.css";

import { Scroll } from "@/components/scroll";
import { Toaster } from "@/shadcn/components/ui/sonner";
import { env } from "@/utilities/env";
import { abel, goudy, skia } from "@/utilities/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { domAnimation, LazyMotion } from "motion/react";
import { cookies } from "next/headers";
import { unstable_ViewTransition as ViewTransition } from "react";
import React from "react";

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  themeColor: "#3C3A2C",
};

export const metadata: Metadata = {
  title: "Home | The Residence",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const hasCookie = cookieStore.has("auth_logged_in");
  const { children } = props;
  return (
    <ViewTransition>
      <html
        className={`${abel.variable} ${skia.variable} ${goudy.variable} antialiased flex flex-col min-h-screen`}
        lang="en"
      >
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_STREAM_ID} />
        <body className="flex flex-col min-h-screen">
          <LazyMotion features={domAnimation} strict>
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster
              closeButton={true}
              duration={5_000}
              position="top-center"
              richColors={true}
              swipeDirections={["left", "right", "bottom", "top"]}
            />
          </LazyMotion>
          <Scroll />
          {!hasCookie && <PasswordProtection />}
        </body>
      </html>
    </ViewTransition>
  );
}
