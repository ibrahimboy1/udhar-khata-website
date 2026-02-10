// Hisab Banao - Service Worker
// Version management for PWA updates
const APP_VERSION = '1.0.0';
const CACHE_NAME = `hisab-banao-v${APP_VERSION}`;

// Files to cache for offline use
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/translations.js',
    '/animation.js',
    '/manifest.json',
    '/images/icon.svg',
    '/images/sa.jpg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log(`[SW] Installing version ${APP_VERSION}`);

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS.map(url => {
                    return new Request(url, { cache: 'reload' });
                })).catch(err => {
                    console.log('[SW] Some assets failed to cache (this is okay):', err);
                    // Cache what we can
                    return Promise.allSettled(
                        STATIC_ASSETS.map(url =>
                            cache.add(url).catch(() => console.log(`[SW] Failed to cache: ${url}`))
                        )
                    );
                });
            })
            .then(() => {
                console.log('[SW] Installation complete');
                // Force waiting SW to become active immediately
                return self.skipWaiting();
            })
    );
});

// Activate event - clean old caches and take control
self.addEventListener('activate', (event) => {
    console.log(`[SW] Activating version ${APP_VERSION}`);

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => {
                            // Delete old caches that don't match current version
                            return cacheName.startsWith('hisab-banao-') && cacheName !== CACHE_NAME;
                        })
                        .map((cacheName) => {
                            console.log(`[SW] Deleting old cache: ${cacheName}`);
                            return caches.delete(cacheName);
                        })
                );
            })
            .then(() => {
                console.log('[SW] Activation complete - taking control');
                // Take control of all pages immediately
                return self.clients.claim();
            })
            .then(() => {
                // Notify all clients about the new version
                return self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'SW_ACTIVATED',
                            version: APP_VERSION
                        });
                    });
                });
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip cross-origin requests
    if (url.origin !== location.origin) {
        return;
    }

    // Skip API calls or dynamic content (if any)
    if (url.pathname.startsWith('/api/')) {
        return;
    }

    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Return cached version but also fetch fresh version in background
                    fetchAndCache(request);
                    return cachedResponse;
                }

                // Not in cache, fetch from network
                return fetch(request)
                    .then((response) => {
                        // Cache the new response
                        if (response.status === 200) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(request, responseClone);
                            });
                        }
                        return response;
                    })
                    .catch(() => {
                        // Network failed, try to return cached index for navigation
                        if (request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        return new Response('Offline', { status: 503 });
                    });
            })
    );
});

// Helper: Fetch and update cache in background
function fetchAndCache(request) {
    fetch(request)
        .then((response) => {
            if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(request, responseClone);
                });
            }
        })
        .catch(() => {
            // Ignore fetch errors for background updates
        });
}

// Listen for messages from the main app
self.addEventListener('message', (event) => {
    const { data } = event;

    if (data.type === 'GET_VERSION') {
        event.source.postMessage({
            type: 'VERSION_INFO',
            version: APP_VERSION
        });
    }

    if (data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (data.type === 'CHECK_UPDATE') {
        // Force re-registration to check for updates
        self.registration.update();
    }
});

// Push notification support (for future use)
self.addEventListener('push', (event) => {
    if (!event.data) return;

    const data = event.data.json();
    const options = {
        body: data.body || 'New update available!',
        icon: '/images/icon.svg',
        badge: '/images/icon.svg',
        vibrate: [100, 50, 100],
        data: {
            url: data.url || '/'
        },
        actions: [
            { action: 'open', title: 'Open App' },
            { action: 'dismiss', title: 'Dismiss' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'Hisab Banao', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'dismiss') return;

    const url = event.notification.data?.url || '/';

    event.waitUntil(
        self.clients.matchAll({ type: 'window' })
            .then((clients) => {
                // Check if app is already open
                for (const client of clients) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        client.navigate(url);
                        return client.focus();
                    }
                }
                // Open new window if not
                return self.clients.openWindow(url);
            })
    );
});

console.log(`[SW] Service Worker loaded - Version ${APP_VERSION}`);
