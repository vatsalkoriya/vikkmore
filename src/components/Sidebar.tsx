import { Home, Search, Heart, Plus, Settings, Import, Music } from "lucide-react";
import { getPlaylists, type Playlist } from "@/lib/storage";
import { useState, useEffect } from "react";
import ImportPlaylistModal from "@/components/ImportPlaylistModal";
import CreatePlaylistModal from "@/components/CreatePlaylistModal";

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string, playlistId?: string) => void;
}

const Sidebar = ({ activeView, onNavigate }: SidebarProps) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [showImport, setShowImport] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const refresh = () => setPlaylists(getPlaylists());
  useEffect(refresh, [activeView]);

  const handleImported = (playlistId: string) => {
    refresh();
    onNavigate("playlist", playlistId);
  };

  const handleCreated = (playlistId: string) => {
    refresh();
    onNavigate("playlist", playlistId);
  };

  return (
    <>
      <aside className="w-64 bg-sidebar flex flex-col h-full shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">♪</span>
            </div>
            vikkmore
          </h1>
        </div>

        <nav className="px-3 space-y-1">
          <SidebarItem icon={Home} label="Home" active={activeView === "home"} onClick={() => onNavigate("home")} />
          <SidebarItem icon={Search} label="Search" active={activeView === "search"} onClick={() => onNavigate("search")} />
          <SidebarItem icon={Settings} label="API Settings" active={activeView === "settings"} onClick={() => onNavigate("settings")} />
        </nav>

        <div className="mt-6 px-3 flex-1 overflow-y-auto scrollbar-thin">
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Library</span>
            <div className="flex items-center gap-1">
              <button onClick={() => setShowImport(true)} className="text-muted-foreground hover:text-foreground transition-colors p-1" title="Import YouTube Playlist">
                <Import className="w-4 h-4" />
              </button>
              <button onClick={() => setShowCreate(true)} className="text-muted-foreground hover:text-foreground transition-colors p-1" title="Create Playlist">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <SidebarItem icon={Heart} label="Liked Songs" active={activeView === "liked"} onClick={() => onNavigate("liked")} />
            {playlists.map((pl) => (
              <button
                key={pl.id}
                onClick={() => onNavigate("playlist", pl.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm truncate transition-colors flex items-center gap-2 ${
                  activeView === `playlist-${pl.id}` ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <Music className="w-4 h-4 shrink-0 text-muted-foreground" />
                <span className="truncate">{pl.name}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <ImportPlaylistModal open={showImport} onClose={() => setShowImport(false)} onImported={handleImported} />
      <CreatePlaylistModal open={showCreate} onClose={() => setShowCreate(false)} onCreated={handleCreated} />
    </>
  );
};

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any; label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
      active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50"
    }`}
  >
    <Icon className="w-5 h-5 shrink-0" />
    {label}
  </button>
);

export default Sidebar;
