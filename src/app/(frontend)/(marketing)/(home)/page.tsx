import type { Metadata } from "next";

import { SectionImage } from "@/renderers/media";
import SectionRenderer from "@/renderers/sections/renderer";
import { VideoRenderer } from "@/renderers/video";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { env } from "@/utilities/env";
import { payload } from "@/utilities/payload";
import { ChevronDown } from "lucide-react";
import { unstable_cache } from "next/cache";
import Link from "next/link";

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
    title: meta?.title ?? `Home | ${env.NEXT_PUBLIC_BASE_TITLE}`,
  };
}

export default async function HomePage() {
  const data = await getHomePageData();
  if (!data) return null;
  return (
    <>
      <div className="sticky top-0 left-0 md:h-auto h-[70vh]">
        <AspectRatio className="flex justify-center items-center md:h-auto h-[70vh]" ratio={16 / 9}>
          {data.asset?.value && typeof data.asset?.value !== "number" && data.asset.relationTo === "images" && (
            <SectionImage image={data.asset.value} sizes="(max-width: 768px) 200vw, 100vw" />
          )}
          {data.asset?.value &&
            typeof data.asset?.value !== "number" &&
            data.asset.relationTo === "mux-video" &&
            data.asset.value.playbackOptions?.[0].playbackId && (
              <VideoRenderer
                aspectRatio={data.asset.value.aspectRatio ?? "16/9"}
                muxPlaybackId={data.asset.value.playbackOptions[0].playbackId}
              />
            )}
        </AspectRatio>
        <Link
          className="flex flex-col items-center gap-2 text-white absolute bottom-6 left-1/2 -translate-x-1/2"
          href="#content"
        >
          <h2 className="uppercase tracking-widest !text-base !mb-0 font-normal">{data.arrowText ?? "See More"}</h2>
          <ChevronDown className="stroke-1" />
        </Link>
      </div>
      <div className="relative bg-dg-background z-10 overflow-hidden">
        <main className="flex flex-col" id="content">
          <SectionRenderer content={data?.content} />
        </main>
      </div>
    </>
  );
}
