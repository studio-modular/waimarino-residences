import { parseFullName } from "parse-full-name";
import { z } from "zod";

export const MailingListSchema = z.strictObject({
  email: z.string().email({ message: "Please add your email" }),
  name: z.preprocess(
    (val) => {
      const { error, first, last } = parseFullName(val as string);
      if (error && error.length > 0) return undefined;
      if (!first || !last) return undefined;
      return `${first} ${last}`;
    },
    z.string({
      message: "Please add your first and last name",
    }),
  ),
});

export type MailingListSchemaType = z.infer<typeof MailingListSchema>;
