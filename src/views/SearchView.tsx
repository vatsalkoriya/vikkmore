import { useState } from "react";
import { Search } from "lucide-react";
import { searchYouTube } from "@/lib/youtube";
import type { Song } from "@/lib/storage";
import SongRow from "@/components/SongRow";
import PageSEO from "@/components/SEO/PageSEO";

const SearchView = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const songs = await searchYouTube(query);
      setResults(songs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 h-full overflow-y-auto scrollbar-thin">
      <PageSEO 
        title="Search Music - Vikkmore YouTube Music Player"
        description="Search millions of songs on YouTube with Vikkmore. Find your favorite tracks, artists, and create custom playlists instantly."
        keywords="search music, find songs, youtube search, music discovery, vikkmore search, song finder, artist search"
      />
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            className="w-full pl-12 pr-4 py-3 bg-secondary text-secondary-foreground rounded-full text-sm font-medium placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>
      </form>

      {loading ? (
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-14 bg-card animate-pulse rounded-md" />
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-1">
          {results.map((song, i) => (
            <SongRow key={song.id} song={song} index={i} queue={results} />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground mt-20">
          <p className="text-lg">Search for songs, artists, or albums</p>
        </div>
      )}
    </div>
  );
};

export default SearchView;
