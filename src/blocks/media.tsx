import type { Block } from "payload";

import { LabelField, LinkField, VariantField } from "@/fields/link";
import WidthField from "@/fields/width";

export const MediaBlock: Block = {
  fields: [
    {
      label: "Asset",
      name: "asset",
      relationTo: ["images", "mux-video"],
      required: true,
      type: "relationship",
    },
    {
      name: "heading",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      fields: [LinkField, LabelField, VariantField],
      name: "buttons",
      type: "array",
    },
    {
      defaultValue: false,
      label: "Full Screen?",
      name: "isFullScreen",
      type: "checkbox",
    },
    WidthField,
  ],
  interfaceName: "MediaBlock",
  slug: "media",
};

export const SectionMedia: Block = {
  fields: [
    {
      label: "Asset",
      name: "asset",
      relationTo: ["images", "mux-video"],
      required: true,
      type: "relationship",
    },
    {
      name: "description",
      type: "text",
    },
    {
      defaultValue: true,
      label: "Full Width?",
      name: "isFullWidth",
      type: "checkbox",
    },
    {
      name: "link",
      required: false,
      type: "text",
    },
    {
      name: "linkText",
      required: false,
      type: "text",
    },
  ],
  interfaceName: "SectionMedia",
  slug: "section-media",
};
