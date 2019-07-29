const cacheFile = import("staticFiles/static-files").filesCache;
const expectedCaches = ['service-worker-v1'];

self.addEventListener('install', function(event) {
  console.log("service-worker-v1 cache installing....");
  event.waitUntil(
    caches.open('service-worker-v1').then(function(cache) {
      return cache.addAll(cacheFile);
    })
  );
});


self.addEventListener('activate', event => {
  console.log("Cache activated...");
  event.waitUntil(
      caches.keys().then(keys => Promise.all(
          keys.map(key => {
            if (!expectedCaches.includes(key)) {
              return caches.delete(key);
            }
          })
      )).then(() => {
        console.log('service-worker-v1 now ready to handle fetches!');
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('serviceWorker-v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/service-worker/favicon.png');
      });
    }
  }));
});
