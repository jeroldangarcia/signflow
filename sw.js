console.log('Hello Service Worker')

const CACHE = 'signflow-cache';

self.addEventListener('install', (event) => {
  console.log('Signflow Service Worker is being installed');
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fromCache(event.request));
  event.waitUntil(update(event.request));
})

const precache = () => {
  return caches.open(CACHE).then( cache => {
    return cache.addAll([
      './api/authenticate',
      './api/me',
      './api/promotions',
    ]);
  });
}

const fromCache = (request) => {
  return caches.open(CACHE).then( cache => {
    return cache.match(request).then( matching  => {
        return matching || Promise.reject('no-match');
      });
  });
}

const update = (request) => {
  return caches.open(CACHE).then( cache => {
    return fetch(request).then( response => {
      return cache.put(request, response);
    });
  });
}
