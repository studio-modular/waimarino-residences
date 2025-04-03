import type { Block } from "payload";

import { ButtonsField } from "@/fields/link";

export const Image: Block = {
  fields: [
    {
      hasMany: false,
      label: "Image",
      name: "image",
      relationTo: "images",
      required: true,
      type: "relationship",
    },
    {
      label: "Heading",
      name: "heading",
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
    },
    ButtonsField,
  ],
  interfaceName: "ImageBlock",
  slug: "image",
};

export default Image;
