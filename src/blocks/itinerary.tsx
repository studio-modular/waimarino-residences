import type { Block } from "payload";

export const Itinerary: Block = {
  fields: [
    {
      label: "Heading",
      name: "heading",
      type: "text",
    },
    {
      label: "Before Content",
      name: "beforeContent",
      type: "textarea",
    },
    {
      fields: [
        {
          label: "Heading",
          name: "heading",
          required: true,
          type: "text",
        },
        {
          label: "Content",
          name: "content",
          required: true,
          type: "richText",
        },
      ],
      label: "Stops",
      minRows: 1,
      name: "stops",
      required: true,
      type: "array",
    },
    {
      label: "After Content",
      name: "afterContent",
      type: "textarea",
    },
  ],
  interfaceName: "ItineraryBlock",
  slug: "itinerary",
};

export default Itinerary;
