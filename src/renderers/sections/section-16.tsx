import type { Section16Block } from "@/payload-types";

import { cn } from "@/shadcn/utils";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section16({ copyOne, heading, mediaBlockOne }: Section16Block) {
  const mediaBlockOneClassNames = cn([
    "row-start-1 row-end-4 lg:col-start-17 lg:col-end-25",
    "md:col-start-2 md:col-end-10",
    "order-3",
  ]);
  const headingClassNames = cn([
    "md:row-start-1 md:row-end-1 md:col-start-10 md:col-end-23 text-center md:text-right lg:text-left lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-6",
    "order-1",
    " px-8 md:px-0",
  ]);
  const copyOneClassNames = cn([
    "row-start-2 row-end-3 flex justify-center lg:justify-end flex-col  lg:col-start-6 lg:col-end-12",
    "md:col-start-11 md:col-end-19",
    "order-2 px-8 md:px-0",
  ]);
  return (
    <section className="dg-section text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 md:grid-rows-[50px_1fr_50px] lg:grid-rows-[auto_auto] w-full">
      <div className={mediaBlockOneClassNames}>
        <Media data={mediaBlockOne} ratio={3 / 4} sizes="(max-width: 768px) 130vw, 50vw" />
      </div>
      <div className={headingClassNames}>
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      </div>
      <div className={copyOneClassNames}>
        <RichText className="richtext" data={copyOne} />
      </div>
    </section>
  );
}
