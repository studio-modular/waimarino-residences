import type { Block } from "payload";

import { LinkBlockWithDescription } from "@/fields/link";

export const DropdownBlock: Block = {
  fields: [
    {
      name: "label",
      required: true,
      type: "text",
    },
    {
      fields: [...LinkBlockWithDescription.fields],
      minRows: 1,
      name: "links",
      required: true,
      type: "array",
    },
  ],
  interfaceName: "Dropdown",
  labels: {
    plural: "Dropdowns",
    singular: "Dropdown",
  },
  slug: "dropdown",
};
