import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart } from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";
import { isLiked, toggleLike } from "@/lib/storage";
import { useState, useEffect } from "react";

const PlayerBar = () => {
  const { currentSong, isPlaying, togglePlay, nextSong, prevSong, volume, setVolume, progress, duration, seekTo } = usePlayer();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (currentSong) setLiked(isLiked(currentSong.id));
  }, [currentSong?.id]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, "0")}`;
  };

  if (!currentSong) {
    return (
      <div className="h-20 bg-player border-t border-border flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Select a song to start playing</p>
      </div>
    );
  }

  return (
    <div className="h-20 bg-player border-t border-border flex items-center px-4 gap-4">
      {/* Song info */}
      <div className="flex items-center gap-3 w-[280px] min-w-0">
        <img src={currentSong.thumbnail} alt="" className="w-14 h-14 rounded shadow" />
        <div className="min-w-0">
          <p className="text-sm font-medium text-player-foreground truncate">{currentSong.title}</p>
          <p className="text-xs text-muted-foreground truncate">{currentSong.artist}</p>
        </div>
        <button onClick={() => { toggleLike(currentSong); setLiked(!liked); }}>
          <Heart className={`w-4 h-4 shrink-0 ${liked ? "fill-primary text-primary" : "text-muted-foreground hover:text-foreground"}`} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex-1 flex flex-col items-center gap-1 max-w-[600px]">
        <div className="flex items-center gap-4">
          <button onClick={prevSong} className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-background" /> : <Play className="w-4 h-4 text-background ml-0.5" />}
          </button>
          <button onClick={nextSong} className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-muted-foreground w-10 text-right">{formatTime(progress)}</span>
          <div className="flex-1 h-1 bg-muted rounded-full group cursor-pointer relative" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            seekTo(pct * duration);
          }}>
            <div className="h-full bg-foreground rounded-full group-hover:bg-primary transition-colors" style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }} />
          </div>
          <span className="text-xs text-muted-foreground w-10">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 w-[160px] justify-end">
        <button onClick={() => setVolume(volume === 0 ? 80 : 0)} className="text-muted-foreground hover:text-foreground">
          {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <div className="w-24 h-1 bg-muted rounded-full cursor-pointer" onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setVolume(Math.round(((e.clientX - rect.left) / rect.width) * 100));
        }}>
          <div className="h-full bg-foreground rounded-full hover:bg-primary transition-colors" style={{ width: `${volume}%` }} />
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
