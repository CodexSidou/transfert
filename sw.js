const CACHE = 'sendcode-v16';
const ASSETS = ['.', 'index.html', 'recevoir.html', 'discuter.html', 'guide.html', 'manifest.webmanifest', 'icon.svg', 'logo.svg', 'logo-full.svg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(cache => cache.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
