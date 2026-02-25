// Background audio handling utilities
class BackgroundAudioHandler {
  private static instance: BackgroundAudioHandler;
  private audioContext: AudioContext | null = null;
  private isForcedBackgroundPlayback = false;
  private resumeInterval: NodeJS.Timeout | null = null;

  private constructor() {
    this.init();
  }

  public static getInstance(): BackgroundAudioHandler {
    if (!BackgroundAudioHandler.instance) {
      BackgroundAudioHandler.instance = new BackgroundAudioHandler();
    }
    return BackgroundAudioHandler.instance;
  }

  private init() {
    // Create audio context to help maintain background playback
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      console.log('Audio context created for background playback support');
    } catch (error) {
      console.warn('Audio context creation failed:', error);
    }

    // Handle page visibility changes
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    
    // Handle page focus/blur events
    window.addEventListener('blur', this.handleWindowBlur.bind(this));
    window.addEventListener('focus', this.handleWindowFocus.bind(this));
  }

  private handleVisibilityChange() {
    console.log('Visibility changed. Hidden:', document.hidden);
    
    if (document.hidden) {
      this.handleBackground();
    } else {
      this.handleForeground();
    }
  }

  private handleWindowBlur() {
    console.log('Window blurred - background state');
    this.handleBackground();
  }

  private handleWindowFocus() {
    console.log('Window focused - foreground state');
    this.handleForeground();
  }

  private handleBackground() {
    console.log('Entering background mode');
    
    // Resume playback if it was paused by browser
    if (this.resumeInterval) {
      clearInterval(this.resumeInterval);
    }
    
    // Check and resume playback every 2 seconds when in background
    this.resumeInterval = setInterval(() => {
      if (document.hidden) {
        this.attemptResumePlayback();
      }
    }, 2000);
  }

  private handleForeground() {
    console.log('Entering foreground mode');
    
    // Clear background resume interval
    if (this.resumeInterval) {
      clearInterval(this.resumeInterval);
      this.resumeInterval = null;
    }
    
    // Immediate resume check
    setTimeout(() => {
      this.attemptResumePlayback();
    }, 100);
  }

  private attemptResumePlayback() {
    // This would be called by the YouTube player component
    // to trigger resume when needed
    const event = new CustomEvent('backgroundAudioResume');
    window.dispatchEvent(event);
  }

  public async requestPersistentStorage(): Promise<boolean> {
    if (navigator.storage && navigator.storage.persist) {
      try {
        const persistent = await navigator.storage.persist();
        console.log('Persistent storage:', persistent ? 'granted' : 'denied');
        return persistent;
      } catch (error) {
        console.error('Persistent storage request failed:', error);
        return false;
      }
    }
    return false;
  }

  public async requestWakeLock(): Promise<boolean> {
    if ('wakeLock' in navigator) {
      try {
        const wakeLock = await (navigator as any).wakeLock.request('screen');
        console.log('Wake lock acquired for background playback');
        return true;
      } catch (error) {
        console.error('Wake lock request failed:', error);
        return false;
      }
    }
    return false;
  }

  public destroy() {
    if (this.resumeInterval) {
      clearInterval(this.resumeInterval);
    }
    
    if (this.audioContext) {
      this.audioContext.close();
    }
    
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    window.removeEventListener('blur', this.handleWindowBlur.bind(this));
    window.removeEventListener('focus', this.handleWindowFocus.bind(this));
  }
}

// Export singleton instance
export const backgroundAudioHandler = BackgroundAudioHandler.getInstance();

// Helper function to check if app is in background
export const isInBackground = (): boolean => {
  return document.hidden || !document.hasFocus();
};

// Helper function to force resume playback
export const forceResumePlayback = (playerRef: any) => {
  if (!playerRef?.current) return;
  
  try {
    const playerState = playerRef.current.getPlayerState?.();
    if (playerState === (window as any).YT?.PlayerState.PAUSED) {
      console.log('Force resuming playback');
      playerRef.current.playVideo?.();
    }
  } catch (error) {
    console.error('Force resume failed:', error);
  }
};