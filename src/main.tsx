import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New update available
                if (confirm('New version available. Refresh to update?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
        
        // Handle background playback messages
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data.type === 'PLAYBACK_STATUS') {
            console.log('Received playback status from service worker:', event.data);
          }
          
          if (event.data.type === 'KEEP_ALIVE') {
            console.log('Service worker keep alive message received');
          }
        });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
  
  // Request background playback permission
  if ('BackgroundFetchManager' in window) {
    console.log('Background fetch supported');
  }
  
  // Request persistent storage permission for better background performance
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().then(persistent => {
      if (persistent) {
        console.log('Storage will not be cleared except by explicit user action');
      } else {
        console.log('Storage may be cleared by the browser under storage pressure');
      }
    });
  }
}

// Prevent page from being unloaded during playback
window.addEventListener('beforeunload', (event) => {
  // Check if music is playing
  const audioElements = document.querySelectorAll('audio, video');
  let isPlaying = false;
  
  audioElements.forEach(element => {
    if (element instanceof HTMLMediaElement && !element.paused) {
      isPlaying = true;
    }
  });
  
  if (isPlaying) {
    // For Chrome, we can't prevent unload, but we can log it
    console.log('Page unloading while audio is playing');
  }
});

createRoot(document.getElementById("root")!).render(<App />);
