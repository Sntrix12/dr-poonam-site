import { createContext, useContext } from "react";
import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper that knows whether it is being rendered to static HTML.
 *
 * Why this exists: framer-motion's `initial={{opacity: 0}}` is correct in a browser
 * but produces `style="opacity:0"` when rendered to a string at build time. That
 * would hand crawlers a page whose every paragraph is marked invisible — a needless
 * risk on a medical site. During prerendering this renders a plain element with no
 * inline style; in the browser it animates as before.
 */

export const StaticRenderContext = createContext(false);

export const useIsStaticRender = () => useContext(StaticRenderContext);

export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 30,
  className = "",
  ...rest
}) {
  const isStatic = useIsStaticRender();

  if (isStatic) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const Animated = motion[as] ?? motion.div;
  return (
    <Animated
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Animated>
  );
}

export default Reveal;
