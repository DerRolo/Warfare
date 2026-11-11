# Schlammfront 1917 – Patch Notes (Verlauf, soweit rekonstruierbar)

Hinweis: Aus meinem Gedächtnis und meinen Notizen zusammengestellt. Frühe Versionen (v2–v6) sind grob, ab 7_5 genauer. Töne konnte ich nie hören, nur technisch prüfen.

## Frühe Etappen (v2–v6)
- **v2:** Erste spielbare Fassung als Artifact (Briten links, Deutsche rechts, Grabenkrieg nach Vorbild Warfare 1917, eigene Optik/Icons).
- **Etappe 1:** Setup-Menü, Fraktionen, Einheiten mit historischen Waffen, Nachladen, Icon-Leiste, Granaten (automatisch), Offizier, Sniper, Basisheilung, Upgrades.
- **Etappe 2:** Karten in drei Längen mit Scrollen, mehr Tiefe, Fortschrittsbalken, Quergräben mit Wimpeln/Schloss, Draht, Minen, Fire Support (Artillerie, Gas, Rauch), KI-Einstellung.
- **Etappe 3 (Ton):** Eigene Aufnahmen eingebaut: Panzer (Fahr-Loops, Stand, Kanone, MG), Gewehre (SMLE/G98), Granatentrupp, MG-Loops, Sniper, Pistole, MP 18, Mörser, Artillerie-Pfeifen/Einschläge, Rauch/Gas, Ambiente (ruhig/Kampf), Panzerexplosion. Synthetischer Fallback für Fehlendes. Drei Lautstärkeregler (Hintergrund, Waffen, Effekte).
- **v6:** Sounds in deine Datei eingebaut.

## 7_5 → 7_7 (Balance, KI, Animationen)
- Prüfung, was von deiner Liste schon drin war.
- Sniper teurer, Einheiten-Icon-Reihenfolge: Schütze, Granatentrupp, Sturmtrupp, MG, Sniper, Offizier, Anti-Tank, Mörser, Panzer.
- Anti-Tank-Artillerie kostet keinen Nachschub, höherer Cooldown; Mörser etwas billiger; Kanone mehr Leben.
- Mörser streut breit (besonders gegen Panzer).
- **KI-Grabenlogik neu:** Gräben wegen Beschuss (Mörser/Sniper) nicht mehr panisch verlassen, sondern abwägend und mit Zufall.
- Animationen: MG (Zweibein, Gurt/Trommel), Nachladen; Panzer-MG bevorzugt Infanterie, wirft Dreck auf, weniger Mündungsfeuer.

## 7_8 / 7_9 (Feinschliff)
- Panzer greift die Basis aus kürzerer Distanz an (halb so weit), Panzer 10 % schneller.
- Anti-Tank-Artillerie etwas langsamer im Einschlag, Artillerie auf Gräben mit mehr Streuung.
- Sound-Voice-Limiter (Stimmenbegrenzung gegen Soundmatsch).
- Bugfix: Besatzungswaffen (MG/Mörser) klappten bei kurzem Zielverlust ständig auf und zu.
- KI darf die Basis-Upgrades behalten.

## 7_10 (Paket 1: Balance und Bugs)
- Anti-Tank-Artillerie: Schaden 150→190, Radius 30→34, deutlich mehr Streuung; Granaten suchen kurz vor Einschlag Panzer im Gebiet (Wahrscheinlichkeit), unterschiedliches Vorhalten bei fahrenden Panzern.
- Eigenbeschuss (Friendly Fire) für Artillerie, Anti-Tank, Mörser und Gas; KI berücksichtigt eigene Einheiten im Zielgebiet nur wahrscheinlichkeitsbasiert.
- Artillerie/Mörser: schwankender Schaden, Liegende/Kniende überleben öfter.
- Mörser: viel höhere und steilere Flugbahn, gegen Panzer 1,8× Schaden.
- Granatentrupp wirft etwa doppelt so genau.
- Minen: Kettenreaktion bei Artillerie in der Nähe, "Klick, boom" ohne roten Ring, mehr Staub, mehr Schaden (auch gegen Panzer). Granaten 0,6× statt 0,4× gegen Panzer.
- Rauch: weniger dicht (Performance), Cooldown 30→55 s.
- KI-Start: Anfangs-Cooldowns und 24 s Pause zwischen Supports, nicht mehr alles auf einmal.
- KI-Gräben bleiben bei Gas fast immer besetzt, wenn sie kämpfen.
- Bodengewinn: keine Basis-Upgrades mehr.
- Skins: Doppel-Gewehr beim Zielen behoben, Füße im Graben nicht mehr abgeschnitten.
- Panzerexplosion doppelt, größer, viel lauter.

## 7_11 (Paket 2)
- **KI-Panik:** Steigt mit der Nähe eines gegnerischen Panzers zur eigenen Seite (erst schnell, dann abflachend); wirkt auf Anti-Tank-/Mörser-Gewichtung, gezielten Kauf und Anti-Tank-Artillerie – alles Wahrscheinlichkeiten.
- **Testmodus** (nur bei Entwicklermodus): KI aus, beide Seiten kostenlos spawnen an der Kamera-Position, Seitenwechsel mit V, Fire Support für die gewählte Seite.
- **Todesanimationen:** 3 Liegevarianten, Waffe am Boden, Blut/Tropfen/Lachen, Kopfschuss (Sniper öfter), Wegschleudern bei Explosionen, abgetrennte Beine (Mine am häufigsten, im Graben seltener), Gas ohne Blut.

## 7_12
- Testmodus: Einheiten spawnen von der Basis-Seite des gewählten Teams, nicht mehr an der Kamera.
- Seitenwechsel-Knopf (V) hat ein eigenes Icon (zwei gegenläufige Pfeile) statt des Besens.

## 7_13
- Mörser: Granate fliegt viel schneller (Flugzeit etwa Distanz/430) und deutlich höher (Bogen bis 720); Streuung kleiner und gaussförmig (weniger extreme Ausreißer).
- Handgranaten: Streuung realistischer (gaussförmig, begrenzt), 1,5 s Wartezeit nach Kampfbeginn, sichtbare Animation: Granate nehmen, Stift ziehen, Arm heben, werfen (Granatentrupp und Sturmtrupp, Sound Pull beim Stift, Wurf beim Abwurf).
- Tote Soldaten: Arme liegen jetzt entspannt, nicht mehr wie mit Waffe in der Hand.
- Panzerabwehr (Kanone 190→290, Tankgewehr 150→215 Reichweite, dafür Treffsicherheit 0,80→0,72 bzw. 0,62→0,56), damit sie schon schießt, bevor der Panzer da ist.
- Normale Artillerie macht gegen Panzer 2,4× Schaden.
- Anti-Tank-Artillerie weniger "Skript": 40 % der Granaten ohne Zielverfolgung, Korrektur nur ab und zu (alle 0,5–1,5 s) mit neuer Streuung, größere Streuung insgesamt.

## 7_14
- Mörser/Artillerie im Graben: Volltreffer (näher als ~16) tötet praktisch immer, Deckung wird dabei umgangen. Schlägt die Granate außerhalb des Grabens ein, überleben die Besatzungen deutlich öfter (Splitter nur noch ×0,3).
- Mörser zielt auf Fläche: pro Schuss ein zufälliges Mitglied der Gruppe bzw. ein Punkt dazwischen, dann Streuung.
- Mörser-Animation: Granate wird jetzt richtig herum (Spitze oben, Leitwerk unten) eingeführt.
- Briten-Panzerabwehr: Reichweite 290→340, Schussrate deutlich niedriger (3,6 s), mehr Schaden (130), größerer Flächenschaden (42), etwas ungenauer.
- Panzer-Balance: Schützen- und MG-Treffer gegen Panzer viel schwächer (Panzerung klein 0,12, mittel 0,3, Handgranate 0,3). Panzer-MG stärker (7,5/7,8 statt 4,4/4,6) und etwas genauer; Panzerkanone trifft Infanterie auch im Graben mit voller Wucht (×1,6, Deckung umgangen).
- Granatenwurf: Ablauf etwas kürzer (1,3 s), damit Granatenwerfer nicht vorher abgeschossen werden.
- Sandbox (früher Testmodus): kürzerer Name, kein Banner beim Seitenwechsel, aktive Seite dauerhaft oben in der Mitte sichtbar, Graben-Upgrades für die gewählte Seite, kein Sieg/Niederlage; Einheiten, die das Ende erreichen, sterben.
- MG: Nach dem Sturmpfiff verlassen MG-Besatzungen ihre Stellungen nicht mehr; beim Bau der MG-Stellung (oder 2. MG-Platz) rücken vorhandene MG-Einheiten automatisch in die MG-Plätze nach.
- Draht-Upgrade deckt jetzt die gesamte Grabentiefe ab; neue zweite Stufe "Zweiter Draht" (1000), weiter vorn.

## 7_15
- Grafikfehler (graue, ruckelnde Karte) behoben: die Seitenanzeige der Sandbox ließ Zeichen-Einstellungen in den nächsten Frame durchlaufen.
- Sandbox: echter Seitenwechsel (V). Kamera, Basis, HUD, Einheiten-Icons, Gräben, Draht, Minen, Fire Support, Upgrades und Abriss gehören danach der gewählten Seite.
- Briten-Panzerabwehr: Reichweite 340→400 (im Gefecht zusätzlich ×1,35), Aufbau-Animation (Fahrstellung, Zwischenstellung, Feuerstellung, 2,4 s Aufbauzeit).

## 7_16
- MG-Bug: Schützen einer MG-Kompanie, die zuerst am Graben ankamen und keinen Platz fanden, markierten die ganze Kompanie als "vorbei", sodass das MG weiterlief. Jetzt bekommen sie einen Zusatzplatz im Graben (zählt nicht als MG-Platz, verschwindet beim Verlassen), und das MG kann seinen Platz einnehmen.
- Mörser +10 % Schaden, gegen Panzer 2,6× statt 1,8×.
- Panzer −8 % Leben (640/750). Anti-Tank-Artillerie: Schaden 190→220, weniger Streuung und mehr Granaten mit Zielverfolgung (75 %).

## 7_17
- Zielwahl neu: Boni nur noch Bruchteile der Reichweite (statt feste 60–280), pro Kandidat zufällig gewürfelt, dazu etwas Zufall in der Entfernung. Offizier, MG, Kanone, Mörser und Tankgewehr werden nur teils "erkannt" (nah immer, weit weg mit 40 %), Sniper pickt sie also nicht mehr zielsicher heraus.
- MG greift Panzer jetzt an (Bonus 0,28× Reichweite), Mörser, Kanone und Tankgewehr bevorzugen Panzer deutlich (0,4×), aber statistisch, nicht strikt. Panzer-MG meidet Panzer nicht mehr. Schützen/Granatentrupp leicht (0,12/0,15×).
- Mörser: Mindestdistanz 150 (Briten) / 140 (Deutsche), schießt nicht mehr auf Ziele direkt vor sich.
- Offizier: 85 statt 50 Leben (Aura unverändert: Radius 120, +12 % Genauigkeit, +0,8 HP/s Regeneration für Verbündete).

## 7_18
- Offizier angeklickt: gestrichelter Aura-Kreis, grüne Pfeile über allen Einheiten, die profitieren.
- Deutsche Panzerabwehr (Tankgewehr): Schaden 80→165, Reichweite 215→275, Treffsicherheit 0,56→0,70, Feuerrate besser; Preis 540→480.
- Grabeneintritt: Einheiten mit Ziel laufen nur noch ab 48 (statt 95) in den Graben und kämpfen vorher; Granatenwerfer, deren Wurf bereit ist, werfen zuerst.
- 10 neue Upgrades (Infanterie und Panzer): MG-Schnellfeuer, MG-Visier, Scharfschützen-Optik, Scharfschützen-Training, Führungsstärke (Aura +20 %), Offiziersweste (+25 % Leben), Mörser-Drill, Stärkere Ladung (Mörser-Radius), Panzerbrechende Munition (+12 % Schaden), Richtmittel (+8 % Reichweite).
- Spieler-Cooldown am Spielstart: Artillerie 70 s, Anti-Tank 90 s, Gas 110 s, Rauch 45 s.
- Panzer teurer: 900→1030 (Briten), 1020→1160 (Deutsche).
- Neuer Graben räumt Draht und Minen im Umkreis (50–55) ab.
- Gas/Rauch: die Salve verteilt sich auf drei Tiefenbänder (oben, Mitte, unten), Rauch streut in der Breite 50 % mehr.
- Rauch senkt nicht mehr die Reichweite der Gegner, nur noch die Treffgenauigkeit (Ziel im Rauch ×0,35, Schütze im Rauch ×0,75).

## 7_19
- Upgrade-Blatt als Baum: Zweige Wirtschaft, Infanterie, Spezialisten, Panzer, Fire Support (Taste U) und Stellung (Taste B, nur Stellungskrieg), mit Icons, Verbindungslinien und Stufenanzeige.
- Freischaltung: Kinder brauchen Stufe 1 ihres Vorgängers; Spezialisten brauchen Feuerkraft 1, Panzer brauchen Nachschub 3; Basis-Upgrades brauchen Stellungsbau. Gesperrte Knoten sind gestrichelt und nennen die Voraussetzung. Preise sind reine Zahlen (Nachschub).
- Unterkünfte stehen unter Wirtschaft und gelten in allen Modi (auch Bodengewinn). Stellungsbau und Basis-Upgrades erscheinen nur im Stellungskrieg.
- MG-Visier (Reichweite) entfernt. Die KI kauft Unterkünfte nun auch im Bodengewinn gelegentlich; sie ignoriert die Freischalt-Reihenfolge.

## 7_20
- Granatentrupp: Gewehr-Reichweite zunächst −30 % (in 7_21 zurückgenommen, siehe dort).
- Stacheldraht bremst weniger: Mindesttempo im Draht 30 % → 40 %.
- MG-Trupp: Leben 62 → 80; im Graben oder auf einem MG-Platz +8 % Treffsicherheit gegen Infanterie (zusätzlich zum Graben-Bonus +25 % für alle).
- MG neu gezeichnet: Kolben mit Pistolengriff, gerippter Kühlmantel (Lewis) bzw. Wassermantel mit Mündungsverstärker (MG 08/15), kräftigeres Zweibein, Trommel mit Ring.

## 7_21
- Granatentrupp: Gewehr-Reichweite wieder wie vorher (165/172). Stattdessen rückt er mit bereiter Granate bis auf Wurfweite vor und schießt erst dort. Ohne bereite Granate, im Graben oder auf einem Grabenplatz kämpft er mit voller Gewehrreichweite und schießt zurück.

## 7_22
- Neues Hauptmenü: Kampagne fortsetzen, Neue Kampagne, Eigenes Gefecht (das bisherige Setup, mit Knopf „Hauptmenü“), Sprache.
- Kampagne: Seitenwahl (Briten/Deutsche), Kampagnenkarte mit 8 Missionen, Spielstand im Browser (localStorage).
- Missionen schalten nach einem Sieg Einheiten und Fire Support frei (Schützen → Granatentrupp → MG → Mörser → Offizier + Artillerie → Sniper + Sturmtrupp → Panzerabwehr + Anti-Tank-Artillerie + Rauch → Panzer + Gas). Schwierigkeit, Kartenlänge, Gräben, Draht und Minen steigen von Mission zu Mission.
- Erfahrung statt Nachschub für Upgrades: Abschüsse geben EP (Schütze 1, Granatier/Sturmtrupp 2, MG/Offizier/Sniper/Mörser/Panzerabwehr 3, Panzer 6), Sieg beim ersten Mal Bonus-EP. Der EP-Balken füllt Upgrade-Punkte (Schwelle 15, 25, 35 …).
- Kommando-Upgrades: der neue Baum, bezahlt mit Punkten, gilt für die ganze Kampagne und ist nur für freigeschaltete Einheiten sichtbar. Im Gefecht sind Upgrades nicht mehr kaufbar (Taste U zeigt sie nur).
- „Menü“ im Kampagnengefecht bricht das Gefecht nach zweitem Klick ab; kein Speichern mitten im Kampagnengefecht.

## 7_23
- Gräben: nicht mehr immer in der Mitte. Im Eigenen Gefecht zufällige Lage (auch nahe an einer Basis), in der Kampagne pro Mission festgelegt; Draht ebenso.
- Kartenthemen (Matsch, Wiese, Schnee, Abend, Nacht, Sand) färben Boden und Himmel; Kampagne hat feste Themen, Eigenes Gefecht zufällige.
- Kampagne jetzt 9 Missionen mit eigener Gegnerauswahl: der Gegner ist dir meist eine Freischaltung voraus (Mission 2: Gegner mit Granaten, Mission 3: mit MG usw.), Mission 7 mit früh auftauchenden Panzern, Mission 9 alles. Die Karte zeigt „Du“ und „Gegner“.
- Gräben ab Mission 2, Gräben/Draht/Minen selbst bauen erst ab Mission 5 (vorher Werkzeuge aus). Panzerabwehr ab Mission 7, Panzer, Sturmtrupp, Rauch und Gas ab Mission 9.
- KI ohne Zeitbonus in der Kampagne (Schaden, Leben, Einkommen), kein Zusatzeinkommen bei Basisangriff, Entscheidungen etwas langsamer; kein „hart“ mehr.
- Kauf-Cooldown in der Kampagne nach Preis (2,5 s + Preis/70), Basis- und Upgrade-Knöpfe im Kampagnengefecht entfernt.
- Upgrades: höchstens 2 Stufen je Upgrade, 1 Punkt je Stufe (Panzer-Upgrades 2), 15 EP je Punkt. EP-Tabelle steht auf der Kampagnenkarte.
- Panzerabwehr (Geschütz und Tankgewehr) trifft Infanterie nur noch etwa halb so oft, Splitterschaden kleiner.
- Granaten: Schaden etwas gesenkt, Splitterschaden fällt mit der Entfernung stärker ab (Nebenleute überleben eher).
- Granatentrupp: geht mit bereiter Granate geradlinig auf ein festes Ziel zu und schießt erst auf Wurfweite; erste Granate sofort verfügbar.

## 7_24
- Kampagnen-Menü: Erklärtext zu EP („1 Punkt = 15 EP …") entfernt.
- EP-Anzeige jetzt im Gefecht: über dem getöteten Gegner steht „+Nachschub  +N EP".
- Panzer-Abschuss gibt 15 EP (vorher 6).
- Kampagne auf dem Handy: kein seitliches Scrollen mehr, kompaktere Karte (kleinere Flaggen, Infobox unter der Karte), schmalere Ränder, Kopfzeile bricht um.

## 7_25
- Upgrades wie vorher: volle Stufenzahl (Nachschub 10, Sanitäter 3 usw.). Kosten steigen mit der Stufe von 1 bis 3 Punkten (Nachschub z. B. 1,1,1,1,2,2,2,3,3,3; Panzer-Upgrades ab 2).
- Granaten haben eine eigene Reichweite: 63 % der Gewehrreichweite (vorher gleich wie das Gewehr). Granatentrupps laufen bis auf Wurfweite heran, im Graben schießen sie mit dem Gewehr weiter und werfen nur, wenn der Gegner in Wurfweite kommt.
- Kampagne: Gräben und Draht sind jetzt für beide Seiten gleich (symmetrisch), auch wenn du die Deutschen spielst. Mission 1 heißt „Erste Gräben“.
- Kampagnen-KI: wertet statistisch aus, wie viele Gegner im Graben sind bzw. ob Gräben besetzt sind, und kauft dann deutlich mehr Granatentrupps, Mörser, Sturmtrupps und Sniper. Allgemein weniger reine Schützen, mehr Spezialeinheiten.
- Schwierigkeit vor Kampagnenstart (Leicht/Mittel/Schwer) auf dem Seitenauswahl-Bildschirm. Die Deutschen spielen immer eine Stufe schwerer als die Briten.

## 7_26
- Panzer-Grafik überarbeitet (nur Optik, kein Einfluss auf Spielwerte):
  - Britischer Mark IV: feinere Details nach Fotovorlage – Nietreihen und -nähte, Rahmenkante an der Kette, Schmutzband und Rostspuren, Bullaugen/Scheinwerfer hinten, Auspuff, Entgrabungsbalken und Luken auf dem Dach, Sponson mit Schräge und Klappe, Kanone mit Blende und Rohr, Bug-MG mit Kugelblende. Form, Größe und Mündungspunkte (Kanone 30/−19, Bug-MG 53,2/−33) unverändert.
  - Deutscher A7V: komplett neu gezeichnet nach Fotos und Seitenprofil (Dach mit Firstlinie, Führerhaus mit Klappen, Balkenkreuze, Seiten-MGs, Hecktür, 57-mm-Kanone und Bug-MG in der Front, durchgehende Kette ohne Lücken).
- Mündungspunkte des A7V angepasst: Kanone 57,7/−32,5, Bug-MG 47,2/−23,5 (Mündungsfeuer und Schüsse starten jetzt an der neuen Zeichnung).

## 7_27
- **Spätspiel-Kipppunkt behoben (Hauptursache):** Die KI bekam bisher mit der Spielzeit unbegrenzt Boni: Einkommen, Leben und Schaden ihrer Einheiten wuchsen mit der Zeit (nach 30 min ca. 2,6x Einkommen, 2,2x Leben und Schaden) und sie kaufte bis zu 3x schneller; wurde ihre Basis angegriffen, kamen noch 1,7x Einkommen dazu. Jetzt wächst der Zeitzuschlag nur noch bis Minute 10 und ist halb so stark (max. ca. 1,27x Einkommen, 1,2x Leben und Schaden, 1,33x Kaufrate); Einkommen bei Angriff auf ihre Basis 1,3x.
- Gegner kauft keine Unterkünfte mehr (kein größeres Einheitenlimit). Das Limit ist für beide Seiten gleich. Er baut weiter Gräben, Minen, Draht und im Stellungskrieg Basis-Ausbau.
- Nachschub-Upgrade: 15 statt 10 Stufen.
- **Basis-MG schießt zurück:** Reichweite der Basiswaffen = Waffe x1,3 plus der Abstand der Nester zur Basisfront (vorher standen die Nester weiter hinten als die Angreifer schossen). Test: eine Basis mit einem MG-Nest schoss im Testlauf 37 statt 8 Gegner ab.
- **Neuer Basis-Baum** (nur Stellungskrieg), ohne 300er-Sperre: vier eigene Äste. Befestigung (Stellungsbau, Regeneration, Befestigung); Basis-MG (MG-Schütze, Reichweite, Feuerrate, Präzision); Basis-Mörser (Mörser, Feuerrate, Präzision); Basis-Sniper (Sniper, Reichweite, Treffsicherheit). Jeder Ast ist einzeln kaufbar. Die KI baut diese Basis-Upgrades ebenfalls.
- **Granatiere:** Der Anlauf zur Wurfreichweite lief nur, wenn der Gegner näher als 215 war, das Gewehr reicht aber 264. Dadurch blieben sie stehen und schossen. Suchradius jetzt 300: Ist die Granate bereit, laufen sie bis ca. 85 % der Wurfreichweite heran. Im Graben bleiben Gewehr (volle Reichweite) und Granate (nur in Wurfweite) getrennt. Im Testlauf: Anlauf aktiv, Würfe auf 117 bis 157 Distanz.
- **Panzer-Messung (keine Änderung der Werte):** Panzer gegen Panzer ohne Upgrades und ohne KI-Boni: der deutsche gewinnt 35 von 40 Duellen (hp 750 gegen 640, Kosten 1160 gegen 1030). Der deutsche Panzer ist auf dem Papier also stärker, nicht schwächer. Anti-Tank-Artillerie gegen einen stehenden Panzer: Median 76 % der Panzer-Leben pro Salve (mit Upgrades 80 %), normale Artillerie ca. 12 bis 15 %. Das Gefühl „Panzer fast unverwundbar“ kam sehr wahrscheinlich aus den Zeit-Boni der KI (Leben und Schaden x2,2 nach 30 min), die jetzt gedeckelt sind.
- Mörser-Streuung ist jetzt pro Waffe einstellbar (für den Basis-Mörser-Upgrade).

## 7_30
- **Umbenennung**: Das Spiel heißt jetzt überall "Warfare" (Titel, Menü, Speicher-Schlüssel `warfare-*`). Alte Spielstände/Bestzeiten werden beim ersten Start automatisch übernommen. Dateien heißen jetzt `warfare7_30.html` und `PATCHNOTES_warfare.md`.
- **MG-Stand neu**: Eine MG-Kompanie im Graben mit MG-Stand zieht komplett in den Stand. MG auf den MG-Platz, die 2 Schützen auf eigene Begleitplätze direkt daneben. Sie zählt nicht mehr bei den 3 Kompanieplätzen des Grabens, Schützen belegen keine MG-Plätze mehr, "MG x/y" zählt nur echte MGs. Beim Bau des Stands wird die Kompanie aus dem normalen Graben-Reiter heraus in den Stand versetzt (kein Doppelzählen mehr). Nach "2. MG"-Ausbau bleiben die Schützen erhalten.
- **Losschicken** (Reiter / "Alle") betrifft nur die normalen Grabenplätze. Neuer Button **MG-Stand räumen** (zweimal tippen nötig, rot "OK?" für 3 s) schickt MG-Kompanien samt Schützen aus dem Stand. Fällt das MG aus, räumen die Schützen den Stand automatisch.
- **Minen-Kettenreaktion**: Jede Explosion (Artillerie, Mörser, Granate) zündet Minen jeder Seite. Eine so gezündete Mine schadet allen, egal wem sie gehört.
- Mörser: trifft eigene Truppen (Friendly Fire, war im Code bereits aktiv, Granaten bleiben ohne).
- **Anti-Tank-Artillerie** abgeschwächt (Schaden 220 → 130). Test: ohne Upgrades vorher ca. 76 % Panzer-Leben pro Salve, jetzt etwa 40 %.
- **Reichweite im Gefecht symmetrisch**: Der Reichweiten-Haltebonus der Kompanie (+12 %) galt für neue Ziele. Dadurch konnte ein Angreifer schon schießen, während der Verteidiger noch nicht durfte. Jetzt nur noch für das aktuelle Ziel, und wer beschossen wird, darf den Schützen bis 115 % der Reichweite erwidern.
- **Symbol Wirtschaft** (Nachschub): alter Militär-Lastwagen statt Münze.
- Tankgewehr 70 Schaden (7_28), deutsches AT bleibt ca. doppelt so stark wie britisches (offen).

## 7_29
- **Rauch** optisch deutlich dünner (Deckkraft 0,40 → 0,22). Treffer-Malus im Rauch unverändert.
- **KI vs. Panzer**: Ist ein gegnerischer Panzer da, bevorzugt die KI statistisch Panzerabwehr (bis ca. 3 Kompanien AT/Mörser, danach kaum noch) und spart gezielt darauf, statt sofort billige Schützen nachzukaufen. Eigener Gegenpanzer: Wartezeit 130 → 105 s, Kaufwahrscheinlichkeit 0,2 → 0,35.
- Grenze: Die KI-Einnahmen sind niedrig (AT ≈ 580), mehr als ~1–2 Panzerabwehr-Kompanien in 10 Min sind kaum finanzierbar.

## 7_28
- **Sturmtruppen** (Raider/Nahkampf) gegen Panzer praktisch wirkungslos (neue Rüstungsklasse "smg" 3 %; Test 40 s: vorher 90–200 Schaden, jetzt 10–30).
- **Tankgewehr** 165 → 70 Schaden. Deutsches AT ist trotzdem ca. doppelt so stark wie das britische Geschütz (2 Gewehre vs. 1 Geschütz) – offen, siehe Rückfrage.
- **Panzer-Upgrade "Kette"** (Panzer-Baum, 3 Stufen, +6 % Tempo pro Stufe, gilt für neu gekaufte Panzer).
- **Artillerie**: Einschlagfläche jetzt gleichmäßiger Kreis (nicht Band); Granatenverzögerung an Abschusston gekoppelt (Gas/Rauch ebenso).
- **KI**: feuert Artillerie auch auf Spieler-Panzer; baut Panzer logischer (bei wenigen verfügbaren Einheiten mehr Panzer, Cap-Fix, höhere Gewichtung teurer Einheiten bei viel Nachschub, weniger Spam der billigsten Einheit).
- **Lag**: Stacheldraht als gecachte Sprites. Gewinn im Headless-Test nur ca. 20 %; echte Handy-Ursache nicht verifiziert.
- Nicht geändert: MG-Schnellfeuer (+10 % Feuerrate real, aber akustisch kaum hörbar).

## Offen
- Moralbalken pro Seite für die Kampagne (To-do).
- MG-Schützen im Graben ohne Slot-Zählung (noch nicht umgesetzt), MG-Bonus im Graben/liegend, Animationen für die Panzerabwehr-Kanone
- Upgrades pro Modus durchgehen (nur Basis-Upgrades im Bodengewinn erledigt).
- Upgrade-Baum-Skizzen (Variante A existiert, B/B2/C verschoben).
- Neuere Sound-Tweaks der v6-Linie (Artillerie-Einschlag lauter/früher, Abschuss pro Granate, leisere Repetier-/Pistolensounds, lauteres MP) nicht in die v7-Linie portiert.
