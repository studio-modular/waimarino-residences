"use server";

import { OfferSchema } from "@/schemas/offer";
import { actionClient } from "@/utilities/action-client";
import { env } from "@/utilities/env";
import { bulkSubscribe, createEvent, profilesApi } from "@/utilities/klaviyo";
import { parseFullName } from "parse-full-name";

export const offerAction = actionClient.schema(OfferSchema).action(async ({ parsedInput }) => {
  const { email, name } = parsedInput;
  const { first, last } = parseFullName(name);
  if (!first || !last) throw new Error("Something went wrong");
  const { body } = await profilesApi.createOrUpdateProfile({
    data: {
      attributes: {
        email,
        firstName: first,
        lastName: last,
      },
      type: "profile",
    },
  });
  await Promise.all([
    bulkSubscribe(email, env.KLAVIYO_OFFERS_LIST),
    createEvent(email, "Signed up to offers mailing list", parsedInput),
  ]);
  if (body.data.id) return { success: true };
  throw new Error("Something went wrong");
});
