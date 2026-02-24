import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Music2, X } from "lucide-react";

// Context & Providers
import { PlayerProvider } from "@/context/PlayerContext";

// Components & Views
import Sidebar from "./components/Sidebar";
import HomeView from "./views/HomeView";
import SearchView from "./views/SearchView";
import SettingsView from "./views/SettingsView";
import PlaylistView from "./views/PlaylistView";
import LikedView from "./views/LikedView";
import Player from "./components/PlayerBar"; 
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("home");
  const [activePlaylistId, setActivePlaylistId] = useState<string | null>(null);

  // Centralized navigation logic
  const handleNavigate = (view: string, id?: string) => {
    if (id) {
      // Handles playlist-specific navigation
      setActivePlaylistId(id);
      setActiveView(`playlist-${id}`);
    } else {
      setActiveView(view);
      setActivePlaylistId(null);
    }
    // Always close the top-middle menu on mobile after selection
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden flex-col">
      {/* TOP NAVBAR (Logo Trigger) */}
      <header className="h-16 flex items-center justify-between px-6 bg-black border-b border-white/10 z-[60] shrink-0">
        <div className="w-10" /> 
        
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center gap-2 group active:scale-95 transition-transform"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isSidebarOpen ? 'bg-white text-black' : 'bg-primary text-primary-foreground'}`}>
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Music2 className="w-5 h-5" />}
          </div>
          <span className="font-bold text-xl tracking-tighter">vikkmore</span>
        </button>

        <div className="w-10 flex justify-end" />
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* SIDEBAR (Top-down Drawer on mobile) */}
        <Sidebar 
          activeView={activeView} 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          onNavigate={handleNavigate} 
        />

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto bg-background relative pb-24 md:pb-0">
          {activeView === "home" && (
            <HomeView onNavigate={handleNavigate} />
          )}

          {activeView === "search" && (
            <SearchView />
          )}

          {activeView === "settings" && (
            <SettingsView />
          )}

          {activeView === "liked" && (
            <LikedView />
          )}

          {/* Logic for Playlists */}
          {activeView.startsWith("playlist-") && activePlaylistId && (
            <PlaylistView 
              playlistId={activePlaylistId} 
              onNavigate={handleNavigate} 
            />
          )}
          
          {/* Overlay for mobile when menu is open */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </main>
      </div>

      {/* PLAYER UI - Fixed at the bottom */}
      <Player />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PlayerProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PlayerProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;