const CACHE_PREFIX = 'ironhold-';
const BUILD_ID = '2a600b2ad2e2e964';
const CACHE_NAME = `${CACHE_PREFIX}${BUILD_ID}`;
const INDEX_URL = new URL('./index.html', self.registration.scope).href;
const SCOPE_URL = self.registration.scope;
const PRECACHE_URLS = [
  "./",
  "./assets/ironhold.4db55f9a9d8a.js",
  "./assets/ironhold.62f83eb383b4.css",
  "./favicon.svg",
  "./icons/ironhold-maskable.svg",
  "./icons/ironhold.svg",
  "./index.html",
  "./manifest.webmanifest",
  "./models/sunward-ranger.glb",
  "./robots.txt",
  "./textures/bark.jpg",
  "./textures/leaves.jpg"
];

function isHashedAsset(url) {
  return /\/assets\/ironhold\.[a-f0-9]{12,}\.(?:js|css)$/.test(url.pathname);
}

async function networkFirstNavigation(event) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(event.request, { cache: 'no-cache' });
    if (response && response.ok) {
      await Promise.allSettled([
        cache.put(INDEX_URL, response.clone()),
        cache.put(SCOPE_URL, response.clone()),
      ]);
    }
    return response;
  } catch {
    return (await cache.match(event.request))
      || (await cache.match(INDEX_URL))
      || (await cache.match(SCOPE_URL))
      || Response.error();
  }
}

async function cacheFirstHashedAsset(event) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(event.request);
  if (cached) return cached;

  try {
    const response = await fetch(event.request);
    if (response && response.ok) {
      await Promise.allSettled([cache.put(event.request, response.clone())]);
    }
    return response;
  } catch {
    return Response.error();
  }
}

async function networkFirstStatic(event) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(event.request);
    if (response && response.ok) {
      await Promise.allSettled([cache.put(event.request, response.clone())]);
    }
    return response;
  } catch {
    return (await cache.match(event.request)) || Response.error();
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    // Cross-origin resources, including Google Fonts, use the browser's normal
    // network/HTTP cache policy and are never persisted in this cache.
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(event));
    return;
  }

  if (isHashedAsset(url)) {
    event.respondWith(cacheFirstHashedAsset(event));
    return;
  }

  event.respondWith(networkFirstStatic(event));
});
