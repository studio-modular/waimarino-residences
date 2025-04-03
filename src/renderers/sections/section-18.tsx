import type { Section18Block } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { Button } from "@/shadcn/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/components/ui/carousel";
import { Separator } from "@/shadcn/components/ui/separator";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";

import { VideoRenderer } from "../video";

export function Section18({ panels }: Section18Block) {
  const panelMarkup = panels?.map((panel) => {
    return (
      <div className="basis-1/4 flex-1 flex flex-col min-w-96" key={panel.id + "-property-show"}>
        <Carousel className="relative pl-0 ml-0" key={panel.id + "carousel"} opts={{ loop: true }}>
          <CarouselContent>
            {panel.slides.map((slide) => {
              if (typeof slide.asset.value === "number") return;
              return (
                <CarouselItem className="text-white basis-full ml-0 pl-0" key={slide.id}>
                  <AspectRatio asChild ratio={16 / 9}>
                    <Link href={panel.exploreLink}>
                      {slide.asset.relationTo === "images" ? (
                        <S3Image
                          image={slide.asset.value}
                          imageProps={{
                            alt: slide.asset.value.alternativeText,
                            className: "object-cover w-full h-full",
                            fill: true,
                            sizes: "(max-width: 768px) 120vw, 60vw",
                            src: slide.asset.value.url!,
                            style: {
                              objectPosition: `${slide.asset.value.focalX ?? 50}% ${slide.asset.value.focalY ?? 50}%`,
                            },
                          }}
                        />
                      ) : slide.asset.value.aspectRatio && slide.asset.value.playbackOptions?.[0].playbackId ? (
                        <VideoRenderer
                          aspectRatio={slide.asset.value.aspectRatio}
                          muxPlaybackId={slide.asset.value.playbackOptions?.[0].playbackId}
                        />
                      ) : null}
                    </Link>
                  </AspectRatio>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="rounded-none bg-transparent border-transparent absolute z-10 left-4 text-white [&_svg]:size-8" />
          <CarouselNext className="rounded-none bg-transparent border-transparent absolute z-10 right-4 text-white [&_svg]:size-8" />
        </Carousel>
        <div className="basis-1/3 flex flex-1 flex-col justify-center gap-4">
          <div className="text-center pt-8 pb-4">
            <h2 className="font-skia uppercase text-xl tracking-widest mb-1">{panel.title}</h2>
            <h3 className="font-skia uppercase text-xs tracking-widest !mb-0">{panel.subtitle}</h3>
          </div>
          <Separator className="bg-black" />
          <h3 className="text-center uppercase my-2">
            From <span className="text-4xl">${panel.startingPrice}</span>
          </h3>
          <Separator className="bg-black" />
          <div className="text-sm my-4 leading-loose whitespace-pre-wrap flex-1">
            <RichText data={panel.copyOne} />
          </div>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Button asChild className="mt-4">
              <Link href={panel.exploreLink}>Explore</Link>
            </Button>
            <Button className="mt-4" variant="secondary">
              Book
            </Button>
          </div>
        </div>
      </div>
    );
  });
  return <section className="flex flex-wrap gap-16 md:gap-20 px-8 md:px-20">{panelMarkup}</section>;
}
