import type { Block } from "payload";

import ColorField from "@/fields/color";

import { CarouselBlock } from "./carousel";
import { MediaBlock } from "./media";
import { RichTextBlock } from "./text-field";

export const SectionsBlock: Block = {
  fields: [
    {
      blocks: [CarouselBlock, MediaBlock, RichTextBlock],
      minRows: 1,
      name: "sections",
      required: true,
      type: "blocks",
    },
    {
      defaultValue: false,
      label: "Full Screen?",
      name: "isFullScreen",
      type: "checkbox",
    },
    ColorField,
  ],
  interfaceName: "Sections",
  labels: {
    plural: "Sections",
    singular: "Sections",
  },
  slug: "sections-block",
};
