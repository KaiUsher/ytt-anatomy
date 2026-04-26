const CACHE = 'ytt-anatomy-v1';
const ASSETS = [
  '/ytt-anatomy/',
  '/ytt-anatomy/index.html',
  '/ytt-anatomy/manifest.json',
  '/ytt-anatomy/icons/icon-192.png',
  '/ytt-anatomy/icons/icon-512.png',
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
