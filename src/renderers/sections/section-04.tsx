import type { Section04Block } from "@/payload-types";

import { cn } from "@/shadcn/utils";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section04({ copyOne, copyTwo, mediaBlockOne }: Section04Block) {
  const mediaBlockOneClassNames = cn(["row-start-1 row-span-full col-start-1 col-end-9", "order-3", ""]);
  const copyOneClassNames = cn([
    "row-start-2 row-end-3 flex justify-start text-right flex-col lg:col-start-12 lg:col-end-16 [&_h2]:pb-6",
    "md:col-start-10 md:col-end-16",
    "order-1",
  ]);
  const copyTwoClassNames = cn([
    "row-start-2 row-end-3 flex justify-end text-balance flex-col lg:col-start-18 lg:col-end-22 [&_h2]:pb-6",
    "md:col-start-17 md:col-end-24",
    "order-2",
  ]);
  return (
    <section className="dg-section px-8 md:px-0 text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className={mediaBlockOneClassNames}>
        <Media data={mediaBlockOne} ratio={4 / 3} sizes="(max-width: 768px) 130vw, 50vw" />
      </div>
      <div className={copyOneClassNames}>
        <RichText className="richtext" data={copyOne} />
      </div>
      <div className={copyTwoClassNames}>
        <RichText className="richtext" data={copyTwo} />
      </div>
    </section>
  );
}
