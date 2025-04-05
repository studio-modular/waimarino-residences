import type { PropertyBlock } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { RichText } from "@payloadcms/richtext-lexical/react";

export function SectionProperty({ description, features, image, logo }: PropertyBlock) {
  return (
    <div className="dg-section md:px-0 px-8 text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className="row-start-1 row-end-4 flex items-center px-8 md:px-0 text-center md:text-left md:col-start-2 md:col-end-9 xl:col-start-4 xl:col-end-9">
        <AspectRatio className="ratio flex items-center justify-center bg-foreground text-background" ratio={3 / 4}>
          {image && typeof image !== "number" && (
            <S3Image
              image={image}
              imageProps={{
                alt: image.alternativeText,
                className: "object-contain w-full h-full",
                fill: true,
                sizes: "(max-width: 768px) 120vw, 90vw",
                src: image.url!,
                style: {
                  objectPosition: `${image.focalX ?? 50}% ${image.focalY ?? 50}%`,
                },
              }}
            />
          )}
        </AspectRatio>
      </div>
      <div className="row-start-2= row-end-3 px-8 md:px-0 text-center md:text-left md:col-start-10 md:col-end-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <div>
            <div className="w-3/4 mx-auto md:mx-0 md:w-full md:max-w-40 mb-8">
              {logo && typeof logo !== "number" && (
                <S3Image
                  image={logo}
                  imageProps={{
                    alt: logo.alternativeText,
                    className: "max-w-40 w-full h-auto",
                    fill: true,
                    sizes: "(max-width: 768px) 150px",
                    src: logo.url!,
                    style: {
                      objectPosition: `${logo.focalX ?? 50}% ${logo.focalY ?? 50}%`,
                    },
                  }}
                />
              )}
            </div>
            {description && <RichText className="max-w-72" data={description} />}
          </div>
        </div>
      </div>
      <div className="row-start-2 row-end-3 px-8 md:px-0 text-center md:text-left md:col-end-23 md:col-start-17 xl:col-start-17 xl:col-end-22">
        <div className="flex h-full flex-col items-center md:items-stretch justify-end">
          {features && <RichText className="max-w-72 richtext text-sm" data={features} />}
        </div>
      </div>
    </div>
  );
}
