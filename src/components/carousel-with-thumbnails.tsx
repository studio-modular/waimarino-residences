"use client";

import type { SectionCarouselWithThumbnail } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import { VideoRenderer } from "@/renderers/video";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/shadcn/components/ui/carousel";
import "react-medium-image-zoom/dist/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";

export default function CarouselWithThumbnails({ slides }: { slides: SectionCarouselWithThumbnail["slides"] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  if (!slides) return null;
  const slideMarkup = slides.map((slides, index) => {
    if (typeof slides.asset.value === "number") return undefined;
    return (
      <CarouselItem
        className="basis-1/6"
        key={slides.id}
        onClick={() => {
          api?.scrollTo(index);
          setCurrent(index);
        }}
      >
        <AspectRatio className="w-full bg-black text-white" ratio={4 / 3}>
          {slides.asset.relationTo === "images" ? (
            slides.asset.value.url ? (
              <S3Image
                image={slides.asset.value}
                imageProps={{
                  alt: slides.asset.value.alternativeText,
                  className: "object-cover w-full h-full",
                  fill: true,
                  sizes: "30vw",
                  src: slides.asset.value.url as string,
                  style: {
                    objectPosition: `${slides.asset.value.focalX ?? 50}% ${slides.asset.value.focalY ?? 50}%`,
                  },
                }}
              />
            ) : null
          ) : slides.asset.value.aspectRatio && slides.asset.value?.playbackOptions?.[0].playbackId ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="Video Preview Thumbnail"
              className="w-full h-full object-cover object-center"
              src={`https://image.mux.com/${slides.asset.value?.playbackOptions?.[0].playbackId}/thumbnail.jpg`}
            />
          ) : null}
        </AspectRatio>
      </CarouselItem>
    );
  });
  return (
    <>
      <div className="relative">
        <AspectRatio className="w-full bg-black text-white" ratio={16 / 9}>
          {slides[current].asset.relationTo === "images" &&
            typeof slides[current].asset.value !== "number" &&
            slides[current].asset.value.url && (
              <Zoom classDialog="bg-white">
                <S3Image
                  image={slides[current].asset.value}
                  imageProps={{
                    alt: slides[current].asset.value.alternativeText,
                    className: "object-cover w-full h-full",
                    fill: true,
                    sizes: "(max-width: 768px) 120vw, 60vw",
                    src: slides[current].asset.value.url!,
                    style: {
                      objectPosition: `${slides[current].asset.value.focalX ?? 50}% ${slides[current].asset.value.focalY ?? 50}%`,
                    },
                  }}
                />
              </Zoom>
            )}
          {slides[current].asset.relationTo === "mux-video" &&
            typeof slides[current].asset.value !== "number" &&
            slides[current].asset.value.aspectRatio &&
            slides[current].asset.value?.playbackOptions?.[0].playbackId && (
              <VideoRenderer
                aspectRatio={slides[current].asset.value.aspectRatio}
                muxPlaybackId={slides[current].asset.value?.playbackOptions?.[0].playbackId}
              />
            )}
        </AspectRatio>
        <button
          onClick={() => {
            let index = current - 1;
            if (index < 0) index = slides.length - 1;
            api?.scrollTo(index);
            setCurrent(index);
          }}
        >
          <ChevronLeft className="z-10 absolute top-1/2 left-4 -translate-y-1/2 size-8 text-white" />
        </button>
        <button
          onClick={() => {
            const index = (current + 1) % slides.length;
            api?.scrollTo(index);
            setCurrent(index);
          }}
        >
          <ChevronRight className="z-10 absolute top-1/2 right-4 -translate-y-1/2 size-8 text-white" />
        </button>
      </div>
      <Carousel className="-mt-2" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>{slideMarkup}</CarouselContent>
      </Carousel>
    </>
  );
}
