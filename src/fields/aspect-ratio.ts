import type { Field } from "payload";

export const validateAspectRatio = (value: unknown): string | true => {
  if (typeof value !== "string") return "Please add a valid aspect ratio";
  const match = value.match(/^\d+\/\d+$/);
  if (!match) return `${value} is not a valid aspect ratio`;
  if (match.length < 1) return `${value} is not a valid aspect ratio`;
  return true;
};

const AspectRatioField: Field = {
  defaultValue: "16/9",
  label: "Aspect Ratio",
  name: "aspectRatio",
  required: true,
  type: "text",
  validate: validateAspectRatio,
};

export default AspectRatioField;
