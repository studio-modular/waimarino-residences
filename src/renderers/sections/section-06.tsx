import type { Section06Block } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section06({ copyOne, copyTwo, mediaBlockOne }: Section06Block) {
  return (
    <section className="dg-section md:px-0 px-8 text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className="row-start-1 row-span-full col-start-1 col-end-9 order-3">
        <Media data={mediaBlockOne} ratio={4 / 3} sizes="(max-width: 768px) 130vw, 50vw" />
      </div>
      <div className="flex justify-start flex-col md:col-start-10 lg:col-start-11 md:col-end-16 lg:col-end-16 [&_h2]:pb-10">
        <RichText className="" data={copyOne} />
      </div>
      <div className="flex justify-start flex-col md:col-start-17 lg:col-start-17 md:col-end-23 lg:col-end-22 [&_h2]:pb-6">
        <RichText className="richtext" data={copyTwo} />
      </div>
    </section>
  );
}
