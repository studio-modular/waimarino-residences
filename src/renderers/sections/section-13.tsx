"use client";

import type { Section13Block } from "@/payload-types";

import { Button } from "@/shadcn/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/shadcn/components/ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/components/ui/popover";
import { Separator } from "@/shadcn/components/ui/separator";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { CircleHelp } from "lucide-react";
import Link from "next/link";

export function Section13({ panels }: Section13Block) {
  const panelMarkup = panels.map((panel) => {
    return (
      <div className="flex flex-1 flex-col gap-3 min-w-80 basis-1/4" key={panel.id}>
        <Separator className="bg-black" />
        <h2 className="!mb-0 text-center !font-skia tracking-widest">{panel.heading}</h2>
        <Separator className="bg-black" />
        <div className="my-4">
          <h3 className="!mb-0 !font-sans !text-3xl">
            {panel.title} <span className="text-base">{panel.nextToTitle}</span>
          </h3>
          <h4 className="text-sm">{panel.byline}</h4>
        </div>
        <Separator className="bg-black" />
        <ul className="flex-1 list-outside ml-4 text-black list-disc my-4">
          {panel.items?.map((item) => {
            return (
              <li className="items-center mb-2 gap-2" key={item.id}>
                {item.label}{" "}
                {item.description && (
                  <Popover>
                    <PopoverTrigger>
                      <CircleHelp className="ml-1 mt-0 translate-y-[0.1rem]" size="1rem" />
                    </PopoverTrigger>
                    <PopoverContent>
                      <p>{item.description}</p>
                    </PopoverContent>
                  </Popover>
                )}
              </li>
            );
          })}
        </ul>
        {panel.moreDetails && (
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button className="w-full">More Details</Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="py-4">
              <RichText className="flex flex-col gap-2 *:!font-sans [&_h2]:my-2 [&_p]:!mt-0" data={panel.moreDetails} />
            </CollapsibleContent>
          </Collapsible>
        )}
        <Button asChild className="w-full" variant="secondary">
          <Link href={panel.link!}>Purchase</Link>
        </Button>
      </div>
    );
  });
  return (
    <section className="dg-section flex-wrap flex gap-16 pt-8 md:pt-0 px-8 md:gap-24 md:px-24 relative w-full">
      {panelMarkup}
    </section>
  );
}
