# PWA Audio Playback Fix

## Problem
The PWA was stopping music playback when switching to a different app or going to the mobile home screen.

## Solution Implemented

### 1. Enhanced Web Manifest
- Added `categories: ["music", "entertainment"]` to properly classify the app
- Added `screenshots` section for better PWA installation experience
- These changes help the browser recognize this as a media application

### 2. Custom Service Worker
Created `src/sw.ts` with:
- Proper YouTube API caching strategies
- Background playback handling
- Media session integration support

### 3. YouTube Player Enhancements
Modified `src/components/YouTubePlayer.tsx` to:
- Add `playsinline: 1` parameter to allow background playback
- Implement Wake Lock API to prevent screen from sleeping during playback
- Add Media Session API integration for lock screen controls
- Handle visibility change events to maintain playback
- Set up proper media metadata (title, artist, artwork)

### 4. Player Context Improvements
Updated `src/context/PlayerContext.tsx` to:
- Better synchronize volume between player and UI
- Improve play/pause toggle logic

### 5. Service Worker Registration
Enhanced `src/main.tsx` to:
- Properly register the service worker
- Handle service worker updates gracefully

### 6. Build Process
Updated build process to:
- Generate custom service worker
- Copy it to the dist folder after build

## Key Features Added

### Wake Lock API
Prevents the screen from sleeping while music is playing:
```javascript
const wakeLock = await navigator.wakeLock.request('screen');
```

### Media Session API
Provides lock screen controls and metadata:
```javascript
navigator.mediaSession.metadata = new MediaMetadata({
  title: song.title,
  artist: song.artist,
  artwork: [...]
});
```

### Background Playback Handling
- Music continues playing when app is in background
- Lock screen shows playback controls
- System notifications show current track info

## Testing Instructions

1. Build the app: `npm run build`
2. Start dev server: `npm run dev`
3. Install as PWA on your mobile device
4. Play a song and:
   - Switch to another app - music should continue
   - Go to home screen - music should continue
   - Lock screen - should show playback controls
   - Turn off screen - music should continue (if supported by device)

## Browser Support

These features work best on:
- Chrome/Chromium-based browsers (Android, Desktop)
- Samsung Internet
- Edge

iOS Safari has limited support for background audio in PWAs. For full iOS support, you might need to consider:
- Using Capacitor/Cordova for native app wrapper
- Implementing native iOS audio background modes

## Troubleshooting

If audio still stops:
1. Check browser console for errors
2. Ensure PWA is properly installed (not just running in browser tab)
3. Verify device permissions for background audio
4. Test on different browsers as support varies

## Future Improvements

1. Add Capacitor integration for full native background audio support
2. Implement audio focus management
3. Add Bluetooth headset controls
4. Improve battery optimization handling