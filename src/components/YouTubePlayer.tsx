import { useEffect, useRef, useCallback } from "react";
import { usePlayer } from "@/context/PlayerContext";
import { backgroundAudioHandler, forceResumePlayback } from "@/lib/backgroundAudio";

declare global {
  interface Window { 
    onYouTubeIframeAPIReady?: () => void; 
    YT?: any;
  }
}

const YouTubePlayer = () => {
  const { currentSong, volume, playerRef, nextSong, isPlaying } = usePlayer();
  const containerRef = useRef<HTMLDivElement>(null);
  const apiLoaded = useRef(false);
  const playerReady = useRef(false);
  const wakeLock = useRef<any>(null);
  const visibilityTimeout = useRef<NodeJS.Timeout | null>(null);

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

  // Force resume playback when visibility changes
  const handleVisibilityChange = useCallback(() => {
    if (!playerRef.current || !isPlaying) return;
    
    if (document.hidden) {
      // App is going to background
      console.log('App going to background - maintaining playback state');
      
      // Clear any existing timeout
      if (visibilityTimeout.current) {
        clearTimeout(visibilityTimeout.current);
      }
      
      // Set timeout to resume playback if paused by browser
      visibilityTimeout.current = setTimeout(() => {
        const playerState = playerRef.current?.getPlayerState?.();
        if (playerState === window.YT?.PlayerState.PAUSED) {
          console.log('Resuming playback after visibility change');
          playerRef.current?.playVideo?.();
        }
      }, 1000);
    } else {
      // App is coming to foreground
      console.log('App coming to foreground');
      if (visibilityTimeout.current) {
        clearTimeout(visibilityTimeout.current);
        visibilityTimeout.current = null;
      }
    }
  }, [playerRef, isPlaying]);

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
        playsinline: 1,
        // Additional parameters to help with background playback
        mute: 0,
        origin: window.location.origin,
      },
      events: {
        onReady: () => {
          playerReady.current = true;
          playerRef.current?.setVolume(volume);
          if (currentSong) playerRef.current?.loadVideoById(currentSong.id);
        },
        onStateChange: (e: any) => {
          if (e.data === window.YT.PlayerState.PLAYING) {
            requestWakeLock();
          } else if (e.data === window.YT.PlayerState.PAUSED || e.data === window.YT.PlayerState.ENDED) {
            releaseWakeLock();
          }
          
          // Handle Chrome's automatic pause
          if (e.data === window.YT.PlayerState.PAUSED && document.hidden) {
            console.log('Chrome paused playback in background - attempting to resume');
            // Try to resume after a short delay
            setTimeout(() => {
              if (document.hidden && isPlaying) {
                playerRef.current?.playVideo?.();
              }
            }, 500);
          }
          
          if (e.data === window.YT.PlayerState.ENDED) {
            nextSong();
          }
        },
      },
    });
  }, [volume, currentSong, requestWakeLock, releaseWakeLock, nextSong, isPlaying]);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      apiLoaded.current = true;
      initPlayer();
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => {
      apiLoaded.current = true;
      initPlayer();
    };
  }, [initPlayer]);

  useEffect(() => {
    if (!currentSong || !playerRef.current || !playerReady.current) return;
    playerRef.current.loadVideoById(currentSong.id);
  }, [currentSong?.id]);

  useEffect(() => {
    playerRef.current?.setVolume?.(volume);
  }, [volume]);

  // Handle visibility change to maintain playback
  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (visibilityTimeout.current) {
        clearTimeout(visibilityTimeout.current);
      }
    };
  }, [handleVisibilityChange]);

  // Additional Chrome-specific workaround
  useEffect(() => {
    const handlePageHide = () => {
      // Try to keep audio context alive
      if (playerRef.current && isPlaying) {
        console.log('Page hide event - attempting to maintain playback');
      }
    };

    const handlePageShow = () => {
      // Check if we need to resume playback
      if (playerRef.current && isPlaying) {
        const playerState = playerRef.current.getPlayerState?.();
        if (playerState === window.YT?.PlayerState.PAUSED) {
          console.log('Page show - resuming playback');
          setTimeout(() => {
            playerRef.current?.playVideo?.();
          }, 300);
        }
      }
    };

    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [playerRef, isPlaying]);

  // Background audio resume handler
  useEffect(() => {
    const handleBackgroundResume = () => {
      if (playerRef.current && isPlaying && document.hidden) {
        forceResumePlayback(playerRef);
      }
    };

    window.addEventListener('backgroundAudioResume', handleBackgroundResume);
    
    return () => {
      window.removeEventListener('backgroundAudioResume', handleBackgroundResume);
    };
  }, [playerRef, isPlaying]);

  // Initialize background audio handler
  useEffect(() => {
    // Request persistent storage for better background performance
    backgroundAudioHandler.requestPersistentStorage();
    
    return () => {
      // Cleanup handled by singleton
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      releaseWakeLock();
      if (visibilityTimeout.current) {
        clearTimeout(visibilityTimeout.current);
      }
    };
  }, [releaseWakeLock]);

  return <div ref={containerRef} className="absolute w-0 h-0 overflow-hidden" />;
};

export default YouTubePlayer;
