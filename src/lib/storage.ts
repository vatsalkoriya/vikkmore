export interface Song {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  duration?: string;
}

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
  createdAt: number;
}

const LIKED_KEY = "spotify-clone-liked";
const PLAYLISTS_KEY = "spotify-clone-playlists";
const RECENT_KEY = "spotify-clone-recent";
const API_KEY_KEY = "spotify-clone-api-key";

export const getLikedSongs = (): Song[] => {
  try { return JSON.parse(localStorage.getItem(LIKED_KEY) || "[]"); } catch { return []; }
};

export const toggleLike = (song: Song): boolean => {
  const liked = getLikedSongs();
  const idx = liked.findIndex((s) => s.id === song.id);
  if (idx >= 0) { liked.splice(idx, 1); localStorage.setItem(LIKED_KEY, JSON.stringify(liked)); return false; }
  liked.unshift(song);
  localStorage.setItem(LIKED_KEY, JSON.stringify(liked));
  return true;
};

export const isLiked = (id: string): boolean => getLikedSongs().some((s) => s.id === id);

export const getPlaylists = (): Playlist[] => {
  try { return JSON.parse(localStorage.getItem(PLAYLISTS_KEY) || "[]"); } catch { return []; }
};

export const createPlaylist = (name: string): Playlist => {
  const playlists = getPlaylists();
  const pl: Playlist = { id: crypto.randomUUID(), name, songs: [], createdAt: Date.now() };
  playlists.push(pl);
  localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists));
  return pl;
};

export const addToPlaylist = (playlistId: string, song: Song) => {
  const playlists = getPlaylists();
  const pl = playlists.find((p) => p.id === playlistId);
  if (pl && !pl.songs.some((s) => s.id === song.id)) {
    pl.songs.push(song);
    localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists));
  }
};

export const removeFromPlaylist = (playlistId: string, songId: string) => {
  const playlists = getPlaylists();
  const pl = playlists.find((p) => p.id === playlistId);
  if (pl) {
    pl.songs = pl.songs.filter((s) => s.id !== songId);
    localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists));
  }
};

export const deletePlaylist = (playlistId: string) => {
  const playlists = getPlaylists().filter((p) => p.id !== playlistId);
  localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists));
};

export const getRecentSongs = (): Song[] => {
  try { return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]"); } catch { return []; }
};

export const addToRecent = (song: Song) => {
  let recent = getRecentSongs().filter((s) => s.id !== song.id);
  recent.unshift(song);
  recent = recent.slice(0, 30);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
};

export const getApiKey = (): string => localStorage.getItem(API_KEY_KEY) || "";
export const setApiKey = (key: string) => localStorage.setItem(API_KEY_KEY, key);
