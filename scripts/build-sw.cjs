const fs = require('fs');
const path = require('path');

// Simple transformation of TypeScript service worker to JavaScript
const tsContent = fs.readFileSync(path.join(__dirname, '../src/sw.ts'), 'utf8');

// Remove TypeScript specific syntax
let jsContent = tsContent
  .replace(/\/\/\/ <reference.*>/g, '')
  .replace(/import.*from 'workbox.*';/g, '')
  .replace(/declare let self: ServiceWorkerGlobalScope;/g, '')
  .replace(/self.__WB_MANIFEST/g, '[]');

// Add workbox imports
const workboxImports = `
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
  workbox.routing.registerRoute(
    /^https:\\/\\/www\\.youtube\\.com\\/.*/i,
    new workbox.strategies.NetworkFirst({
      cacheName: 'youtube-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 604800
        })
      ]
    })
  );
  
  workbox.routing.registerRoute(
    /^https:\\/\\/i\\.ytimg\\.com\\/.*/i,
    new workbox.strategies.CacheFirst({
      cacheName: 'youtube-images',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 2592000
        })
      ]
    })
  );
}
`;

jsContent = workboxImports + jsContent;

// Write to dist folder
const distPath = path.join(__dirname, '../dist/sw.js');
fs.writeFileSync(distPath, jsContent);
console.log('Service worker built and copied to dist folder');