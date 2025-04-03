import type { Section03Block } from "@/payload-types";

import { cn } from "@/shadcn/utils";
import { jsxConverters } from "@/utilities/renderers";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section03({ copyOne, heading, mediaBlockOne }: Section03Block) {
  const mediaBlockOneClassNames = cn(["row-start-1 row-span-full col-start-18 col-end-25", "order-3 pl-8 md:pl-0", ""]);
  const headingClassNames = cn(["row-start-2 row-end-3 md:text-left col-start-2 col-end-5", "order-1", ""]);
  const copyOneClassNames = cn([
    "row-start-2 row-end-3 flex justify-end flex-col lg:col-start-6 lg:col-end-10 md:mb-8",
    "md:col-start-6 md:col-end-15",
    "order-2 px-16 md:px-0",
  ]);
  return (
    <section className="dg-section text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className={mediaBlockOneClassNames}>
        <Media data={mediaBlockOne} ratio={3 / 4} sizes="(max-width: 768px) 130vw, 60vw" />
      </div>
      <div className={headingClassNames}>
        <h2>{heading}</h2>
      </div>
      <div className={copyOneClassNames}>
        <RichText className="richtext" converters={jsxConverters} data={copyOne} />
      </div>
    </section>
  );
}
