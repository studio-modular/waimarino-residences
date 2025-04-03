import type { Section08Block } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section08({ copyOne, copyTwo, heading, mediaBlockOne }: Section08Block) {
  return (
    <section className="dg-section text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto] w-full">
      <div className="md:pr-0 col-start-1 col-end-8 order-3">
        <Media data={mediaBlockOne} ratio={4 / 3} sizes="(max-width: 768px) 130vw, 60vw" />
      </div>
      <div className="px-8 md:px-0 row-start-1 row-end-1 flex flex-col items-center md:items-start md:col-start-9 xl:col-start-10 xl:col-end-15 col-end-16">
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
        <RichText className="richtext" data={copyOne} />
      </div>
      <div className="px-8 md:px-0 row-start-1 row-end-1 flex col-start-17 col-end-24 xl:col-end-22">
        <RichText className="richtext" data={copyTwo} />
      </div>
    </section>
  );
}
