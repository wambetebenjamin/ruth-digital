"use client";

import { useEffect, useState } from "react";

/**
 * Loading screen reproduced from the uploaded template.
 * Template source, index.html plus css/style.css and js/custom.js:
 *   <div class="loader_bg"><div class="loader"><img src="images/loading.gif" /></div></div>
 *   .loader_bg  white full screen, z-index 9999999
 *   .loader     flex centred
 *   .loader img width 280px
 *   setTimeout(function () { $('.loader_bg').fadeToggle(); }, 1500);
 * The GIF, the white background, the centred 280px spinner and the 1.5 second
 * dismissal are all kept exactly as the template does them.
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFading(true), 1150);
    const removeTimer = window.setTimeout(() => setVisible(false), 1500);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="rd-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Ruth Digital"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 350ms ease-out",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/loading.gif"
        alt=""
        width={280}
        height={280}
        style={{ width: 280, height: 280 }}
      />
      <span className="rd-visually-hidden">Loading, please wait.</span>
    </div>
  );
}
