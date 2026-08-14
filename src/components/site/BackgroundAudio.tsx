import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import homeAudio from "@/assets/home-ambient.mp3.asset.json";

type BackgroundAudioProps = {
  src?: string;
  loop?: boolean;
  volume?: number;
};

export function BackgroundAudio({ src = homeAudio.url, loop = true, volume = 0.35 }: BackgroundAudioProps) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = volume;
    let done = false;

    const tryPlay = () => {
      if (done) return;
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };

    tryPlay();

    const onEnded = () => {
      done = true;
      setPlaying(false);
    };
    el.addEventListener("ended", onEnded);

    const onInteract = () => {
      if (!done && el.paused) tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);

    return () => {
      el.removeEventListener("ended", onEnded);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      el.pause();
    };
  }, [src, volume]);

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
      <audio ref={ref} src={src} loop={loop} preload="auto" />
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
