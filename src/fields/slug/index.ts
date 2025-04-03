import type { CheckboxField, TextField } from "payload";

import { formatSlugHook } from "./formatSlug";

type Overrides = {
  checkboxOverrides?: Partial<CheckboxField>;
  slugOverrides?: Partial<TextField>;
};

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField];

export const slugField: Slug = (fieldToUse = "title", overrides = {}) => {
  const { checkboxOverrides, slugOverrides } = overrides;

  const checkBoxField: CheckboxField = {
    admin: {
      hidden: true,
      position: "sidebar",
    },
    defaultValue: true,
    name: "slugLock",
    type: "checkbox",
    ...checkboxOverrides,
  };

  // Expect ts error here because of typescript mismatching Partial<TextField> with TextField
  // @ts-expect-error TextField
  const slugField: TextField = {
    index: true,
    label: "Slug",
    name: "slug",
    required: true,
    type: "text",
    unique: true,
    ...(slugOverrides || {}),
    admin: {
      position: "sidebar",
      ...(slugOverrides?.admin || {}),
      components: {
        Field: {
          clientProps: {
            checkboxFieldPath: checkBoxField.name,
            fieldToUse,
          },
          path: "@/fields/slug/slug.component.tsx",
        },
      },
    },
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
  };

  return [slugField, checkBoxField];
};
