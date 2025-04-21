self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('todo-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/sw.js',
                'https://img.icons8.com/ios-filled/50/000000/checklist.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
