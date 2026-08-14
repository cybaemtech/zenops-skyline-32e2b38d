import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import audioAsset from "@/assets/home-ambient.mp3.asset.json";

export function BackgroundAudio() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = 0.35;

    const tryPlay = () => {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };

    tryPlay();

    const onInteract = () => {
      if (el.paused) tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      el.pause();
    };
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={ref} src={audioAsset.url} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Mute background audio" : "Play background audio"}
        className="fixed bottom-5 right-5 z-50 inline-flex size-11 items-center justify-center rounded-full border border-primary/30 bg-card/90 text-primary shadow-elevated backdrop-blur transition-colors hover:bg-accent"
      >
        {playing ? <Volume2 className="size-5" aria-hidden="true" /> : <VolumeX className="size-5" aria-hidden="true" />}
      </button>
    </>
  );
}
