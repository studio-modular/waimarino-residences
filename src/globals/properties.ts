import type { GlobalConfig } from "payload";

import { SectionCarouselWithThumbnail } from "@/blocks/carousel";
import Highlights from "@/blocks/highlights";
import { SectionMedia } from "@/blocks/media";
import { PropertyBlock } from "@/blocks/property";
import { QuoteBlock } from "@/blocks/quote";
import { revalidateTag } from "next/cache";

import {
  Carousel,
  FullScreen,
  Questions,
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14,
  Section15,
  Section16,
  Section17,
  Section18,
  Section19,
  Section20,
  Section21,
  Section22,
  Section23,
  Section24,
  SectionSeparator,
  Testimonials,
} from "../blocks/sections/";

export const Properties: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Title",
      name: "title",
      required: true,
      type: "text",
    },
    {
      label: "Header Asset",
      name: "asset",
      relationTo: ["images", "mux-video"],
      type: "relationship",
    },
    {
      label: "Marker Text",
      name: "markerText",
      type: "text",
    },
    {
      blocks: [
        Section01,
        Section02,
        Section03,
        Section04,
        Section05,
        Section06,
        Section07,
        Section08,
        Section09,
        Section10,
        Section11,
        Section12,
        Section13,
        Section14,
        Section15,
        Section16,
        Section17,
        Section18,
        Section19,
        Section20,
        Section21,
        Section22,
        Section23,
        Section24,
        SectionSeparator,
        FullScreen,
        Carousel,
        Questions,
        Testimonials,
        Highlights,
        SectionCarouselWithThumbnail,
        QuoteBlock,
        SectionMedia,
        PropertyBlock,
      ],
      label: "Content",
      name: "content",
      type: "blocks",
    },
  ],
  hooks: {
    afterChange: [
      async function handlePropertiesChange() {
        revalidateTag("properties");
      },
    ],
  },
  slug: "properties",
};
