"use client";

import type { Section14Block } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/components/ui/carousel";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import { VideoRenderer } from "../video";

export function Section14({ copyOne, slides }: Section14Block) {
  const slideMarkup = slides.map((slide) => {
    if (typeof slide.asset.value === "number") return;
    return (
      <CarouselItem className="!pl-0 slide basis-full md:basis-1/2 origin-center" key={slide.id}>
        <AspectRatio className="ratio flex items-center justify-center bg-foreground text-background" ratio={3 / 4}>
          {slide.asset.relationTo === "images" ? (
            <S3Image
              image={slide.asset.value}
              imageProps={{
                alt: slide.asset.value.alternativeText,
                className: "object-cover w-full h-full",
                fill: true,
                sizes: "(max-width: 768px) 120vw, 50vw",
                src: slide.asset.value.url!,
                style: {
                  objectPosition: `${slide.asset.value.focalX ?? 50}% ${slide.asset.value.focalY ?? 50}%`,
                },
              }}
            />
          ) : slide.asset.value.aspectRatio && slide.asset.value?.playbackOptions?.[0].playbackId ? (
            <VideoRenderer
              aspectRatio={slide.asset.value.aspectRatio}
              muxPlaybackId={slide.asset.value?.playbackOptions?.[0].playbackId}
            />
          ) : null}
        </AspectRatio>
      </CarouselItem>
    );
  });
  return (
    <section className="dg-section flex flex-col gap-8 md:gap-0 text-center md:text-left md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className="row-start-1 row-end-1 md:col-start-3 md:col-end-14 lg:col-start-4 lg:col-end-14 flex items-center">
        <Carousel
          className="w-full"
          opts={{ align: "center", inViewThreshold: 0.8, loop: true, startIndex: 1, watchSlides: true }}
          plugins={[Autoplay({ delay: 30_000 }), ClassNames()]}
        >
          <CarouselContent className="!ml-0 carousel-classnames overflow-y-visible flex items-center">
            {slideMarkup}
          </CarouselContent>
          <CarouselPrevious className="!bg-transparent !border-transparent [&_svg]:size-16 [&_svg]:stroke-[0.3] text-black dark:text-white rounded-none -translate-x-4 -translate-y-3/4" />
          <CarouselNext className="!bg-transparent !border-transparent [&_svg]:size-16 [&_svg]:stroke-[0.3] text-black dark:text-white rounded-none translate-x-4 -translate-y-3/4" />
        </Carousel>
      </div>
      <div className="px-8 md:px-0 row-start-1 row-end-1 col-start-17 lg:col-end-22 col-end-24 flex items-center">
        <RichText className="richtext" data={copyOne} />
      </div>
    </section>
  );
}
