"use client";

import type { ImageLoader, ImageProps } from "next/image";

import Image from "next/image";

import type { Image as ImageType } from "../payload-types";

import { blurHashToDataURL } from "../utilities/blurhash";

export const imageLoader: (i: ImageType) => ImageLoader =
  (image: ImageType) =>
  ({ width }) => {
    const { sizes, url } = image;
    if (!sizes) return decodeURIComponent(image.url! + "?q=100&w=" + width).replaceAll(" ", "%20");
    const { "extra-large": extraLarge, large, medium, small } = sizes;
    if (width <= 500 && small?.url && small.width)
      return decodeURIComponent(small.url + "?q=100&w=" + width).replaceAll(" ", "%20");
    if (width <= 1500 && medium?.url && medium.width)
      return decodeURIComponent(medium.url + "?q=100&w=" + width).replaceAll(" ", "%20");
    if (width <= 2250 && large?.url && large.width)
      return decodeURIComponent(large.url + "?q=100&w=" + width).replaceAll(" ", "%20");
    if (width <= 3000 && extraLarge?.url && extraLarge.width)
      return decodeURIComponent(extraLarge.url + "?q=100&w=" + width).replaceAll(" ", "%20");
    return decodeURIComponent(url! + "?q=100&w=" + width).replaceAll(" ", "%20");
  };

export function S3Image({ image, imageProps }: { image: ImageType; imageProps: ImageProps }) {
  return (
    <Image
      {...imageProps}
      alt={image.alternativeText}
      blurDataURL={blurHashToDataURL(image.blurhash!)}
      loader={imageLoader(image)}
      placeholder="blur"
      sizes={imageProps.sizes ?? "100vw"}
      style={{
        objectPosition: `${image.focalX ?? 50}% ${image.focalY ?? 50}%`,
      }}
    />
  );
}
