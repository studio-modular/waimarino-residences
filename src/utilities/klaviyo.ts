import { ApiKeySession, EventsApi, FlowsApi, ProfileEnum, ProfilesApi, type ProfileUpsertQuery } from "klaviyo-api";

import { env } from "./env";

export const session = new ApiKeySession(env.KLAVIYO_API_KEY);
export const profilesApi = new ProfilesApi(session);
export const flowsApi = new FlowsApi(session);
export const eventsApi = new EventsApi(session);

export const createEvent = async (
  email: string,
  eventType: string,
  properties: Record<string, unknown> = {},
  profileAttributes: ProfileUpsertQuery["data"]["attributes"] = {},
) => {
  try {
    const ev = await eventsApi.createEvent({
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
                ...profileAttributes,
                email,
              },
              type: "profile",
            },
          },
          properties: {
            ...properties,
          },
        },
        type: "event",
      },
    });
    return ev;
  } catch (error) {
    // @ts-expect-error Response
    console.error(error, error.response);
  }
};

export const createOrUpdateProfile = async (
  email: string,
  attributes: ProfileUpsertQuery["data"]["attributes"] = {},
) => {
  try {
    const res = await profilesApi.createOrUpdateProfile({
      data: {
        attributes: {
          email,
          ...attributes,
        },
        type: ProfileEnum.Profile,
      },
    });
    return res.body.data.id;
  } catch (error) {
    // @ts-expect-error error
    console.error(error, error.response);
  }
};

export const bulkSubscribe = async (email: string, listId: string) => {
  try {
    return await profilesApi.bulkSubscribeProfiles({
      data: {
        attributes: {
          profiles: {
            data: [
              {
                attributes: {
                  email,
                  subscriptions: {
                    email: {
                      marketing: {
                        consent: "SUBSCRIBED",
                      },
                    },
                  },
                },
                type: "profile",
              },
            ],
          },
        },
        relationships: {
          list: { data: { id: listId, type: "list" } },
        },
        type: "profile-subscription-bulk-create-job",
      },
    });
  } catch (error) {
    // @ts-expect-error error
    console.error(error, error.response);
  }
};
