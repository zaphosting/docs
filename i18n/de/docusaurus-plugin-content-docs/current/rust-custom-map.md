---
id: rust-custom-map
title: "Rust: Eigene Map auf deinem Server nutzen"
description: "Lerne, wie du eine eigene Map auf deinem Rust-Server mit der Level URL Einstellung konfigurierst und startest → Jetzt mehr erfahren"
sidebar_label: Eigene Map
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eigene Maps ermöglichen Rust-Serverbetreibern, einzigartige Spielerlebnisse zu schaffen, die über die Standard-Prozedural-Maps hinausgehen. Viele Communities nutzen eigene Maps, um neue Monumente, veränderte Terrain-Layouts, spezielle Events oder komplett neu gestaltete Umgebungen einzuführen.

Diese Maps werden meist mit Tools wie **RustEdit** erstellt und über Plattformen wie **Lone Design**, **Codefling** oder Community-Map-Repositories verteilt. Sobald du eine Map-Datei oder einen Download-Link hast, kannst du diese direkt in deinen Servereinstellungen konfigurieren.

<InlineVoucher />



## Vorbereitung

Bevor du eine eigene Map konfigurierst, brauchst du eine gültige **Map-Download-URL**. Eigene Maps werden normalerweise auf Map-Distributionsplattformen gehostet oder von den Map-Erstellern bereitgestellt.

Die URL verweist typischerweise auf eine `.map`-Datei oder ein herunterladbares Map-Paket. Achte darauf, dass der Link öffentlich zugänglich ist, damit der Rust-Server die Map beim Start herunterladen kann. Beispiel für eine Map-URL:

```
https://example-map-host.com/maps/custommap.map
```



## Konfiguration

Um eine eigene Map auf deinem Rust-Server zu konfigurieren, öffne dein **Gameserver-Management-Panel** und navigiere zu den **Einstellungen**.

Suche das Konfigurationsfeld mit dem Namen **Level URL**. Diese Einstellung erlaubt es dem Server, beim Start eine eigene Rust-Map herunterzuladen und zu laden. Füge deine eigene Map-URL in das Feld **Level URL** ein. Zum Beispiel:

```
https://example-map-host.com/maps/custommap.map
```

Nachdem du die URL eingetragen hast, speichere die Einstellungen im Panel. Beim nächsten Serverstart lädt Rust automatisch die Map von der angegebenen URL und lädt sie, anstatt eine prozedurale Map zu generieren.

Falls deine eigene Map zusätzliche Konfigurationsparameter benötigt (z.B. bestimmte Seeds oder Weltgrößen), werden diese normalerweise vom Map-Ersteller bereitgestellt und müssen eventuell ebenfalls in der Serverkonfiguration ergänzt werden.

Nach dem Speichern der Konfiguration **starte den Server neu**, damit die eigene Map heruntergeladen und geladen werden kann.



## Wichtige Hinweise

Eigene Maps müssen mit der Rust-Server-Version kompatibel sein, die du nutzt. Ist die Map-Datei veraltet oder beschädigt, kann der Server nicht starten oder wechselt zurück zur prozeduralen Map.

Große eigene Maps können außerdem die Serverstartzeit verlängern, da der Server die Map erst herunterladen und vorbereiten muss, bevor sie für Spieler verfügbar ist.

Wenn sich Spieler nach dem Wechsel der Map nicht verbinden können, überprüfe, ob die Map-URL korrekt und aus dem Internet erreichbar ist.



## Fazit

Glückwunsch! Du hast erfolgreich eine eigene Map für deinen Rust-Server konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂

<InlineVoucher />