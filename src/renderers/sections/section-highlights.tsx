import type { HighlightsBlock } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import { VideoRenderer } from "@/components/video";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { RichText } from "@payloadcms/richtext-lexical/react";

export function SectionHighlights({ asset, heading, highlights }: HighlightsBlock) {
  return (
    <div className="dg-section md:px-0 px-8 text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className="row-start-2 row-end-3 px-8 md:px-0 text-center md:text-left md:col-start-4 md:col-end-14">
        <div className="flex flex-col justify-center">
          <h2 className="mb-16">{heading}</h2>
          <div className="flex md:gap-16 gap-8 flex-wrap justify-between text-center richtext">
            {[...highlights, ...highlights, ...highlights].map((h) => {
              return (
                <div className="flex-1 basis-1/4 inline-flex justify-center" key={`${h.highlight} ${h.id}`}>
                  <div className="max-w-24">
                    <h3 className="font-serif tracking-wider font-semibold text-base lg:text-xl uppercase leading-relaxed mb-4 text-balance">
                      {h.highlight}
                    </h3>
                    <div>
                      <RichText className="richtext" data={h.description} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row-start-1 row-end-4 px-8 md:px-0 text-center md:text-left md:col-start-16 md:col-end-22">
        <AspectRatio className="ratio flex items-center justify-center bg-foreground text-background" ratio={3 / 4}>
          {asset.relationTo === "images" && typeof asset.value !== "number" && (
            <S3Image
              image={asset.value}
              imageProps={{
                alt: asset.value.alternativeText,
                className: "object-cover w-full h-full",
                fill: true,
                sizes: "(max-width: 768px) 120vw, 90vw",
                src: asset.value.url!,
                style: {
                  objectPosition: `${asset.value.focalX ?? 50}% ${asset.value.focalY ?? 50}%`,
                },
              }}
            />
          )}
          {asset.relationTo === "mux-video" &&
            typeof asset.value !== "number" &&
            asset.value.aspectRatio &&
            asset.value.playbackOptions?.[0].playbackId && (
              <VideoRenderer
                aspectRatio={asset.value.aspectRatio}
                muxPlaybackId={asset.value.playbackOptions?.[0].playbackId}
              />
            )}
        </AspectRatio>
      </div>
    </div>
  );
}
