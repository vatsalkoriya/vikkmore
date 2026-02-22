import { useState } from "react";
import { PlayerProvider } from "@/context/PlayerContext";
import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";
import YouTubePlayer from "@/components/YouTubePlayer";
import HomeView from "@/views/HomeView";
import SearchView from "@/views/SearchView";
import LikedView from "@/views/LikedView";
import PlaylistView from "@/views/PlaylistView";
import SettingsView from "@/views/SettingsView";

const Index = () => {
  const [activeView, setActiveView] = useState("home");
  const [playlistId, setPlaylistId] = useState("");

  const handleNavigate = (view: string, plId?: string) => {
    if (view === "playlist" && plId) {
      setActiveView(`playlist-${plId}`);
      setPlaylistId(plId);
    } else {
      setActiveView(view);
    }
  };

  const renderView = () => {
    if (activeView.startsWith("playlist-")) return <PlaylistView playlistId={playlistId} onNavigate={handleNavigate} />;
    switch (activeView) {
      case "search": return <SearchView />;
      case "liked": return <LikedView />;
      case "settings": return <SettingsView />;
      default: return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <PlayerProvider>
      <div className="h-screen flex flex-col bg-background">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeView={activeView} onNavigate={handleNavigate} />
          <main className="flex-1 overflow-hidden bg-gradient-to-b from-secondary/30 to-background rounded-tl-lg">
            {renderView()}
          </main>
        </div>
        <PlayerBar />
        <YouTubePlayer />
      </div>
    </PlayerProvider>
  );
};

export default Index;
