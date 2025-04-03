"use server";

import { actionClient } from "@/utilities/action-client";
import { bulkSubscribe, createEvent, profilesApi } from "@/utilities/klaviyo";
import { parseFullName } from "parse-full-name";

import { MailingListSchema } from "../schemas/mailing-list";

export const mailingListAction = actionClient
  .schema(MailingListSchema)
  .action(async ({ parsedInput: { email, name } }) => {
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
    // TODO Change the ID
    await Promise.all([
      bulkSubscribe(email, "KlaviyoLists.Subscribers"),
      createEvent(email, "Signed up to mailing list"),
    ]);
    if (body.data.id) return { success: true };
    throw new Error("Something went wrong");
  });
