import type { Block } from "payload";

import WidthField from "@/fields/width";

import { MediaBlock, SectionMedia } from "./media";

export const CarouselBlock: Block = {
  fields: [
    {
      fields: [...MediaBlock.fields],
      minRows: 1,
      name: "slides",
      required: true,
      type: "array",
    },
    WidthField,
  ],
  interfaceName: "CarouselBlock",
  slug: "carousel",
};

export const SectionCarousel: Block = {
  fields: [
    {
      fields: [...SectionMedia.fields],
      minRows: 1,
      name: "slides",
      required: true,
      type: "array",
    },
  ],
  interfaceName: "SectionCarousel",
  slug: "section-carousel",
};

export const SectionCarouselWithThumbnail: Block = {
  fields: [
    {
      fields: [...SectionMedia.fields],
      minRows: 1,
      name: "slides",
      required: true,
      type: "array",
    },
  ],
  interfaceName: "SectionCarouselWithThumbnail",
  slug: "section-carousel-with-thumbnail",
};
