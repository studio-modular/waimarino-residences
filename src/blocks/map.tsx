import type { Block } from "payload";

export const Map: Block = {
  fields: [
    {
      label: "Heading",
      name: "heading",
      type: "text",
    },
    {
      label: "Center Latitude",
      max: 90,
      min: -90,
      name: "centerLatitude",
      type: "number",
    },
    {
      label: "Center Longitude",
      max: 180,
      min: -180,
      name: "centerLongitude",
      type: "number",
    },
    {
      label: "Before Text",
      name: "beforeText",
      type: "richText",
    },
    {
      fields: [
        {
          label: "Title",
          maxLength: 80,
          minLength: 1,
          name: "title",
          required: true,
          type: "text",
        },
        {
          label: "Description",
          maxLength: 500,
          name: "description",
          required: true,
          type: "textarea",
        },
        {
          label: "Latitude",
          max: 90,
          min: -90,
          name: "latitude",
          required: true,
          type: "number",
        },
        {
          label: "Longitude",
          max: 180,
          min: -180,
          name: "longitude",
          required: true,
          type: "number",
        },
      ],
      label: "Locations",
      minRows: 1,
      name: "locations",
      required: true,
      type: "array",
    },
    {
      label: "After Text",
      name: "afterText",
      type: "richText",
    },
  ],
  interfaceName: "MapBlock",
  slug: "map",
};

export default Map;
