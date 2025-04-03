import payloadConfig from "@/payload.config";
import { getPayload } from "payload";

export const payload = () => {
  return getPayload({ config: payloadConfig });
};
