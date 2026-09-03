import { doctor } from "../data/practice.js";

/**
 * The hero portrait, served as WebP with a JPEG fallback.
 *
 * The original poonam.png was 1.19 MB and was the largest element painted on the
 * homepage — on Mumbai mobile data that is the single slowest thing about the site,
 * and load speed is a ranking factor. The WebP is 58 KB.
 */
export default function DoctorPortrait({ className = "", width = 822, height = 1100, priority = false }) {
  return (
    <picture>
      <source srcSet="/poonam.webp" type="image/webp" />
      <img
        src="/poonam.jpg"
        alt={`${doctor.name}, ${doctor.jobTitle} in Mumbai`}
        width={width}
        height={height}
        {...(priority ? { fetchPriority: "high" } : { loading: "lazy" })}
        className={className}
      />
    </picture>
  );
}
