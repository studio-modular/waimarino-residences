import type { QuoteBlock } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";

export function SectionQuote({ author, quote }: QuoteBlock) {
  return (
    <div className="w-11/12 max-w-screen-lg mx-auto flex flex-col justify-center items-center gap-8">
      <div className="px-8 w-full max-w-3xl items-center justify-center flex flex-col gap-8 text-center">
        {quote && <RichText className="" data={quote} />}
        {author && <RichText className="text-sm" data={author} />}
      </div>
    </div>
  );
}
