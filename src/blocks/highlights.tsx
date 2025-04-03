import type { Block } from "payload";

export const Highlights: Block = {
  fields: [
    {
      label: "Heading",
      name: "heading",
      type: "text",
    },
    {
      fields: [
        {
          label: "Highlight",
          name: "highlight",
          required: true,
          type: "text",
        },
        {
          label: "Description",
          name: "description",
          required: true,
          type: "richText",
        },
      ],
      label: "Highlights",
      minRows: 1,
      name: "highlights",
      required: true,
      type: "array",
    },
    {
      label: "Asset",
      name: "asset",
      relationTo: ["images", "mux-video"],
      required: true,
      type: "relationship",
    },
  ],
  interfaceName: "HighlightsBlock",
  slug: "highlights",
};

export default Highlights;
