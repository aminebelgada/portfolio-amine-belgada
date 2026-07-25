import { useEffect, useState } from "react";

/**
 * Cycles through a list of strings with a typewriter effect.
 */
export default function TypingEffect({ words, typingSpeed = 70, pause = 1600, className = "" }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle animate-pulse-slow" />
    </span>
  );
}
