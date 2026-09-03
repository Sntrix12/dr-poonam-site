import { createContext, useContext, useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper that knows whether it is being rendered to static HTML.
 *
 * Two reasons this is hand-rolled rather than using an animation library:
 *
 * 1. Static rendering. A library's `initial={{opacity: 0}}` produces
 *    style="opacity:0" when rendered to a string at build time, which would hand
 *    crawlers a page whose every paragraph is marked invisible. During prerendering
 *    this renders a plain element with no inline style at all.
 *
 * 2. Weight. This was the only remaining use of framer-motion, and the library cost
 *    more than a hundred kilobytes of JavaScript to fade some sections in. Page speed
 *    is a ranking factor and most patients here are on mobile data.
 *
 * Anyone who prefers reduced motion sees content immediately, without animation.
 */

export const StaticRenderContext = createContext(false);

export const useIsStaticRender = () => useContext(StaticRenderContext);

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const isStatic = useIsStaticRender();
  const ref = useRef(null);
  // Starts visible so that if JavaScript never runs, nothing is ever hidden.
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") return;

    // Hide only once we know we can animate it back in.
    setShown(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-60px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (isStatic) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " reveal-shown" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
