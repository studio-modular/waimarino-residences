import type { Section07Block } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section07({ copyOne, copyTwo, heading, mediaBlockOne }: Section07Block) {
  return (
    <section className="dg-section flex flex-col gap-8 md:gap-0 text-center md:text-left md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className="pr-8 md:pr-0 row-start-1 row-span-full col-start-17 md:col-end-23 lg:col-end-22 order-3">
        <Media data={mediaBlockOne} ratio={3 / 4} sizes="(max-width: 768px) 130vw, 50vw" />
      </div>
      <div className="md:px-0 px-8 row-start-1 row-end-1 md:text-left md:col-start-2 lg:col-start-3 col-end-10">
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      </div>
      <div className="md:px-0 px-8 row-start-2 row-end-3 flex justify-end flex-col md:col-start-2 lg:col-start-3 md:max-w-72 col-end-8 [&_h2]:pb-6">
        <RichText className="richtext" data={copyOne} />
      </div>
      <div className="md:px-0 px-8 row-start-2 row-end-3 flex justify-end flex-col col-start-9 col-end-15 md:max-w-72 [&_h2]:pb-6">
        <RichText className="richtext" data={copyTwo} />
      </div>
    </section>
  );
}
