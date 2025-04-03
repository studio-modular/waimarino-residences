import type { Section23Block } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section23({ copyOne, copyTwo, heading, mediaBlockOne }: Section23Block) {
  return (
    <section className="dg-section flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 md:grid-rows-[50px_1fr_auto] lg:grid-rows-[50px_1fr_100px] w-full">
      <h2 className="md:col-start-2 lg:col-start-3 col-end-10 text-center md:text-left !mb-0">{heading}</h2>
      <div className="md:row-start-2 md:row-end-2 lg:row-start-2 lg:row-end-2 px-8 md:px-0 text-center md:text-left md:col-start-2 md:col-end-7 lg:col-start-3 lg:col-end-7 flex items-end">
        <RichText className="richtext" data={copyOne} />
      </div>
      <div className="row-start-2 row-end-2 px-8 md:px-0 text-center md:text-left md:col-start-9 md:col-end-14 lg:col-start-9 lg:col-end-13 flex items-end">
        <RichText className="richtext" data={copyTwo} />
      </div>
      <div className="flex items-center row-start-1 row-end-4 px-8 md:px-0 text-center md:text-left md:col-start-17 md:col-end-25">
        <Media data={mediaBlockOne} ratio={3 / 4} sizes="(max-width: 768px) 130vw, 50vw" />
      </div>
    </section>
  );
}
