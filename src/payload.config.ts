import { muxVideoPlugin } from "@oversightstudio/mux-video";
// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import computeBlurhash from "payload-blurhash-plugin";
import sharp from "sharp";

import { Files } from "./collections/files";
import { Images } from "./collections/images";
import { Users } from "./collections/Users";
import { Home } from "./globals/home";
import { Offer } from "./globals/offer";
import { Properties } from "./globals/properties";
import { env } from "./utilities/env";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Images, Files],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  editor: lexicalEditor(),
  globals: [Home, Offer, Properties],
  plugins: [
    computeBlurhash({
      collections: ["images"],
      width: 64,
    }),
    muxVideoPlugin({
      enabled: true,
      initSettings: {
        jwtPrivateKey: env.MUX_JWT_PRIVATE_KEY || "",
        jwtSigningKey: env.MUX_JWT_SIGNING_KEY || "",
        tokenId: env.MUX_ACCESS_TOKEN_ID || "",
        tokenSecret: env.MUX_SECRET_KEY || "",
        webhookSecret: env.MUX_WEBHOOK_SECRET || "",
      },
      uploadSettings: {
        cors_origin: env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
        new_asset_settings: {
          playback_policy: ["public"],
        },
      },
    }),
    seoPlugin({
      collections: ["expeditions"],
      generateDescription: ({ doc }) => doc.excerpt,
      generateTitle: ({ doc }) => `${doc.title} | ${env.NEXT_PUBLIC_BASE_TITLE}`,
      generateURL: (data) => {
        if (data.globalSlug === "home") return env.NEXT_PUBLIC_BASE_URL;
        return `${env.NEXT_PUBLIC_BASE_URL}/${data.globalSlug}`;
      },
      globals: [
        "home",
        "offer",
        "expeditions-pages",
        "experience",
        "properties",
        "boat",
        "film",
        "privacy-policy",
        "staff",
        "terms-and-conditions",
      ],
      tabbedUI: true,
      uploadsCollection: "images",
    }),
    s3Storage({
      acl: "public-read",
      bucket: env.S3_BUCKET,
      collections: {
        images: {
          generateFileURL: ({ filename, prefix }) => {
            return `${env.CLOUDFRONT_DISTRIBUTION}${prefix ? "/" + prefix : ""}/${encodeURIComponent(filename)}`;
          },
          prefix: "images",
        },
      },
      config: {
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY,
        },
        region: env.S3_REGION,
      },
      disableLocalStorage: env.NODE_ENV === "production",
      enabled: env.NODE_ENV === "production",
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
