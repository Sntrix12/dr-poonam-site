import { DECORATIVE_ALT, imageSources } from "../data/images.js";

/**
 * A decorative stock photo.
 *
 * Always alt="" — see the explanation in src/data/images.js. Width and height are
 * required, not optional: without them the browser cannot reserve space and the page
 * shifts as each image arrives, which is a Core Web Vitals penalty.
 */
export default function StockImage({
  src,
  width,
  height,
  className = "",
  priority = false,
}) {
  const { webp, src: resolved } = imageSources(src);

  const img = (
    <img
      src={resolved}
      alt={DECORATIVE_ALT}
      width={width}
      height={height}
      decoding="async"
      {...(priority ? { fetchPriority: "high" } : { loading: "lazy" })}
      className={className}
    />
  );

  if (!webp) return img;

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      {img}
    </picture>
  );
}
