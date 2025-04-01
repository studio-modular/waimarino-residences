import type { Field } from "payload";

import { CarouselBlock } from "~/blocks/carousel";
import { MediaBlock } from "~/blocks/media";
import { RichTextBlock } from "~/blocks/text-field";

export const SectionsField: Field = {
  blocks: [CarouselBlock, RichTextBlock, MediaBlock],
  name: "sections",
  type: "blocks",
};
