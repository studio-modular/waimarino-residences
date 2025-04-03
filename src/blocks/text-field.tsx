import type { Block } from "payload";

import ColorField from "@/fields/color";
import { ButtonsBlock } from "@/fields/link";
import WidthField from "@/fields/width";
import {
  BlocksFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  OrderedListFeature,
  ParagraphFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from "@payloadcms/richtext-lexical";

export const RichTextBlock: Block = {
  fields: [
    {
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"] }),
          UnorderedListFeature(),
          OrderedListFeature(),
          // Example showing how to customize the built-in fields

          BlocksFeature({ blocks: [ButtonsBlock] }),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
      label: "Content",
      name: "content",
      required: true,
      type: "richText",
    },
    {
      defaultValue: false,
      label: "Full Screen?",
      name: "isFullScreen",
      type: "checkbox",
    },
    ColorField,
    WidthField,
  ],
  interfaceName: "RichText",
  slug: "rich-text",
};
