import { useState } from "react";
import { Import, X, Loader2, Link } from "lucide-react";
import { importYouTubePlaylist } from "@/lib/youtube";
import { createPlaylist, addToPlaylist, getPlaylists } from "@/lib/storage";

interface ImportPlaylistModalProps {
  open: boolean;
  onClose: () => void;
  onImported: (playlistId: string) => void;
}

const ImportPlaylistModal = ({ open, onClose, onImported }: ImportPlaylistModalProps) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleImport = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    try {
      const { name, songs } = await importYouTubePlaylist(url);
      const pl = createPlaylist(name);
      for (const song of songs) {
        addToPlaylist(pl.id, song);
      }
      setUrl("");
      onImported(pl.id);
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to import playlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card border border-border rounded-xl p-6 w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-card-foreground flex items-center gap-2">
            <Import className="w-5 h-5 text-primary" />
            Import YouTube Playlist
          </h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Paste a YouTube playlist URL or playlist ID to import all songs.
        </p>

        <div className="relative mb-4">
          <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtube.com/playlist?list=PLxx... or playlist ID"
            className="w-full pl-10 pr-4 py-2.5 bg-secondary text-secondary-foreground rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
            onKeyDown={(e) => e.key === "Enter" && handleImport()}
          />
        </div>

        {error && <p className="text-sm text-destructive mb-3">{error}</p>}

        <button
          onClick={handleImport}
          disabled={loading || !url.trim()}
          className="w-full py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Importing...
            </>
          ) : (
            "Import Playlist"
          )}
        </button>
      </div>
    </div>
  );
};

export default ImportPlaylistModal;
