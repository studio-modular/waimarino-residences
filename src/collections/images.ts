import type { CollectionConfig } from "payload";

export const Images: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["filename", "alternativeText", "updatedAt"],
    useAsTitle: "alternativeText",
  },
  fields: [
    {
      name: "alternativeText",
      required: true,
      type: "text",
    },
    {
      name: "caption",
      required: false,
      type: "text",
    },
  ],
  slug: "images",
  upload: {
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        height: 300,
        name: "thumbnail",
        position: "centre",
        width: 300,
      },
      {
        name: "small",
        position: "centre",
        width: 750,
        // width: 768,
      },
      {
        name: "medium",
        position: "centre",
        width: 1500,
        // width: 768,
      },
      {
        name: "large",
        position: "centre",
        width: 2250,
        // width: 768,
      },
      {
        name: "extra-large",
        position: "centre",
        width: 3000,
        // width: 768,
      },
    ],
    mimeTypes: ["image/jpg", "image/jpeg"],
    staticDir: "media",
  },
};
