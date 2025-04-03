import type { SectionMedia } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import { VideoRenderer } from "@/renderers/video";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";

export function SectionMediaRenderer({ asset, isFullWidth, link, linkText }: SectionMedia) {
  return (
    <section className="mt-8 md:mt-0 pb-8 md:pb-20">
      <div className={`${isFullWidth ? "w-full" : "md:w-9/12 md:mx-auto"}`}>
        <AspectRatio className="w-full bg-black text-white" ratio={16 / 9}>
          {asset.relationTo === "images" && typeof asset.value !== "number" && asset.value.url && (
            <Zoom classDialog="bg-white">
              <S3Image
                image={asset.value}
                imageProps={{
                  alt: asset.value.alternativeText,
                  className: "object-cover w-full h-full",
                  fill: true,
                  sizes: "(max-width: 768px) 120vw, 60vw",
                  src: asset.value.url!,
                  style: {
                    objectPosition: `${asset.value.focalX ?? 50}% ${asset.value.focalY ?? 50}%`,
                  },
                }}
              />
            </Zoom>
          )}
          {asset.relationTo === "mux-video" &&
            typeof asset.value !== "number" &&
            asset.value.aspectRatio &&
            asset.value?.playbackOptions?.[0].playbackId && (
              <VideoRenderer
                aspectRatio={asset.value.aspectRatio}
                muxPlaybackId={asset.value?.playbackOptions?.[0].playbackId}
              />
            )}
        </AspectRatio>
        {link && linkText && (
          <div className="text-right mt-4 mr-4 md:mr-0">
            <a className="tracking-widest uppercase" href={link} target="_blank">
              {linkText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
