"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SCRIPT =
  "Welcome to Ruth Digital. We help Kenyan brands grow online through social media management, content creation, paid ads, and monthly performance reporting. From restaurants to real estate, we have helped businesses across Nairobi build real audiences and real revenue. Book a free 30-minute strategy call and let us show you what is possible for your brand.";

type VoiceState = "idle" | "speaking" | "finished" | "muted";

/**
 * Site voice tour. Fixed bottom left, 24px from the edges, 56 by 56,
 * circular, z-index 9998. Never autoplays before the user interacts: the
 * first scroll or click on the page starts it.
 */
export default function VoiceTour() {
  const [state, setState] = useState<VoiceState>("idle");
  const [supported, setSupported] = useState(true);
  const hasStartedRef = useRef(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      setSupported(false);
    }
  }, []);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(SCRIPT);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.lang = "en-KE";
    utterance.volume = 1;

    utterance.onstart = () => setState("speaking");
    utterance.onend = () => setState("finished");
    utterance.onerror = () => setState("finished");

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setState("muted");
  }, []);

  useEffect(() => {
    if (!supported) return;

    const startOnce = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      speak();
    };

    const onScroll = () => startOnce();
    const onClick = () => startOnce();

    window.addEventListener("scroll", onScroll, { passive: true, once: true });
    window.addEventListener("pointerdown", onClick, { once: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onClick);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [speak, supported]);

  if (!supported) return null;

  const isSpeaking = state === "speaking";
  const label =
    state === "finished"
      ? "Replay tour"
      : isSpeaking
        ? "Site voice tour, click to mute"
        : "Hear what this site is about";

  const handleClick = () => {
    if (isSpeaking) {
      stop();
      return;
    }
    hasStartedRef.current = true;
    speak();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rd-float rd-float--voice${isSpeaking ? " is-speaking" : ""}`}
      aria-label={label}
      aria-pressed={isSpeaking}
    >
      <span className="rd-float__ring" aria-hidden="true" />
      {isSpeaking || state === "muted" ? (
        <VolumeX size={24} strokeWidth={2.1} aria-hidden="true" />
      ) : (
        <Volume2 size={24} strokeWidth={2.1} aria-hidden="true" />
      )}
      <span className="rd-float__tooltip" role="tooltip">
        {label}
      </span>
    </button>
  );
}
