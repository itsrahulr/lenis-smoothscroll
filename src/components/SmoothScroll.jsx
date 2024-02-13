"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ child }) {
  return <ReactLenis root>{child}</ReactLenis>;
}
export default SmoothScroll;
