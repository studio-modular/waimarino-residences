import Link from "next/link";
import { useId } from "react";

// @ts-expect-error test
import type { Image, MediaBlock, SectionCarousel, SectionMedia } from "../payload-types";

import { S3Image } from "../components/s3-image";
import { AspectRatio } from "../shadcn/components/ui/aspect-ratio";
import { Button } from "../shadcn/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/components/ui/carousel";
import { Separator } from "../shadcn/components/ui/separator";
import { cn } from "../shadcn/utils";
import { VideoRenderer } from "./video";

export function Media({
  data,
  ratio = 16 / 9,
  sizes = "100vw",
}: {
  data: (SectionCarousel | SectionMedia)[];
  ratio?: number;
  sizes?: string;
}) {
  const id = useId();
  const content = data?.[0];
  if (!content) return;
  if (content.blockType === "section-carousel") {
    return (
      <Carousel className="relative pl-0 ml-0" opts={{ loop: true, watchResize: true, watchSlides: true }}>
        <CarouselContent>
          {content.slides?.map((slide, index) => {
            const {
              asset: { relationTo, value },
            } = slide;
            if (typeof value === "number") return;
            return (
              <CarouselItem className="text-white basis-full ml-0 pl-0" key={id + slide.id + index}>
                <AspectRatio asChild className="bg-black" ratio={ratio}>
                  {relationTo === "images" && (
                    <div className="w-full h-full flex items-center justify-center">
                      <h2 className="text-black">Image Loading</h2>
                      <S3Image
                        image={value}
                        imageProps={{
                          alt: value.alternativeText,
                          className: "object-cover w-full h-full",
                          fill: true,
                          sizes,
                          src: value.url!,
                          style: {
                            objectPosition: `${value.focalX ?? 50}% ${value.focalY ?? 50}%`,
                          },
                        }}
                      />
                    </div>
                  )}
                  {relationTo === "mux-video" && value.playbackOptions?.[0].playbackId && (
                    <VideoRenderer
                      aspectRatio={value.aspectRatio ?? "16/9"}
                      muxPlaybackId={value.playbackOptions[0].playbackId}
                    />
                  )}
                </AspectRatio>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="rounded-none bg-transparent border-transparent absolute z-10 left-4 text-white [&_svg]:size-8" />
        <CarouselNext className="rounded-none bg-transparent border-transparent absolute z-10 right-4 text-white [&_svg]:size-8" />
      </Carousel>
    );
  }
  if (typeof content.asset.value === "number") return;
  const {
    asset: { relationTo, value },
  } = content;
  if (relationTo === "images") {
    return (
      <AspectRatio ratio={ratio}>
        <S3Image
          image={value}
          imageProps={{
            alt: value.alternativeText,
            className: "object-cover w-full h-full",
            height: value.height ?? undefined,
            sizes,
            src: value.url as string,
            style: {
              objectPosition: `${value.focalX ?? 50}% ${value.focalY ?? 50}%`,
            },
            width: value.width ?? undefined,
          }}
        />
      </AspectRatio>
    );
  }
  if (relationTo === "mux-video" && value.playbackOptions?.[0].playbackId) {
    return (
      <AspectRatio ratio={ratio}>
        <VideoRenderer aspectRatio={value.aspectRatio ?? "16/9"} muxPlaybackId={value.playbackOptions[0].playbackId} />
      </AspectRatio>
    );
  }
}

export function MediaRenderer({ data }: { data: MediaBlock }) {
  let elem = null;
  if (!data.asset || typeof data.asset.value === "number") return;
  if (data.asset.relationTo === "images") {
    const { alternativeText, height, url, width } = data.asset.value;
    elem = (
      // <AspectRatio className="max-h-screen w-full overflow-hidden" ratio={width && height ? width / height : 16 / 9}>
      <S3Image
        image={data.asset.value}
        imageProps={{
          alt: alternativeText,
          className: "object-cover object-center w-full h-full",
          // fill: true,
          height: height ?? undefined,
          src: url as string,
          width: width ?? undefined,
        }}
      />
      // </AspectRatio>
    );
    // }
  } else if (data.asset.relationTo === "videos") {
    const { aspectRatio, muxPlaybackId } = data.asset.value;
    elem = <VideoRenderer aspectRatio={aspectRatio} muxPlaybackId={muxPlaybackId} />;
  }

  return (
    <div
      className={cn(["relative flex items-center justify-center h-full max-h-screen w-full overflow-hidden"])}
      style={{ fontSize: 0 }}
    >
      {elem}
      {(data.heading || data.description || data.buttons) && (
        <div className="absolute bottom-0 left-1/2 max-h-full -translate-x-1/2 w-full max-w-screen-xl justify-between items-end p-8 text-white flex">
          {(data.heading || data.description) && (
            <div className="flex flex-col gap-4">
              {data.heading && <h3 className="leading-none text-2xl">{data.heading}</h3>}
              {data.heading && data.description && <Separator className="bg-white" />}
              {data.description && <h4 className="leading-none text-xl">{data.description}</h4>}
            </div>
          )}
          <div className="flex flex-row gap-4">
            {data.buttons &&
              // @ts-expect-error test
              data.buttons.map((button) => (
                <Button asChild className="rounded-none shadow-md" key={button.id} size="lg" variant={button.variant}>
                  <Link href={button.link}>{button.label}</Link>
                </Button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SectionImage({ image, sizes = "100vw" }: { image: Image; sizes?: string }) {
  return (
    <S3Image
      image={image}
      imageProps={{
        alt: image.alternativeText,
        className: "object-cover object-center w-full h-full",
        height: image.height ?? undefined,
        sizes,
        src: image.url as string,
        width: image.width ?? undefined,
      }}
    />
  );
}

export function SectionMediaRenderer({ data }: { data: (SectionCarousel | SectionMedia)[] }) {
  const content = data?.[0];
  if (!content) return null;
  if (
    content.blockType === "section-media" &&
    typeof content.asset.value !== "number" &&
    content.asset.relationTo === "images"
  ) {
    return <SectionImage image={content.asset.value} />;
  }
  if (
    content.blockType === "section-media" &&
    typeof content.asset.value !== "number" &&
    content.asset.relationTo === "mux-video" &&
    content.asset.value.aspectRatio &&
    content.asset.value.playbackOptions?.[0].playbackId
  ) {
    return (
      <VideoRenderer
        aspectRatio={content.asset.value.aspectRatio ?? "16/9"}
        muxPlaybackId={content.asset.value.playbackOptions[0].playbackId}
      />
    );
  }
  return (
    <>
      <h3>Hello</h3>
    </>
  );
}
