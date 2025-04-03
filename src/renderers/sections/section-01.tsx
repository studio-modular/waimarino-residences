import { Section01Block } from "@/payload-types";
import { cn } from "@/shadcn/utils";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { Media } from "../media";

export function Section01({ copyOne, heading, mediaBlockOne, mediaBlockTwo, subheading }: Section01Block) {
  const mediaOne = cn([
    "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-7",
    "md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-8",
    "order-2",
  ]);
  const mediaTwo = cn([
    "lg:col-start-17 lg:col-end-23",
    "md:col-start-17 md:col-end-24",
    "row-start-3",
    "order-5 pl-8 md:pl-0",
  ]);
  const headingOne = cn([
    "lg:col-start-17 lg:col-end-23",
    "md:col-start-17 md:col-end-24",
    "text-center md:text-right text-balance order-1 md:px-0 px-8 *:!mb-0",
  ]);
  const headingTwo = cn([
    "row-start-3 col-start-2 col-end-19 flex items-end *:!mb-0 md:max-w-72",
    "order-4 md:p-0 px-8",
  ]);
  const copyOneClasses = cn([
    "lg:row-start-1 lg:row-end-1 lg:col-start-9 lg:col-end-14",
    "md:row-start-1 md:row-end-1 md:col-start-9 md:col-end-15",
    "order-3 text-right md:text-left md:p-0 pr-8 pl-16 justify-start",
  ]);
  return (
    <section className="dg-section flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className={mediaOne}>
        <Media data={mediaBlockOne} ratio={3 / 4} sizes="(max-width: 768px) 130vw, 50vw" />
      </div>
      <div className={headingOne}>
        <h2>{heading}</h2>
      </div>
      <div className={headingTwo}>
        <h3 className="!mb-0">{subheading}</h3>
      </div>
      <div className={copyOneClasses}>
        <RichText className="richtext" data={copyOne} />
      </div>
      <div className={mediaTwo}>
        <Media data={mediaBlockTwo} ratio={4 / 3} sizes="10vw" />
      </div>
    </section>
  );
}
