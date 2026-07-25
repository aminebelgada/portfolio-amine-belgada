import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a number from 0 to `end` once the element scrolls into view.
 */
export default function useCountUp(end, duration = 1600) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    let frameId;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration]);

  return { ref, value };
}
