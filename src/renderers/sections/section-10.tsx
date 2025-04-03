import type { Section10Block } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section10({ copyOne, copyTwo, heading, mediaBlockOne }: Section10Block) {
  return (
    <section className="dg-section flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto_auto] w-full">
      <div className="row-start-1 row-end-1 px-8 md:px-0 text-center md:text-right lg:text-left md:col-start-16 md:col-end-24 lg:col-start-11 lg:col-end-18">
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      </div>
      <div className="md:row-start-2 md:row-end-3 lg:row-start-3 lg:row-end-4 px-8 md:px-0 text-center md:text-left md:col-start-10 md:col-end-22 lg:col-start-11 lg:col-end-16 flex items-end">
        <RichText className="richtext" data={copyOne} />
      </div>
      <div className="md:mt-8 lg:mt-0 row-start-3 row-end-4 px-8 md:px-0 text-center md:text-left md:col-start-10 md:col-end-22 lg:col-start-18 lg:col-end-23 flex items-end">
        <RichText className="richtext" data={copyTwo} />
      </div>
      <div className="row-start-1 row-end-4 px-8 md:px-0 text-center md:text-left md:col-start-2 md:col-end-9 lg:col-start-3 lg:col-end-9">
        <div className="block lg:hidden">
          <Media data={mediaBlockOne} ratio={4 / 3} sizes="100vw" />
        </div>
        <div className="hidden lg:block">
          <Media data={mediaBlockOne} ratio={1 / 1} sizes="40vw" />
        </div>
      </div>
    </section>
  );
}
