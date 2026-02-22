import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { getLikedSongs, type Song } from "@/lib/storage";
import SongRow from "@/components/SongRow";

const LikedView = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  const refresh = () => setSongs(getLikedSongs());
  useEffect(refresh, []);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin">
      <div className="bg-gradient-to-b from-primary/30 to-transparent p-8 pb-6">
        <div className="flex items-end gap-6">
          <div className="w-48 h-48 bg-gradient-to-br from-primary/60 to-primary/20 rounded-md flex items-center justify-center shadow-2xl">
            <Heart className="w-20 h-20 text-foreground fill-foreground" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Playlist</p>
            <h1 className="text-5xl font-extrabold text-foreground mt-2">Liked Songs</h1>
            <p className="text-sm text-muted-foreground mt-3">{songs.length} songs</p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-1">
        {songs.length === 0 ? (
          <p className="text-center text-muted-foreground mt-10">Songs you like will appear here</p>
        ) : (
          songs.map((song, i) => (
            <SongRow key={song.id} song={song} index={i} queue={songs} onLikeChange={refresh} />
          ))
        )}
      </div>
    </div>
  );
};

export default LikedView;
