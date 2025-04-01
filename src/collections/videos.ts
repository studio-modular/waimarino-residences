import type { CollectionConfig } from "payload";

import AspectRatioField from "@/fields/aspect-ratio";
import { slugField } from "@/fields/slug";

export const Videos: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    ...slugField("title"),
    {
      label: "Title",
      name: "title",
      required: true,
      type: "text",
    },
    {
      label: "Caption",
      name: "caption",
      required: true,
      type: "text",
    },
    {
      label: "Mux Playback ID",
      name: "muxPlaybackId",
      required: true,
      type: "text",
    },
    {
      label: "Cover",
      name: "cover",
      relationTo: "images",
      required: true,
      type: "relationship",
    },
    AspectRatioField,
    {
      defaultValue: true,
      label: "Featured?",
      name: "isFeatured",
      required: true,
      type: "checkbox",
    },
  ],
  slug: "videos",
};
