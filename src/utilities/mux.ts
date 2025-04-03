import Mux from "@mux/mux-node";

import { env } from "./env";

export const mux = new Mux({
  tokenId: env.MUX_ACCESS_TOKEN_ID,
  tokenSecret: env.MUX_SECRET_KEY,
  webhookSecret: env.MUX_WEBHOOK_SECRET,
});
