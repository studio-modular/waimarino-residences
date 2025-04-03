import type { Metadata } from "next";

import { env } from "@/utilities/env";
import { payload } from "@/utilities/payload";
import { unstable_cache } from "next/cache";

const getHomePageData = unstable_cache(
  async () => {
    const cms = await payload();
    const data = await cms.findGlobal({
      depth: 4,
      slug: "home",
    });
    return data;
  },
  ["home", "home-page", "all"],
  { revalidate: 86_400, tags: ["home", "home-page", "all"] },
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
      <div className="sticky top-0 left-0 h-auto">
        <h1>Hello World</h1>
      </div>
      <div className="relative bg-dg-background z-10 overflow-hidden">
        <main className="flex flex-col" id="content">
          {/* <SectionRenderer content={data?.content} /> */}
        </main>
      </div>
    </>
  );
}
