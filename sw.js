/* Warfare – Service Worker: Spiel läuft nach dem ersten Laden auch offline.
   Bei einer neuen Version VERSION erhöhen, dann wird der Cache erneuert. */
const VERSION='warfare-7_26';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','icon-180.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url);
  const own=u.origin===location.origin,font=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if(!own&&!font)return;
  /* Eigene Dateien und Schriften: erst Cache, parallel im Hintergrund aktualisieren */
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res;}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit;}
    const res=await net;
    return res||(r.mode==='navigate'?c.match('index.html'):Response.error());
  }));
});
