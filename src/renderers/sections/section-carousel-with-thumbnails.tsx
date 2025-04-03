import type { SectionCarouselWithThumbnail } from "@/payload-types";

import CarouselWithThumbnails from "@/components/carousel-with-thumbnails";

export function SectionCarouselWithThumbnail({ slides }: SectionCarouselWithThumbnail) {
  return (
    <div className="dg-section md:px-0 px-8 text-center md:text-left flex flex-col gap-8 md:gap-0 md:grid grid-cols-24 grid-rows-[auto_auto] w-full">
      <div className="row-start-2 row-end-3 px-8 md:px-0 text-center md:text-left md:col-start-3 md:col-end-23">
        <CarouselWithThumbnails slides={slides} />
      </div>
    </div>
  );
}
