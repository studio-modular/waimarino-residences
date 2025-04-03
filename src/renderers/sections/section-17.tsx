import type { Section17Block } from "@/payload-types";

import { Button } from "@/shadcn/components/ui/button";
import { Separator } from "@/shadcn/components/ui/separator";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";

export function Section17({ heading, link, linkText, milestones }: Section17Block) {
  const mappedMilestones = (milestones as Section17Block["milestones"])?.map((stone) => {
    return (
      <div className="flex relative" key={stone.id + "milestone"}>
        <div className="size-6 absolute top-0 -translate-x-1/2 left-0 rounded-full border border-foreground bg-dg-background" />
        <div className="flex ml-16 flex-col md:flex-row">
          <h2 className="w-60 uppercase !text-xl font-serif leading-none">{stone.title}</h2>
          <div className="max-w-prose flex-1 flex flex-col gap-10 mb-4">
            <RichText className="*:!font-sans" data={stone.content} />
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="dg-section flex flex-col gap-4 md:gap-10">
      <Separator className="w-11/12 mx-auto bg-foreground" />
      <h2 className="!mb-0 text-center uppercase !font-skia tracking-widest">{heading}</h2>
      <Separator className="w-11/12 mx-auto bg-foreground" />
      <div className="px-10 w-full max-w-screen-xl mx-auto flex items-stretch justify-center relative mt-4 md:mt-10">
        <Separator className="bg-foreground h-auto" orientation="vertical" />
        <div className="flex flex-col gap-8 relative">
          {mappedMilestones}
          <div className="w-6 -translate-x-1/2 h-[1px] bg-foreground absolute bottom-0 left-0"></div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild variant="secondary">
          <Link href={link}>{linkText}</Link>
        </Button>
      </div>
    </section>
  );
}
