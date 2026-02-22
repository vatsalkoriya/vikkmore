import { useEffect, useState } from "react";
import { getTrendingMusic } from "@/lib/youtube";
import { getRecentSongs, getApiKey, type Song } from "@/lib/storage";
import SongCard from "@/components/SongCard";
import SongRow from "@/components/SongRow";

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
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl">🎵</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Welcome to vikkmore</h2>
          <p className="text-muted-foreground">To get started, add your YouTube Data API key in settings.</p>
          <button
            onClick={() => onNavigate("settings")}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Go to Settings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8 overflow-y-auto scrollbar-thin h-full">
      <h1 className="text-3xl font-bold text-foreground">{greeting()}</h1>

      {recent.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Recently Played</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {recent.slice(0, 10).map((song) => (
              <SongCard key={song.id} song={song} queue={recent} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">Trending Music</h2>
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
