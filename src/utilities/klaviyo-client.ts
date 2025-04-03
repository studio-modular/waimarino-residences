import { betterFetch } from "@better-fetch/fetch";

import { env } from "./env";

type EventType = "onboarding-corporate" | "onboarding-residence" | "onboarding-villa";

export async function createEvent(email: string, eventType: EventType) {
  return betterFetch(`https://a.klaviyo.com/client/events?company_id=${env.NEXT_PUBLIC_KLAVIYO_API_KEY}`, {
    body: JSON.stringify({
      data: {
        attributes: {
          metric: {
            data: {
              attributes: {
                name: eventType,
              },
              type: "metric",
            },
          },
          profile: {
            data: {
              attributes: {
                email,
              },
              type: "profile",
            },
          },
          properties: {},
        },
        type: "event",
      },
    }),
    headers: {
      accept: "application/vnd.api+json",
      "content-type": "application/vnd.api+json",
      revision: "2025-01-15",
    },
    method: "POST",
  });
}
