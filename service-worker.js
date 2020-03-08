const cacheName = 'touch-stadia-pwa';
const filesToCache = [
    '/',
    'index.html',
    'img/cws-badge.png',
    'img/github-badge.png',
    'img/ts-text-64.png',
    'favicon.ico',
    'snip-split.js',
    'snip.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(caches.open(cacheName).then(function (cache) {
        return cache.addAll(filesToCache);
    }));
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    }));
});