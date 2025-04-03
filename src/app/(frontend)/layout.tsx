import Footer from "@/components/footer";
import { PasswordProtection } from "@/components/password-protection";
import { Scroll } from "@/components/scroll";
import { abel, goudy, skia } from "@/utilities/fonts";

import "../../styles/global.css";

import { domAnimation, LazyMotion } from "motion/react";
import { unstable_ViewTransition as ViewTransition } from "react";
import React from "react";

export const metadata = {
  title: "Home | The Residence",
};

import { cookies } from "next/headers";

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
        <body className="flex flex-col min-h-screen">
          <LazyMotion features={domAnimation} strict>
            <main className="flex-1">{children}</main>
            <Footer />
          </LazyMotion>
          <Scroll />
          {!hasCookie && <PasswordProtection />}
        </body>
      </html>
    </ViewTransition>
  );
}
