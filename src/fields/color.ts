import type { Field } from "payload";

export const validateHexColor = (value: unknown): string | true => {
  if (typeof value !== "string") return "Please add a valid colour";
  const match = value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
  if (!match) return `${value} is not a valid hex color`;
  if (match.length !== 1) return `${value} is not a valid hex color`;
  return true;
};

const ColorField: Field = {
  defaultValue: "#ffffff",
  label: "Background Color",
  name: "color",
  required: true,
  type: "text",
  validate: validateHexColor,
};

export default ColorField;
