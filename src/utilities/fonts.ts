import localFont from "next/font/local";

export const abel = localFont({
  src: [
    {
      path: "../../public/fonts/abel/Abel-Regular.woff2",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-abel",
});

export const skia = localFont({
  src: [
    {
      path: "../../public/fonts/skia/Skia-Regular.woff2",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-skia",
});

export const goudy = localFont({
  src: [
    {
      path: "../../public/fonts/goudy/SortsMillGoudy-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/goudy/SortsMillGoudy-Italic.woff2",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-goudy",
});
