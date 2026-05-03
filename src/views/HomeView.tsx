import { useEffect, useState } from "react";
import { getTrendingMusic } from "@/lib/youtube";
import { getRecentSongs, getApiKey, subscribeToLibraryChanges, type Song } from "@/lib/storage";
import SongCard from "@/components/SongCard";
import SongRow from "@/components/SongRow";
import PlaylistCard from "@/components/PlaylistCard";
import PageSEO from "@/components/SEO/PageSEO";
import { searchYouTube, searchYouTubePlaylists, type PlaylistResult } from "@/lib/youtube";
import { SAMPLE_SONGS } from "@/lib/constants";

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

const HomeView = ({ onNavigate }: HomeViewProps) => {
  const [trending, setTrending] = useState<Song[]>([]);
  const [popularPlaylists, setPopularPlaylists] = useState<PlaylistResult[]>([]);
  const [popularSongs, setPopularSongs] = useState<Song[]>([]);
  const [recent, setRecent] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hasKey, setHasKey] = useState(false);
  const [greetingText, setGreetingText] = useState("");

  useEffect(() => {
    setMounted(true);
    const checkKey = async () => {
      const key = await getApiKey();
      if (mounted) setHasKey(!!key);
    };
    checkKey();

    const h = new Date().getHours();
    if (h < 12) setGreetingText("Good morning");
    else if (h < 18) setGreetingText("Good afternoon");
    else setGreetingText("Good evening");
  }, []);

  useEffect(() => {
    let mounted = true;

    const loadRecent = async () => {
      const nextRecent = await getRecentSongs();
      if (mounted) setRecent(nextRecent);
    };

    void loadRecent();
    const unsubscribe = subscribeToLibraryChanges(() => {
      void loadRecent();
      void (async () => {
        const key = await getApiKey();
        if (mounted) setHasKey(!!key);
      })();
    });

    if (hasKey) {
      setLoading(true);
      Promise.all([
        getTrendingMusic(),
        searchYouTubePlaylists("Music Playlists 2024"),
        searchYouTube("Top Global Songs 2024")
      ]).then(([trendingData, playlistData, popularData]) => {
        if (mounted) {
          setTrending(trendingData);
          setPopularPlaylists(playlistData.slice(0, 10));
          setPopularSongs(popularData.slice(0, 10));
        }
      }).catch(err => {
        console.error("Failed to fetch home content", err);
      }).finally(() => {
        if (mounted) setLoading(false);
      });
    } else {
      setTrending(SAMPLE_SONGS.slice(0, 10));
      setPopularPlaylists([]);
      setPopularSongs([]);
    }

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [hasKey]);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  };

  if (!mounted) {
    return <div className="p-4 md:p-6 space-y-6 md:space-y-8 h-full bg-background" />;
  }

  // We no longer show a blocked screen, we show sample songs instead
  // if (!hasKey) { ... }

  return (
    <div className="p-4 md:p-6 space-y-6 md:space-y-8 overflow-y-auto scrollbar-thin h-full pb-24 md:pb-6">
      <PageSEO 
        title="Vikkmore - Free YouTube Music Player & Playlist Manager"
        description="Vikkmore is the best free YouTube music player with playlist management. Stream millions of songs, create custom playlists, and enjoy ad-free music experience. No downloads required."
        keywords="vikkmore, youtube music player, free music streaming, playlist manager, online music player, youtube audio, music streaming service, create playlists, music library"
      />
      
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">{greetingText}</h1>

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

      {!hasKey && (
        <section>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 mb-8">
            <h2 className="text-lg md:text-xl font-bold text-primary mb-2">Guest Mode</h2>
            <p className="text-sm text-muted-foreground mb-4">
              You're currently in guest mode. Add a YouTube API key in settings to unlock full search and trending features.
            </p>
            <button
              onClick={() => onNavigate("settings")}
              className="text-xs font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Add API Key
            </button>
          </div>
        </section>
      )}

      {!hasKey && (
        <section>
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">Trending Songs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {SAMPLE_SONGS.map((song) => (
              <SongCard key={song.id} song={song} queue={SAMPLE_SONGS} />
            ))}
          </div>
        </section>
      )}

      {hasKey && popularPlaylists.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-foreground">Featured Playlists</h2>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-card animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
              {popularPlaylists.map((playlist) => (
                <PlaylistCard 
                  key={playlist.id} 
                  playlist={playlist} 
                  onClick={(id) => onNavigate(`playlist/${id}`)} 
                />
              ))}
            </div>
          )}
        </section>
      )}

      {hasKey && popularSongs.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-foreground">Popular Songs</h2>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-card animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
              {popularSongs.map((song) => (
                <SongCard key={song.id} song={song} queue={popularSongs} />
              ))}
            </div>
          )}
        </section>
      )}

      <section>
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">Trending Now</h2>
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
