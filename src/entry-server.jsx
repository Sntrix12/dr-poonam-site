import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { StaticRenderContext } from "./components/Reveal.jsx";

/**
 * Build-time rendering entry point, used by scripts/prerender.mjs.
 *
 * StaticRenderContext is set to true so scroll-reveal animations render as plain
 * elements rather than emitting style="opacity:0" into the static HTML — crawlers
 * (and the AI crawlers in particular, which do not run JavaScript at all) should
 * receive the text plainly visible.
 */
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRenderContext.Provider value={true}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StaticRenderContext.Provider>
    </StrictMode>,
  );
}
