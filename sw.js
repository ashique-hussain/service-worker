const expectedCaches = ['service-worker-v1'];

self.addEventListener('install', function(event) {
  console.log("service-worker-v1 cache installing....");
  event.waitUntil(
    caches.open('service-worker-v1').then(function(cache) {
      return cache.addAll([
        '/service-worker/',
        '/service-worker/favicon.png',
        '/service-worker/index.html',
        '/service-worker/about.html',
        '/service-worker/blog-home.html',
        '/service-worker/blog-single.html',
        '/service-worker/contact.html',
        '/service-worker/elements.html',
        '/service-worker/portfolio.html',
        '/service-worker/price.html',
        '/service-worker/services.html',
        '/service-worker/css/linearicons.css',
        '/service-worker/css/font-awesome.min.css',
        '/service-worker/css/bootstrap.css',
        '/service-worker/css/magnific-popup.css',
        '/service-worker/css/nice-select.css',
        '/service-worker/css/animate.min.css',
        '/service-worker/css/owl.carousel.css',
        '/service-worker/css/main.css',
        '/service-worker/js/vendor/jquery-2.2.4.min.js',
        '/service-worker/js/popper.min.js',
        '/service-worker/js/vendor/bootstrap.min.js',
        '/service-worker/js/easing.min.js',
        '/service-worker/js/hoverIntent.js',
        '/service-worker/js/superfish.min.js',
        '/service-worker/js/jquery.ajaxchimp.min.js',
        '/service-worker/js/jquery.magnific-popup.min.js',
        '/service-worker/js/jquery.tabs.min.js',
        '/service-worker/js/jquery.nice-select.min.js',
        '/service-worker/js/isotope.pkgd.min.js',
        '/service-worker/js/waypoints.min.js',
        '/service-worker/js/jquery.counterup.min.js',
        '/service-worker/js/simple-skillbar.js',
        '/service-worker/js/owl.carousel.min.js',
        '/service-worker/js/mail-script.js',
        '/service-worker/js/main.js',
        '/service-worker/fonts/FontAwesome.otf',
        '/service-worker/fonts/fontawesome-webfont.eot',
        '/service-worker/fonts/fontawesome-webfont.svg',
        '/service-worker/fonts/fontawesome-webfont.ttf',
        '/service-worker/fonts/fontawesome-webfont.woff',
        '/service-worker/fonts/fontawesome-webfont.woff2',
        '/service-worker/fonts/Linearicons-Free.eot',
        '/service-worker/fonts/Linearicons-Free.svg',
        '/service-worker/fonts/Linearicons-Free.ttf',
        '/service-worker/fonts/Linearicons-Free.woff',
        '/service-worker/fonts/Linearicons-Free.woff2',
        '/service-worker/img/about/c-logo.png',
        '/service-worker/img/blog/ads-banner.jpg',
        '/service-worker/img/blog/blog-home-banner.jpg',
        '/service-worker/img/blog/c1.jpg',
        '/service-worker/img/blog/c2.jpg',
        '/service-worker/img/blog/c3.jpg',
        '/service-worker/img/blog/c4.jpg',
        '/service-worker/img/blog/c5.jpg',
        '/service-worker/img/blog/c6.jpg',
        '/service-worker/img/blog/cat-widget1.jpg',
        '/service-worker/img/blog/cat-widget2.jpg',
        '/service-worker/img/blog/cat-widget3.jpg',
        '/service-worker/img/blog/feature-img1.jpg',
        '/service-worker/img/blog/feature-img2.jpg',
        '/service-worker/img/blog/feature-img3.jpg',
        '/service-worker/img/blog/feature-img4.jpg',
        '/service-worker/img/blog/feature-img5.jpg',
        '/service-worker/img/blog/next.jpg',
        '/service-worker/img/blog/post-img1.jpg',
        '/service-worker/img/blog/post-img2.jpg',
        '/service-worker/img/blog/pp1.jpg',
        '/service-worker/img/blog/pp2.jpg',
        '/service-worker/img/blog/pp3.jpg',
        '/service-worker/img/blog/pp4.jpg',
        '/service-worker/img/blog/prev.jpg',
        '/service-worker/img/blog/s-img.jpg',
        '/service-worker/img/blog/user-info.png',
        '/service-worker/img/elements/f1.jpg',
        '/service-worker/img/elements/f2.jpg',
        '/service-worker/img/elements/f3.jpg',
        '/service-worker/img/elements/f4.jpg',
        '/service-worker/img/elements/f5.jpg',
        '/service-worker/img/elements/f6.jpg',
        '/service-worker/img/elements/f7.jpg',
        '/service-worker/img/elements/f8.jpg',
        '/service-worker/img/elements/g1.jpg',
        '/service-worker/img/elements/g2.jpg',
        '/service-worker/img/elements/g3.jpg',
        '/service-worker/img/elements/g4.jpg',
        '/service-worker/img/elements/a.jpg',
        '/service-worker/img/elements/a2.jpg',
        '/service-worker/img/elements/d.jpg',
        '/service-worker/img/elements/disabled-radio.png',
        '/service-worker/img/elements/disabled-check.png',
        '/service-worker/img/elements/primary-check.png',
        '/service-worker/img/elements/primary-radio.png',
        '/service-worker/img/elements/success-check.png',
        '/service-worker/img/elements/success-radio.png',
        '/service-worker/img/elements/user1.png',
        '/service-worker/img/elements/user2.png',
        '/service-worker/img/about-img.png',
        '/service-worker/img/b1.jpg',
        '/service-worker/img/b2.jpg',
        '/service-worker/img/b3.jpg',
        '/service-worker/img/hero-img.png',
        '/service-worker/img/l1.png',
        '/service-worker/img/l2.png',
        '/service-worker/img/l3.png',
        '/service-worker/img/l4.png',
        '/service-worker/img/l5.png',
        '/service-worker/img/logo.png',
        '/service-worker/img/p1.jpg',
        '/service-worker/img/p2.jpg',
        '/service-worker/img/p3.jpg',
        '/service-worker/img/p4.jpg',
        '/service-worker/img/p5.jpg',
        '/service-worker/img/p6.jpg',
        '/service-worker/img/preview.png',
        '/service-worker/img/user.png'
      ]);
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
