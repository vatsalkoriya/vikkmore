import { useState } from "react";
import { X } from "lucide-react";
import { createPlaylist } from "@/lib/storage";

interface CreatePlaylistModalProps {
  open: boolean;
  onClose: () => void;
  onCreated: (playlistId: string) => void;
}

const CreatePlaylistModal = ({ open, onClose, onCreated }: CreatePlaylistModalProps) => {
  const [name, setName] = useState("");

  if (!open) return null;

  const handleCreate = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const pl = createPlaylist(trimmed);
    setName("");
    onCreated(pl.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card border border-border rounded-xl p-6 w-full max-w-sm shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-card-foreground">Create Playlist</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Playlist name"
          autoFocus
          className="w-full px-4 py-2.5 bg-secondary text-secondary-foreground rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground mb-4"
          onKeyDown={(e) => e.key === "Enter" && handleCreate()}
        />

        <button
          onClick={handleCreate}
          disabled={!name.trim()}
          className="w-full py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
