"use client";

import Link from "next/link";
import { useCallback } from "react";

/**
 * A simple navigation bar for the portfolio.
 *
 * Each navigation link plays a short beep using the Web Audio API on click.
 * This avoids bundling any external audio files while still providing
 * responsive feedback.
 */
export default function NavBar() {
  /**
   * Play a short beep sound using Web Audio API. We intentionally keep
   * the duration brief and the frequency inoffensive to avoid startling
   * users.
   */
  const playBeep = useCallback(() => {
    // Older browsers expose webkitAudioContext; casting to unknown avoids eslint
    // complaints about using the `any` type.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
    const audioCtx = new AudioCtx();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = "sine";
    oscillator.frequency.value = 600; // mid‑tone
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.15);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-4 py-2 px-4 bg-[var(--accent)]/80 dark:bg-[var(--accent)]/80 backdrop-blur border-b border-[var(--border)]">
      {links.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          onClick={playBeep}
          className="font-mono text-sm md:text-base px-3 py-1 border-2 border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] rounded shadow-sm hover:bg-[var(--accent)]/60 active:scale-95 transition"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}