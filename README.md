# Warfare 1917

Grabenkrieg-Strategie im Browser. Ein einziges Spiel (`index.html`), installierbar als App.

## Auf GitHub hochladen (GitHub Pages)
1. Neues Repository anlegen (z. B. `warfare`).
2. Alle Dateien dieses Ordners ins Repository hochladen (Add file → Upload files): `index.html`, `manifest.webmanifest`, `sw.js`, die vier `icon-*.png`, `.nojekyll`, `README.md`.
3. Settings → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)` → Save.
4. Nach etwa einer Minute läuft das Spiel unter `https://DEINNAME.github.io/warfare/`.

## Auf dem Handy installieren
- Android (Chrome): Seite öffnen → Menü (⋮) → „App installieren“ / „Zum Startbildschirm hinzufügen“.
- iPhone (Safari): Seite öffnen → Teilen → „Zum Home-Bildschirm“.

Nach dem ersten Laden läuft das Spiel auch offline.

## Neue Version einspielen
`index.html` ersetzen und in `sw.js` die Zeile `const VERSION=...` hochzählen (z. B. `warfare-7_27`), sonst zeigt das Handy noch die alte Version aus dem Cache. Beim nächsten Öffnen wird erst die alte Version angezeigt und im Hintergrund die neue geladen; nach einem zweiten Öffnen ist die neue aktiv.

Spielstände (Kampagne, Bestwerte) liegen im Browserspeicher des jeweiligen Geräts.
