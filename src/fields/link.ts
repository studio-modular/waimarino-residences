import type { Block, Field } from "payload";

export const validateLink = (value: unknown): string | true => {
  if (typeof value !== "string") return "Please add a valid link";
  const match = value.startsWith("/") || value.startsWith("http");
  if (!match) return `${value} is not a valid link`;
  return true;
};

export const LinkField: Field = {
  defaultValue: "/",
  label: "Link",
  name: "link",
  required: true,
  type: "text",
  validate: validateLink,
};

export const LabelField: Field = {
  label: "Label",
  name: "label",
  required: true,
  type: "text",
};

export const DescriptionField: Field = {
  defaultValue: "",
  label: "Description",
  name: "description",
  required: true,
  type: "text",
};

export const VariantField: Field = {
  defaultValue: "link",
  label: "Variant",
  name: "variant",
  options: ["primary", "secondary", "outline", "ghost", "link"],
  required: true,
  type: "select",
};

export const DisabledField: Field = {
  defaultValue: false,
  label: "Disabled?",
  name: "isDisabled",
  required: true,
  type: "checkbox",
};

export const LinkBlock: Block = {
  fields: [LinkField, LabelField, DisabledField],
  slug: "link",
};

export const LinkBlockWithDescription: Block = {
  fields: [LinkField, LabelField, DescriptionField, DisabledField],
  slug: "link",
};

export const ButtonBlock: Block = {
  fields: [LinkField, LabelField, VariantField],
  slug: "button",
};

export const ButtonsField: Field = {
  fields: [LinkField, LabelField, VariantField],
  name: "buttons",
  type: "array",
};

export const ButtonsBlock: Block = {
  fields: [ButtonsField],
  slug: "buttons",
};
