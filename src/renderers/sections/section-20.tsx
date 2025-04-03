import type { FullScreenBlock, Section20Block } from "@/payload-types";

import { Media } from "../media";

export function Section20({ mediaBlockOne }: FullScreenBlock | Section20Block) {
  return (
    <section className="w-full pb-8 md:pb-20">
      <Media data={mediaBlockOne} ratio={16 / 9} sizes="100vw" />
    </section>
  );
}
