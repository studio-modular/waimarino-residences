import type { Block } from "payload";

export const Video: Block = {
  fields: [
    {
      hasMany: false,
      label: "Video",
      name: "video",
      relationTo: "mux-video",
      required: true,
      type: "relationship",
    },
  ],
  interfaceName: "VideoBlock",
  slug: "video",
};

export default Video;
