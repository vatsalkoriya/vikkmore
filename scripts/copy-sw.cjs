const fs = require('fs');
const path = require('path');

// Copy the custom service worker to dist folder after build
const src = path.join(__dirname, '../src/sw.ts');
const dest = path.join(__dirname, '../dist/sw.js');

// Simple copy function (in a real scenario, you'd compile the TypeScript)
fs.copyFileSync(src, dest);
console.log('Service worker copied to dist folder');