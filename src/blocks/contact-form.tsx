import type { Block } from "payload";

export const ContactForm: Block = {
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
      label: "After Text",
      name: "afterText",
      type: "richText",
    },
  ],
  interfaceName: "ContactFormBlock",
  slug: "contact-form",
};

export default ContactForm;
