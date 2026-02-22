import { Play, Heart, MoreHorizontal, Plus } from "lucide-react";
import type { Song } from "@/lib/storage";
import { isLiked, toggleLike, getPlaylists, addToPlaylist } from "@/lib/storage";
import { usePlayer } from "@/context/PlayerContext";
import { useState } from "react";

interface SongRowProps {
  song: Song;
  index: number;
  queue?: Song[];
  onLikeChange?: () => void;
}

const SongRow = ({ song, index, queue, onLikeChange }: SongRowProps) => {
  const { playSong, currentSong } = usePlayer();
  const [liked, setLiked] = useState(isLiked(song.id));
  const [showMenu, setShowMenu] = useState(false);
  const isActive = currentSong?.id === song.id;

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = toggleLike(song);
    setLiked(newState);
    onLikeChange?.();
  };

  return (
    <div
      onClick={() => playSong(song, queue)}
      className={`group flex items-center gap-4 px-4 py-2.5 rounded-md cursor-pointer transition-colors ${
        isActive ? "bg-accent" : "hover:bg-accent/50"
      }`}
    >
      <div className="w-8 text-center">
        <span className="group-hover:hidden text-sm text-muted-foreground">{index + 1}</span>
        <Play className="w-4 h-4 hidden group-hover:block mx-auto text-foreground" />
      </div>

      <img src={song.thumbnail} alt="" className="w-10 h-10 rounded object-cover" />

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${isActive ? "text-primary" : "text-foreground"}`}>{song.title}</p>
        <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
      </div>

      <button onClick={handleLike} className="opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className={`w-4 h-4 ${liked ? "fill-primary text-primary" : "text-muted-foreground hover:text-foreground"}`} />
      </button>

      <span className="text-xs text-muted-foreground w-12 text-right">{song.duration}</span>

      <div className="relative">
        <button
          onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {showMenu && (
          <div className="absolute right-0 top-6 z-50 bg-popover border border-border rounded-md shadow-lg py-1 min-w-[160px]"
            onMouseLeave={() => setShowMenu(false)}>
            {getPlaylists().map((pl) => (
              <button
                key={pl.id}
                onClick={(e) => { e.stopPropagation(); addToPlaylist(pl.id, song); setShowMenu(false); }}
                className="w-full text-left px-3 py-2 text-sm text-popover-foreground hover:bg-accent flex items-center gap-2"
              >
                <Plus className="w-3 h-3" /> {pl.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SongRow;
