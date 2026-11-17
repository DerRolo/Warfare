/* Warfare – Service Worker: Spiel läuft nach dem ersten Laden auch offline.
   Seite und Skripte: immer zuerst vom Server (neue Version sofort sichtbar), Cache nur als Offline-Reserve.
   Icons und Schriften: aus dem Cache. Die Version muss nicht mehr hochgezählt werden. */
const VERSION='warfare-sw2';
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
  const page=own&&(r.mode==='navigate'||/\.(html|js|webmanifest)$/.test(u.pathname)||u.pathname.endsWith('/'));
  if(page){
    /* Netzwerk zuerst (am HTTP-Cache vorbei), bei Fehler offline aus dem Cache */
    e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{
      if(res&&res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp));}
      return res;
    }).catch(()=>caches.open(VERSION).then(c=>c.match(r,{ignoreSearch:true}).then(h=>h||(r.mode==='navigate'?c.match('index.html'):Response.error())))));
    return;
  }
  /* Icons und Schriften: erst Cache, im Hintergrund aktualisieren */
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res;}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit;}
    return (await net)||Response.error();
  }));
});
