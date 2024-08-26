importScripts("https://dont-sue-me-topvaz.topvazgeo.online/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
