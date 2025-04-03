import type { Block } from "payload";

export const TextAndImages: Block = {
  fields: [
    {
      label: "Content",
      name: "content",
      required: true,
      type: "richText",
    },
    {
      hasMany: true,
      label: "Images",
      minRows: 1,
      name: "images",
      relationTo: "images",
      required: true,
      type: "relationship",
    },
  ],
  interfaceName: "TextAndImagesBlock",
  slug: "text-and-images",
};

export default TextAndImages;
