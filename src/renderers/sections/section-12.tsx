import type { Section12Block } from "@/payload-types";

import { cn } from "@/shadcn/utils";
import { RichText } from "@payloadcms/richtext-lexical/react";

export function Section12({ copyOne, heading }: Section12Block) {
  const headingClassNames = cn([
    "lg:col-start-3 lg:col-end-7",
    "md:col-start-3 md:col-end-10",
    "order-1 px-16 md:px-0",
  ]);
  const copyOneClassNames = cn([
    "lg:col-start-11 lg:col-end-17",
    "md:col-start-13 md:col-end-22 text-right md:text-left",
    "order-2 px-16 md:px-0",
  ]);
  return (
    <section className="dg-section py-16 md:py-24 !my-0 bg-[#3C3A2C] text-white md:text-left flex flex-col gap-16 md:gap-0 md:grid grid-cols-24 w-full">
      <div className={headingClassNames}>
        <h2 className="!mb-0" dangerouslySetInnerHTML={{ __html: heading }} />
      </div>
      <div className={copyOneClassNames}>
        <RichText className="richtext" data={copyOne} />
      </div>
    </section>
  );
}
