import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { S3Image } from "@/components/s3-image";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { env } from "@/utilities/env";
import { payload } from "@/utilities/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { unstable_cache } from "next/cache";

const getHomePageData = unstable_cache(
  async () => {
    const cms = await payload();
    const data = await cms.findGlobal({
      depth: 4,
      slug: "offer",
    });
    return data;
  },
  ["offer", "all"],
  { revalidate: 86_400, tags: ["offer", "all"] },
);

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getHomePageData();
  return {
    description: meta?.description ?? "",
    ...(meta?.image &&
      typeof meta.image !== "number" &&
      meta.image.sizes?.medium?.url && {
        openGraph: {
          images: [
            {
              alt: meta?.image.alternativeText,
              height: meta?.image.sizes.medium.height ?? undefined,
              url: meta?.image.sizes.medium.url,
              width: meta?.image.sizes.medium.width ?? undefined,
            },
          ],
        },
      }),
    title: meta?.title ?? `The Offer | ${env.NEXT_PUBLIC_BASE_TITLE}`,
  };
}

export default async function HomePage() {
  const data = await getHomePageData();
  if (!data) return null;
  return (
    <>
      <div className="md:min-h-screen w-full flex flex-col items-center justify-center">
        <div className="max-w-screen-lg px-8 py-24 w-full flex flex-col sm:flex-row justify-center gap-8 lg:gap-20">
          <div className="basis-1/3 flex items-center">
            <AspectRatio className="w-full bg-black" ratio={3 / 4}>
              {data.asset && data.asset.relationTo === "images" && typeof data.asset.value !== "number" && (
                <S3Image
                  image={data.asset.value}
                  imageProps={{
                    alt: data.asset.value.alternativeText,
                    className: "object-cover object-center",
                    fill: true,
                    sizes: "(max-width: 768px) 100vw, 40vw",
                    src: data.asset.value.url!,
                  }}
                />
              )}
            </AspectRatio>
          </div>
          <div className="basis-2/3 text-balance flex-1 flex flex-col gap-4 justify-center max-w-prose">
            {data.headerCopy && (
              <RichText
                className="richtext flex flex-col gap-12 [&_h2]:font-serif [&_h2]:uppercase [&_h2]:text-lg [&_h2]:tracking-wider *:!leading-relaxed *:!font-normal"
                data={data.headerCopy}
              />
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#C6C3BD] bg-opacity-45 text-dg-off-black p-8 md:p-20 max-w-screen-md mx-auto md:mb-20">
        {data.beforeCopy && (
          <RichText
            className="richtext flex flex-col gap-8 [&_h2]:font-serif [&_h2]:uppercase [&_h2]:text-lg [&_h2]:tracking-wider *:!leading-relaxed *:!font-normal"
            data={data.beforeCopy}
          />
        )}
        <ContactForm />
        {/* <h2 className="text-2xl uppercase tracking-widest font-skia mb-12">Enquire</h2> */}
      </div>
    </>
  );
}
