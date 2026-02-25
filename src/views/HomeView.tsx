import { useEffect, useState } from "react";
import { getTrendingMusic } from "@/lib/youtube";
import { getRecentSongs, getApiKey, type Song } from "@/lib/storage";
import SongCard from "@/components/SongCard";
import SongRow from "@/components/SongRow";
import PageSEO from "@/components/SEO/PageSEO";

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

const HomeView = ({ onNavigate }: HomeViewProps) => {
  const [trending, setTrending] = useState<Song[]>([]);
  const [recent, setRecent] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);
  const hasKey = !!getApiKey();

  useEffect(() => {
    setRecent(getRecentSongs());
    if (hasKey) {
      setLoading(true);
      getTrendingMusic().then(setTrending).finally(() => setLoading(false));
    }
  }, [hasKey]);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  };

  if (!hasKey) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 md:p-8">
        <div className="text-center space-y-4 max-w-md">
          <PageSEO 
            title="Vikkmore - Free YouTube Music Player & Playlist Manager"
            description="Vikkmore is the best free YouTube music player with playlist management. Stream millions of songs, create custom playlists, and enjoy ad-free music experience. No downloads required."
            keywords="vikkmore, youtube music player, free music streaming, playlist manager, online music player, youtube audio, music streaming service, create playlists, music library"
          />
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl">🎵</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">Welcome to vikkmore</h2>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            To get started, add your YouTube Data API key in settings.
          </p>
          <button
            onClick={() => onNavigate("settings")}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold active:scale-95 md:hover:scale-105 transition-transform"
          >
            Go to Settings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6 md:space-y-8 overflow-y-auto scrollbar-thin h-full pb-24 md:pb-6">
      <PageSEO 
        title="Vikkmore - Free YouTube Music Player & Playlist Manager"
        description="Vikkmore is the best free YouTube music player with playlist management. Stream millions of songs, create custom playlists, and enjoy ad-free music experience. No downloads required."
        keywords="vikkmore, youtube music player, free music streaming, playlist manager, online music player, youtube audio, music streaming service, create playlists, music library"
      />
      
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">{greeting()}</h1>

      {recent.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">Recently Played</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {recent.slice(0, 10).map((song) => (
              <SongCard key={song.id} song={song} queue={recent} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">Trending Music</h2>
        {loading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-14 bg-card animate-pulse rounded-md" />
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {trending.map((song, i) => (
              <SongRow key={song.id} song={song} index={i} queue={trending} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomeView;