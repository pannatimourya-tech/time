const CACHE_NAME = 'hawk-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install: Save files to phone/browser memory
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// Fetch: Serve files from memory if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
