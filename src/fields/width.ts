import type { Field } from "payload";

export const validateWidth = (value: unknown): string | true => {
  if (typeof value !== "string") return "Please add a valid width (with percentage)";
  const match = value.match(/^\d+%$/);
  if (!match) return `${value} is not a valid width (with percentage)`;
  if (match.length !== 1) return `${value} is not a valid width (with percentage)`;
  return true;
};

const WidthField: Field = {
  defaultValue: "100%",
  label: "Width",
  name: "width",
  required: true,
  type: "text",
  validate: validateWidth,
};

export default WidthField;
