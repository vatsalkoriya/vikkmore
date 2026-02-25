import { useEffect, useRef, useCallback } from "react";
import { usePlayer } from "@/context/PlayerContext";

declare global {
  interface Window { 
    onYouTubeIframeAPIReady?: () => void; 
    YT?: any;
    mediaSession?: MediaSession;
  }
}

const YouTubePlayer = () => {
  const { currentSong, volume, playerRef, nextSong, isPlaying, setVolume: setPlayerVolume } = usePlayer();
  const containerRef = useRef<HTMLDivElement>(null);
  const apiLoaded = useRef(false);
  const playerReady = useRef(false);
  const wakeLock = useRef<any>(null);

  // Request wake lock to prevent screen from sleeping
  const requestWakeLock = useCallback(async () => {
    if ('wakeLock' in navigator) {
      try {
        wakeLock.current = await (navigator as any).wakeLock.request('screen');
        console.log('Wake lock acquired');
      } catch (err) {
        console.error('Wake lock request failed:', err);
      }
    }
  }, []);

  // Release wake lock
  const releaseWakeLock = useCallback(() => {
    if (wakeLock.current) {
      wakeLock.current.release();
      wakeLock.current = null;
      console.log('Wake lock released');
    }
  }, []);

  // Update media session metadata
  const updateMediaSession = useCallback(() => {
    if ('mediaSession' in navigator && currentSong) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: currentSong.artist,
        album: 'Vikkmore Music Player',
        artwork: [
          { src: currentSong.thumbnail, sizes: '96x96', type: 'image/jpeg' },
          { src: currentSong.thumbnail, sizes: '128x128', type: 'image/jpeg' },
          { src: currentSong.thumbnail, sizes: '192x192', type: 'image/jpeg' },
          { src: currentSong.thumbnail, sizes: '256x256', type: 'image/jpeg' },
          { src: currentSong.thumbnail, sizes: '384x384', type: 'image/jpeg' },
          { src: currentSong.thumbnail, sizes: '512x512', type: 'image/jpeg' },
        ]
      });

      // Set media session action handlers
      navigator.mediaSession.setActionHandler('play', () => {
        playerRef.current?.playVideo?.();
      });
      
      navigator.mediaSession.setActionHandler('pause', () => {
        playerRef.current?.pauseVideo?.();
      });
      
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        nextSong();
      });
      
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        // Implement previous song if needed
      });
    }
  }, [currentSong, nextSong, playerRef]);

  const initPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current) return;
    playerRef.current = new window.YT.Player(containerRef.current, {
      height: "0",
      width: "0",
      playerVars: { 
        autoplay: 1, 
        controls: 0, 
        disablekb: 1, 
        fs: 0, 
        modestbranding: 1,
        playsinline: 1, // Allow inline playback
      },
      events: {
        onReady: () => {
          playerReady.current = true;
          playerRef.current?.setVolume(volume);
          if (currentSong) playerRef.current?.loadVideoById(currentSong.id);
          updateMediaSession();
        },
        onStateChange: (e: any) => {
          if (e.data === window.YT.PlayerState.PLAYING) {
            requestWakeLock();
            setPlayerVolume(volume); // Sync volume
          } else if (e.data === window.YT.PlayerState.PAUSED || e.data === window.YT.PlayerState.ENDED) {
            releaseWakeLock();
          }
          
          if (e.data === window.YT.PlayerState.ENDED) {
            nextSong();
          }
        },
      },
    });
  }, [volume, currentSong, updateMediaSession, requestWakeLock, releaseWakeLock, nextSong, setPlayerVolume]);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      apiLoaded.current = true;
      initPlayer();
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => {
      apiLoaded.current = true;
      initPlayer();
    };
  }, [initPlayer]);

  useEffect(() => {
    if (!currentSong || !playerRef.current || !playerReady.current) return;
    playerRef.current.loadVideoById(currentSong.id);
    updateMediaSession();
  }, [currentSong?.id, updateMediaSession]);

  useEffect(() => {
    playerRef.current?.setVolume?.(volume);
  }, [volume]);

  // Handle visibility change to maintain playback
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying && playerRef.current) {
        // App is in background but music should continue playing
        console.log('App moved to background, music continues');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, playerRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      releaseWakeLock();
    };
  }, [releaseWakeLock]);

  return <div ref={containerRef} className="absolute w-0 h-0 overflow-hidden" />;
};

export default YouTubePlayer;
