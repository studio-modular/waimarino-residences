import type { Block } from "payload";

import { ButtonsField } from "@/fields/link";

export const CallToAction: Block = {
  fields: [
    {
      label: "Heading",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      required: true,
      type: "textarea",
    },
    ButtonsField,
  ],
  interfaceName: "CallToActionBlock",
  slug: "call-to-action",
};

export default CallToAction;
