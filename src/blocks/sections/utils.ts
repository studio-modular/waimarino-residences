import type { Field } from "payload";

import {
  BlocksFeature,
  BoldFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  OrderedListFeature,
  ParagraphFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from "@payloadcms/richtext-lexical";

import { SectionCarousel } from "../carousel";
import { SectionMedia } from "../media";

export const SectionHeading: (name: string) => Field = (name = "heading") => ({
  name,
  required: true,
  type: "textarea",
});

export const SectionMediaBlock: (name: string) => Field = (name = "mediaBlockOne") => ({
  blocks: [SectionCarousel, SectionMedia],
  maxRows: 1,
  minRows: 1,
  name,
  required: true,
  type: "blocks",
});

export const SectionContent: (name: string) => Field = (name = "copy") => ({
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        inlineBlocks: [
          {
            fields: [
              {
                label: "Link",
                name: "href",
                type: "text",
              },
              {
                label: "Label",
                name: "label",
                type: "text",
              },
              {
                defaultValue: "link",
                label: "Variant",
                name: "variant",
                options: ["link", "primary", "secondary"],
                type: "select",
              },
            ],
            labels: {
              plural: "Buttons",
              singular: "Button",
            },
            slug: "button",
          },
        ],
      }),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      ParagraphFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),

      HeadingFeature({
        enabledHeadingSizes: ["h2", "h3"],
      }),
    ],
  }),
  name,
  required: true,
  type: "richText",
});
