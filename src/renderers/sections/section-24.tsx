"use client";

import type { CarouselBlock, Section24Block } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import { VideoRenderer } from "../video";

export function Section24({ slides }: CarouselBlock | Section24Block) {
  const slidesMarkup = slides.map((slide) => {
    if (typeof slide.asset.value === "number") return undefined;
    return (
      <CarouselItem className="!pl-0 slide basis-full md:basis-2/5" key={slide.id}>
        <AspectRatio className="ratio flex items-center justify-center bg-foreground text-background" ratio={4 / 3}>
          {slide.asset.relationTo === "images" ? (
            <S3Image
              image={slide.asset.value}
              imageProps={{
                alt: slide.asset.value.alternativeText,
                className: "object-cover w-full h-full",
                fill: true,
                sizes: "(max-width: 768px) 120vw, 90vw",
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
    <section className="dg-section relative w-full">
      <Carousel
        className="md:px-16 w-full"
        opts={{ align: "center", inViewThreshold: 0.8, loop: true, startIndex: 1, watchSlides: true }}
        plugins={[Autoplay(), ClassNames()]}
      >
        <CarouselContent className="!ml-0 carousel-classnames next">{slidesMarkup}</CarouselContent>
        <CarouselPrevious className="border-transparent !bg-transparent md:!bg-[#C6C3BD] rounded-none left-0 size-12 [&_svg]:size-12 [&_svg]:text-[#EBEBE7]" />
        <CarouselNext className="border-transparent !bg-transparent md:!bg-[#C6C3BD] rounded-none right-0 size-12 [&_svg]:size-12 [&_svg]:text-[#EBEBE7]" />
      </Carousel>
    </section>
  );
}
