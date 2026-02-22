import { useEffect, useRef, useCallback } from "react";
import { usePlayer } from "@/context/PlayerContext";

declare global {
  interface Window { onYouTubeIframeAPIReady?: () => void; YT?: any; }
}

const YouTubePlayer = () => {
  const { currentSong, volume, playerRef, nextSong, isPlaying } = usePlayer();
  const containerRef = useRef<HTMLDivElement>(null);
  const apiLoaded = useRef(false);
  const playerReady = useRef(false);

  const initPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current) return;
    playerRef.current = new window.YT.Player(containerRef.current, {
      height: "0",
      width: "0",
      playerVars: { autoplay: 1, controls: 0, disablekb: 1, fs: 0, modestbranding: 1 },
      events: {
        onReady: () => {
          playerReady.current = true;
          playerRef.current?.setVolume(volume);
          if (currentSong) playerRef.current?.loadVideoById(currentSong.id);
        },
        onStateChange: (e: any) => {
          if (e.data === window.YT.PlayerState.ENDED) nextSong();
        },
      },
    });
  }, []);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      apiLoaded.current = true;
      initPlayer();
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => {
      apiLoaded.current = true;
      initPlayer();
    };
  }, [initPlayer]);

  useEffect(() => {
    if (!currentSong || !playerRef.current || !playerReady.current) return;
    playerRef.current.loadVideoById(currentSong.id);
  }, [currentSong?.id]);

  useEffect(() => {
    playerRef.current?.setVolume?.(volume);
  }, [volume]);

  return <div ref={containerRef} className="absolute w-0 h-0 overflow-hidden" />;
};

export default YouTubePlayer;
