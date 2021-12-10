importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js');
if (workbox) {
    workbox.setConfig({
        debug: false
    });
    const wkb = {
        ...workbox.core,
        ...workbox.recipes
    }
    const {
        clientsClaim,
        pageCache,
        staticResourceCache,
        googleFontsCache,
        imageCache
    } = wkb;

    imageCache();
    pageCache();
    googleFontsCache();
    staticResourceCache({
        cacheName: 'assets'
    });
    clientsClaim();
} else {
    console.log('Boo! Workbox failed to load 😬');
}