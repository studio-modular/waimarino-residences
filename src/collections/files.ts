import type { CollectionConfig } from "payload";

export const Files: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["filename", "alternativeText", "updatedAt"],
    useAsTitle: "filename",
  },
  fields: [
    {
      name: "filename",
      required: true,
      type: "text",
    },
    {
      name: "description",
      required: true,
      type: "text",
    },
  ],
  slug: "files",
  upload: {
    staticDir: "media",
  },
};
