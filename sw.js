// Hält die App offline verfügbar. Version fa1e3b70
const CACHE='rezeptbuch-fa1e3b70';
const FILES=["./","index.html","recipes.js","manifest.webmanifest","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.origin!==location.origin){ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const c=res.clone(); caches.open(CACHE).then(x=>x.put(e.request,c)); return res;}))); return; }
  // Erst Netz (damit Updates ankommen), sonst Cache
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone(); caches.open(CACHE).then(x=>x.put(e.request,c)); return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
