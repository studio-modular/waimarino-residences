import parsePhoneNumber from "libphonenumber-js";
import { parseFullName } from "parse-full-name";
import { z } from "zod";

export const OfferSchema = z.strictObject({
  email: z.string().email({ message: "Please add your email" }),
  message: z.string().trim().min(1),
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
  phoneNumber: z.preprocess(
    (val) => {
      if (!val || (typeof val === "string" && val.trim() === "")) return null;
      const phone = parsePhoneNumber(val as string);
      if (!phone?.isValid()) return undefined;
      return phone.formatInternational().replaceAll(" ", "");
    },
    z.string({
      message: "Please add your phone number (with country code)",
    }),
  ),
  postalAddress: z.string().trim().min(1),
  preferredMethodOfContact: z.enum(["phone", "email", "email-or-phone"]),
});

export type OfferSchemaType = z.infer<typeof OfferSchema>;
