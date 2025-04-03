import type { Block } from "payload";

export const PropertyBlock: Block = {
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
      hasMany: false,
      label: "Logo",
      name: "logo",
      relationTo: "images",
      required: true,
      type: "relationship",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "features",
      type: "richText",
    },
  ],
  interfaceName: "PropertyBlock",
  slug: "property-block",
};
