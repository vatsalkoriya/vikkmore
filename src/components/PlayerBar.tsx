import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Heart,
} from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";
import { isLiked, toggleLike, subscribeToLibraryChanges } from "@/lib/storage";
import { useState, useEffect } from "react";

const PlayerBar = () => {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    nextSong,
    prevSong,
    volume,
    setVolume,
    progress,
    duration,
    seekTo,
  } = usePlayer();

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    let mounted = true;

    const refresh = async () => {
      if (!currentSong) {
        if (mounted) setLiked(false);
        return;
      }

      const nextLiked = await isLiked(currentSong.id);
      if (mounted) setLiked(nextLiked);
    };

    void refresh();
    const unsubscribe = subscribeToLibraryChanges(() => {
      void refresh();
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [currentSong?.id]);

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  if (!currentSong) return null;

  const progressPercent = duration ? (progress / duration) * 100 : 0;

  const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

  const handleSeek = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX =
      "touches" in e ? e.touches[0].clientX : e.clientX;

    const pct = clamp((clientX - rect.left) / rect.width, 0, 1);
    seekTo(pct * duration);
  };

  const handleVolume = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    setVolume(Math.round(pct * 100));
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 z-50 pb-[env(safe-area-inset-bottom)]">

      {/* ===== SEEK BAR ===== */}
      <div
        onClick={handleSeek}
        className="w-full h-6 flex items-center cursor-pointer group"
      >
        <div className="w-full h-1.5 bg-white/10 relative">
          <div
            className="h-full bg-primary transition-all duration-150 relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg scale-100 md:scale-0 md:group-hover:scale-100 transition-transform" />
          </div>
        </div>
      </div>

      {/* ===== MAIN PLAYER CONTENT ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-3">

        {/* LEFT: SONG INFO */}
        <div className="flex items-center gap-3 w-full md:w-[280px] min-w-0">
          <img
            src={currentSong.thumbnail}
            alt={currentSong.title}
            className="w-12 h-12 rounded-md object-cover flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              {currentSong.title}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {currentSong.artist}
            </p>
          </div>

          <button
            onClick={() => {
              void toggleLike(currentSong).then(setLiked);
            }}
            className="p-2 hover:scale-110 active:scale-90 transition"
          >
            <Heart
              className={`w-5 h-5 transition ${
                liked
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        </div>

        {/* CENTER: CONTROLS */}
        <div className="flex flex-col items-center flex-1 gap-1">

          <div className="flex items-center gap-8 md:gap-6">
            <button
              onClick={prevSong}
              className="text-white/80 hover:text-primary active:scale-90 transition"
            >
              <SkipBack className="w-6 h-6 md:w-5 md:h-5 fill-current" />
            </button>

            <button
              onClick={togglePlay}
              className="w-12 h-12 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 md:w-5 md:h-5 text-black" />
              ) : (
                <Play className="w-6 h-6 md:w-5 md:h-5 text-black ml-1" />
              )}
            </button>

            <button
              onClick={nextSong}
              className="text-white/80 hover:text-primary active:scale-90 transition"
            >
              <SkipForward className="w-6 h-6 md:w-5 md:h-5 fill-current" />
            </button>
          </div>

          {/* TIME */}
          <div className="flex items-center justify-between w-full max-w-[220px] md:max-w-md">
            <span className="text-[11px] tabular-nums text-muted-foreground">
              {formatTime(progress)}
            </span>
            <span className="text-[11px] tabular-nums text-muted-foreground">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* RIGHT: VOLUME (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3 w-[220px] justify-end">
          <button
            onClick={() => setVolume(volume === 0 ? 80 : 0)}
            className="text-muted-foreground hover:text-white transition"
          >
            {volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          <div
            onClick={handleVolume}
            className="w-28 h-1 bg-white/10 rounded-full cursor-pointer group"
          >
            <div
              className="h-full bg-white group-hover:bg-primary rounded-full transition"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
