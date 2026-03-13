import { useState } from "react";
import { Search } from "lucide-react";
import {
  searchYouTube,
  searchYouTubePlaylists,
  searchYouTubeAlbums,
  searchYouTubeChannels,
  searchYouTubeChannelSongs,
  searchYouTubeChannelPlaylists,
  getYouTubePlaylistSongs,
} from "@/lib/youtube";
import type { Song } from "@/lib/storage";
import SongRow from "@/components/SongRow";
import PageSEO from "@/components/SEO/PageSEO";
import type { PlaylistResult, ArtistResult, AlbumResult } from "@/lib/youtube";

const SearchView = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Song[]>([]);
  const [playlists, setPlaylists] = useState<PlaylistResult[]>([]);
  const [albums, setAlbums] = useState<AlbumResult[]>([]);
  const [artists, setArtists] = useState<ArtistResult[]>([]);
  const [artistSongs, setArtistSongs] = useState<Song[]>([]);
  const [artistPlaylists, setArtistPlaylists] = useState<PlaylistResult[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<ArtistResult | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<{
    type: "playlist" | "album";
    item: PlaylistResult | AlbumResult;
  } | null>(null);
  const [collectionSongs, setCollectionSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"songs" | "playlists" | "artists" | "albums">("songs");
  const [lastQuery, setLastQuery] = useState("");

  const fetchTabResults = async (tab: "songs" | "playlists" | "artists" | "albums", q: string) => {
    setLoading(true);
    try {
      if (tab === "songs") {
        const songs = await searchYouTube(q);
        setResults(songs);
      }
      if (tab === "playlists") {
        const list = await searchYouTubePlaylists(q);
        setPlaylists(list);
        setSelectedCollection(null);
        setCollectionSongs([]);
      }
      if (tab === "albums") {
        const list = await searchYouTubeAlbums(q);
        setAlbums(list);
        setSelectedCollection(null);
        setCollectionSongs([]);
      }
      if (tab === "artists") {
        const list = await searchYouTubeChannels(q);
        setArtists(list);
        setSelectedArtist(null);
        setArtistSongs([]);
        setArtistPlaylists([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setLastQuery(q);
    await fetchTabResults(activeTab, q);
  };

  const handleTabChange = async (tab: "songs" | "playlists" | "artists" | "albums") => {
    setActiveTab(tab);
    if (lastQuery) {
      await fetchTabResults(tab, lastQuery);
    }
  };

  const handleArtistSelect = async (artist: ArtistResult) => {
    setSelectedArtist(artist);
    setSelectedCollection(null);
    setCollectionSongs([]);
    setLoading(true);
    try {
      const [songs, lists] = await Promise.all([
        searchYouTubeChannelSongs(artist.id, artist.name),
        searchYouTubeChannelPlaylists(artist.id),
      ]);
      setArtistSongs(songs);
      setArtistPlaylists(lists);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCollectionSelect = async (type: "playlist" | "album", item: PlaylistResult | AlbumResult) => {
    setSelectedCollection({ type, item });
    setLoading(true);
    try {
      const data = await getYouTubePlaylistSongs(item.id);
      setCollectionSongs(data.songs);
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

      <div className="flex items-center gap-2 mb-5 overflow-x-auto">
        {[
          { id: "songs", label: "Songs" },
          { id: "playlists", label: "Playlists" },
          { id: "artists", label: "Artists" },
          { id: "albums", label: "Albums" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-14 bg-card animate-pulse rounded-md" />
          ))}
        </div>
      ) : activeTab === "songs" ? (
        results.length > 0 ? (
          <div className="space-y-1">
            {results.map((song, i) => (
              <SongRow key={song.id} song={song} index={i} queue={results} />
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground mt-20">
            <p className="text-lg">Search for songs, artists, or albums</p>
          </div>
        )
      ) : activeTab === "playlists" ? (
        playlists.length > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {playlists.map((pl) => (
                <button
                  key={pl.id}
                  onClick={() => handleCollectionSelect("playlist", pl)}
                  className={`bg-card rounded-lg p-3 hover:bg-accent/60 transition text-left ${
                    selectedCollection?.item.id === pl.id ? "ring-2 ring-primary/60" : ""
                  }`}
                >
                  <img src={pl.thumbnail} alt="" className="w-full aspect-square rounded-md object-cover mb-3" />
                  <p className="text-sm font-semibold text-card-foreground leading-snug">{pl.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pl.channelTitle}</p>
                </button>
              ))}
            </div>

            {selectedCollection?.type === "playlist" && (
              <div>
                <p className="text-lg font-semibold mb-3">{selectedCollection.item.title}</p>
                {collectionSongs.length > 0 ? (
                  <div className="space-y-1">
                    {collectionSongs.map((song, i) => (
                      <SongRow key={song.id} song={song} index={i} queue={collectionSongs} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No songs found.</p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-muted-foreground mt-20">
            <p className="text-lg">Search for playlists</p>
          </div>
        )
      ) : activeTab === "albums" ? (
        albums.length > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {albums.map((album) => (
                <button
                  key={album.id}
                  onClick={() => handleCollectionSelect("album", album)}
                  className={`bg-card rounded-lg p-3 hover:bg-accent/60 transition text-left ${
                    selectedCollection?.item.id === album.id ? "ring-2 ring-primary/60" : ""
                  }`}
                >
                  <img src={album.thumbnail} alt="" className="w-full aspect-square rounded-md object-cover mb-3" />
                  <p className="text-sm font-semibold text-card-foreground leading-snug">{album.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{album.channelTitle}</p>
                </button>
              ))}
            </div>

            {selectedCollection?.type === "album" && (
              <div>
                <p className="text-lg font-semibold mb-3">{selectedCollection.item.title}</p>
                {collectionSongs.length > 0 ? (
                  <div className="space-y-1">
                    {collectionSongs.map((song, i) => (
                      <SongRow key={song.id} song={song} index={i} queue={collectionSongs} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No songs found.</p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-muted-foreground mt-20">
            <p className="text-lg">Search for albums</p>
          </div>
        )
      ) : artists.length > 0 ? (
        <div className="space-y-6">
          <div className="space-y-2">
            {artists.map((artist) => (
              <button
                key={artist.id}
                onClick={() => handleArtistSelect(artist)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left transition ${
                  selectedArtist?.id === artist.id ? "bg-accent" : "hover:bg-accent/50"
                }`}
              >
                <img src={artist.thumbnail} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{artist.name}</p>
                  <p className="text-xs text-muted-foreground">Artist</p>
                </div>
              </button>
            ))}
          </div>

          {selectedArtist && (
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold mb-3">Songs</p>
                {artistSongs.length > 0 ? (
                  <div className="space-y-1">
                    {artistSongs.map((song, i) => (
                      <SongRow key={song.id} song={song} index={i} queue={artistSongs} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No songs found.</p>
                )}
              </div>

              <div>
                <p className="text-lg font-semibold mb-3">Playlists</p>
                {artistPlaylists.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {artistPlaylists.map((pl) => (
                      <div key={pl.id} className="bg-card rounded-lg p-3 hover:bg-accent/60 transition">
                        <img src={pl.thumbnail} alt="" className="w-full aspect-square rounded-md object-cover mb-3" />
                        <p className="text-sm font-semibold text-card-foreground leading-snug">{pl.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{pl.channelTitle}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No playlists found.</p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-muted-foreground mt-20">
          <p className="text-lg">Search for artists</p>
        </div>
      )}
    </div>
  );
};

export default SearchView;
