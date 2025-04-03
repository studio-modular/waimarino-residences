import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";

import { Button } from "@/shadcn/components/ui/button";
import Link from "next/link";

export const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  inlineBlocks: {
    button: ({ node }) => {
      const fields = node.fields as unknown as {
        blockName?: null | string;
        blockType: string;
        href: string;
        id?: null | string;
        label: string;
        variant: "link" | "primary" | "secondary";
      };
      if (fields.variant === "link") {
        return <Link href={fields.href}>{fields.label}</Link>;
      }
      return (
        <Button asChild variant={fields.variant}>
          <Link href={fields.href}>{fields.label}</Link>
        </Button>
      );
    },
  },
});
