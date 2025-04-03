import type { Block } from "payload";

import ColorField from "@/fields/color";
import { ButtonsField } from "@/fields/link";

export const PanelBlock: Block = {
  fields: [
    {
      name: "heading",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "nextToTitle",
      type: "text",
    },
    {
      name: "byline",
      type: "text",
    },
    {
      fields: [
        {
          name: "label",
          type: "textarea",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
      name: "items",
      type: "array",
    },
    {
      label: "More Details",
      name: "moreDetails",
      type: "richText",
    },
    ButtonsField,
  ],
  interfaceName: "Panel",
  slug: "panel",
};

export const PanelsBlock: Block = {
  fields: [
    {
      label: "Heading",
      name: "heading",
      type: "text",
    },
    {
      label: "Before Text",
      name: "beforeText",
      type: "richText",
    },
    {
      fields: [...PanelBlock.fields],
      minRows: 1,
      name: "panels",
      required: true,
      type: "array",
    },
    {
      label: "After Text",
      name: "afterText",
      type: "richText",
    },
    {
      defaultValue: false,
      label: "Full Screen?",
      name: "isFullScreen",
      type: "checkbox",
    },
    ColorField,
  ],
  interfaceName: "Panels",
  labels: {
    plural: "Panels",
    singular: "Panels",
  },
  slug: "panels",
};
