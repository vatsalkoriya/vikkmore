import { useState, useEffect } from "react";
import { Music, Trash2 } from "lucide-react";
import { getPlaylists, deletePlaylist, subscribeToLibraryChanges, type Playlist } from "@/lib/storage";
import SongRow from "@/components/SongRow";

interface PlaylistViewProps {
  playlistId: string;
  onNavigate: (view: string) => void;
}

const PlaylistView = ({ playlistId, onNavigate }: PlaylistViewProps) => {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  useEffect(() => {
    let mounted = true;

    const refresh = async () => {
      const playlists = await getPlaylists();
      const next = playlists.find((item) => item.id === playlistId) || null;
      if (mounted) setPlaylist(next);
    };

    void refresh();
    const unsubscribe = subscribeToLibraryChanges(() => {
      void refresh();
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [playlistId]);

  if (!playlist) return <div className="p-6 text-muted-foreground">Playlist not found</div>;

  return (
    <div className="h-full overflow-y-auto scrollbar-thin">
      <div className="bg-gradient-to-b from-accent/50 to-transparent p-8 pb-6">
        <div className="flex items-end gap-6">
          <div className="w-48 h-48 bg-accent rounded-md flex items-center justify-center shadow-2xl">
            <Music className="w-20 h-20 text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Playlist</p>
            <h1 className="text-5xl font-extrabold text-foreground mt-2">{playlist.name}</h1>
            <p className="text-sm text-muted-foreground mt-3">{playlist.songs.length} songs</p>
            <button
              onClick={() => {
                void deletePlaylist(playlistId);
                onNavigate("home");
              }}
              className="mt-3 flex items-center gap-1.5 text-sm text-destructive hover:text-destructive/80 transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Delete playlist
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-1">
        {playlist.songs.length === 0 ? (
          <p className="text-center text-muted-foreground mt-10">This playlist is empty. Search for songs to add.</p>
        ) : (
          playlist.songs.map((song, i) => (
            <SongRow key={song.id} song={song} index={i} queue={playlist.songs} />
          ))
        )}
      </div>
    </div>
  );
};

export default PlaylistView;
