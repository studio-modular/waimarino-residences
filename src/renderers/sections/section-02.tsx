import type { Section02Block } from "@/payload-types";

import { cn } from "@/shadcn/utils";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section02({ copyOne, heading, mediaBlockOne }: Section02Block) {
  const mediaBlockOneClassNames = cn([
    "row-start-1 row-end-3 lg:col-start-3 lg:col-end-9",
    "md:col-start-2 md:col-end-9",
    "order-3",
  ]);
  const headingClassNames = cn([
    "md:text-right lg:col-start-15 lg:col-end-22 row-start-1 row-end-1",
    "col-start-17 col-end-24",
    "order-1",
  ]);
  const copyOneClassNames = cn([
    "flex justify-center lg:justify-end flex-col row-start-1 row-end-3 lg:col-start-11 lg:col-end-15",
    "col-start-10 col-end-16",
    "order-2 px-8 md:px-0",
  ]);
  return (
    <section className="dg-section text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto_auto] w-full">
      <div className={mediaBlockOneClassNames}>
        <Media data={mediaBlockOne} ratio={3 / 4} sizes="(max-width: 768px) 130vw, 50vw" />
      </div>
      <div className={headingClassNames}>
        <h2>{heading}</h2>
      </div>
      <div className={copyOneClassNames}>
        <RichText className="richtext" data={copyOne} />
      </div>
    </section>
  );
}
