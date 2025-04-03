import type { TestimonialBlock } from "@/payload-types";

import { Carousel, CarouselContent, CarouselItem } from "@/shadcn/components/ui/carousel";
import { useId } from "react";

export function SectionTestimonials({ testimonials }: TestimonialBlock) {
  const id = useId();
  return (
    <div className="w-11/12 max-w-screen-lg mx-auto flex flex-col gap-8">
      <h2 className="text-xl mb-0 lg:text-2xl tracking-wider uppercase font-serif">Testimonials</h2>
      <div className="relative">
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="ml-0 lg:ml-4">
            {testimonials?.map((t) => {
              return (
                <CarouselItem
                  className="ml-4 lg:ml-4 rounded-md basis-full lg:basis-1/3 border border-border shadow-sm bg-white p-4"
                  key={t.id + id}
                >
                  <a href={t.link || "#"}>
                    <h3 className="text-lg uppercase font-serif tracking-widest font-semibold">{t.heading}</h3>
                    <p className="mb-2 text-base">{t.content}</p>
                    <em className="text-sm">- {t.author}</em>
                  </a>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="absolute top-0 right-0 h-full w-1/5 bg-gradient-to-l from-os-white pointer-events-none to-transparent"></div>
      </div>
    </div>
  );
}
