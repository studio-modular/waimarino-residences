import type { Section19Block } from "@/payload-types";

export function Section19({ content, title }: Section19Block) {
  return (
    <section className="pl-8 pr-16 md:px-0 dg-section flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 w-full text-black">
      <div className="md:col-start-2 md:col-end-9 lg:col-start-3 lg:col-end-9 flex items-center">
        <h2 className="!leading-loose !mb-0 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: title }}></h2>
      </div>
      <div
        className="md:col-start-13 md:col-end-22 lg:col-start-13 lg:col-end-19 flex items-center"
        dangerouslySetInnerHTML={{ __html: content.replace("\n", "<br /><br/>") }}
      >
        {/* <p>{content}</p> */}
      </div>
    </section>
  );
}
