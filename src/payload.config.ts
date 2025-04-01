// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/users";
import { Images } from "./collections/images";
import { Videos } from "./collections/videos";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Images, Videos],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  editor: lexicalEditor(),
  plugins: [
    computeBlurhash({
      collections: ["images"],
      width: 64,
    }),
    seoPlugin({
      collections: ["expeditions"],
      generateDescription: ({ doc }) => doc.excerpt,
      generateTitle: ({ doc }) => `${doc.title} | Ocean Souls`,
      globals: [
        "home",
        "expeditions-pages",
        "experience",
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
          generateFileURL: ({ filename, prefix }) => `${env.CLOUDFRONT_DISTRIBUTION}/${prefix}/${filename}`,
          prefix: "images",
        },
        // videos: {
        //   generateFileURL: ({ filename, prefix }) => `${env.CLOUDFRONT_DISTRIBUTION}/${prefix}/${filename}`,
        //   prefix: "videos",
        // },
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
});
