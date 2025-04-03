import type { Section09Block } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section09({ copyOne, heading, mediaBlockOne }: Section09Block) {
  return (
    <section className="dg-section flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto_auto] w-full">
      <div className="px-8 md:px-0 text-center md:text-left row-start-1 row-end-2 lg:row-start-2 lg:row-end-2 col-start-2 lg:col-start-2 col-end-6">
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      </div>
      <div className="px-8 md:px-0 text-center md:text-left row-start-1 row-end-2 lg:row-start-2 lg:row-end-2 col-start-7 col-end-15 lg:col-end-12">
        <RichText className="richtext" data={copyOne} />
      </div>
      <div className="pl-8 md:pl-0 text-center md:text-left row-start-1 row-end-4 col-start-17 col-end-25">
        <Media data={mediaBlockOne} ratio={1 / 1} sizes="(max-width: 768px) 100vw, 60vw" />
      </div>
    </section>
  );
}
