import type { Block } from "payload";

export const QuoteBlock: Block = {
  fields: [
    {
      name: "quote",
      type: "richText",
    },
    {
      name: "author",
      type: "richText",
    },
  ],
  interfaceName: "QuoteBlock",
  slug: "quote",
};
