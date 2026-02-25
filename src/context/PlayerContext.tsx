import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import type { Song } from "@/lib/storage";
import { addToRecent } from "@/lib/storage";

interface PlayerState {
  currentSong: Song | null;
  queue: Song[];
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
}

interface PlayerContextType extends PlayerState {
  playSong: (song: Song, queue?: Song[]) => void;
  togglePlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
  setVolume: (v: number) => void;
  seekTo: (seconds: number) => void;
  playerRef: React.MutableRefObject<any>;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be inside PlayerProvider");
  return ctx;
};

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<PlayerState>({
    currentSong: null, queue: [], isPlaying: false, volume: 80, progress: 0, duration: 0,
  });
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);

  const startProgressTracking = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      const p = playerRef.current;
      if (p && typeof p.getCurrentTime === "function") {
        setState((s) => ({
          ...s,
          progress: p.getCurrentTime(),
          duration: p.getDuration?.() || s.duration,
        }));
      }
    }, 500);
  }, []);

  const playSong = useCallback((song: Song, queue?: Song[]) => {
    addToRecent(song);
    setState((s) => ({
      ...s,
      currentSong: song,
      queue: queue || s.queue,
      isPlaying: true,
      progress: 0,
    }));
  }, []);

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    setState((s) => {
      if (s.isPlaying) {
        p.pauseVideo?.();
      } else {
        p.playVideo?.();
      }
      return { ...s, isPlaying: !s.isPlaying };
    });
  }, []);

  const nextSong = useCallback(() => {
    setState((s) => {
      if (!s.currentSong || s.queue.length === 0) return s;
      const idx = s.queue.findIndex((q) => q.id === s.currentSong!.id);
      const next = s.queue[(idx + 1) % s.queue.length];
      if (next) addToRecent(next);
      return { ...s, currentSong: next, isPlaying: true, progress: 0 };
    });
  }, []);

  const prevSong = useCallback(() => {
    setState((s) => {
      if (!s.currentSong || s.queue.length === 0) return s;
      const idx = s.queue.findIndex((q) => q.id === s.currentSong!.id);
      const prev = s.queue[(idx - 1 + s.queue.length) % s.queue.length];
      if (prev) addToRecent(prev);
      return { ...s, currentSong: prev, isPlaying: true, progress: 0 };
    });
  }, []);

  const setVolume = useCallback((v: number) => {
    playerRef.current?.setVolume?.(v);
    setState((s) => ({ ...s, volume: v }));
  }, []);

  const seekTo = useCallback((seconds: number) => {
    playerRef.current?.seekTo?.(seconds, true);
    setState((s) => ({ ...s, progress: seconds }));
  }, []);

  // Sync player volume when state volume changes
  useEffect(() => {
    playerRef.current?.setVolume?.(state.volume);
  }, [state.volume]);

  useEffect(() => {
    startProgressTracking();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startProgressTracking]);

  return (
    <PlayerContext.Provider value={{ ...state, playSong, togglePlay, nextSong, prevSong, setVolume, seekTo, playerRef }}>
      {children}
    </PlayerContext.Provider>
  );
};
