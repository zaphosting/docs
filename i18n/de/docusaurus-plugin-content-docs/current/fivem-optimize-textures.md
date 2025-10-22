---
id: fivem-optimize-textures
title: "FiveM: Texturen optimieren"
description: "Entdecke, wie du GTA5 Mod-Texturen optimierst, um die Größe zu reduzieren und die Performance zu verbessern → Jetzt mehr erfahren"
sidebar_label: Texturen optimieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Willst du deine GTA5 Mod-Texturen optimieren und ihre Größe reduzieren, ohne an Qualität zu verlieren? In dieser Anleitung zeigen wir dir, wie du Texturen effektiv auf unter 16MB komprimierst. Mit ein paar einfachen Schritten und den richtigen Tools kannst du die Performance deines Spiels verbessern und Speicherplatz sparen. Das hilft auch, potenzielle Probleme wie diese zu vermeiden:

```
Asset hevo/hevo.ytd verwendet 166.0 MiB physischen Speicher. Überdimensionierte Assets können und werden zu Streaming-Problemen führen (Modelle laden/rendern nicht, bekannt als 'Texture Loss', 'City Bug' oder 'Streaming isn't great').
```

<InlineVoucher />


## Vorbereitung

Bevor du loslegst, stelle sicher, dass du die nötigen Tools heruntergeladen und installiert hast. Lade **OpenIV** und **XnResize** von den offiziellen Seiten runter und folge den Installationsanweisungen. Diese Tools brauchst du, um die Texturen zu bearbeiten:

- **OpenIV**  [(Download)](https://openiv.com/)
- **XnResize** [(Download)](https://www.xnview.com/en/xnresize/#downloads)



## Konfiguration
Sobald du die Tools installiert hast, kannst du mit der Bearbeitung der Texturen starten. Finde die .ytd Datei deines Mods in OpenIV und öffne sie, um Zugriff auf die Texturen zu bekommen.

![OpenIV Texture Dictionary](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

In OpenIV findest du unten links die Option „Export all textures“. Klick darauf, um alle Texturen deines Mods zu exportieren. Speichere sie in einem Ordner innerhalb deines Fahrzeug-Mod-Verzeichnisses, zum Beispiel unter „textures“.



## Optimierung

Jetzt, wo du alle Texturen exportiert hast, geht’s ans Bearbeiten und Verkleinern. Starte XnResize auf deinem PC. Zieh alle exportierten .dds Dateien in das XnResize-Fenster. Du solltest jetzt alle deine Texturen in der App sehen. Im Tab „Action“ von XnResize stellst du Breite und Höhe auf Prozent ein und reduzierst die Größe der Texturen auf 50 % der Originalgröße. Achte darauf, das Seitenverhältnis beizubehalten.

![XnResize Action Tab](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



Im Tab „Output“ wählst du einen Zielordner für die bearbeiteten Texturen, z.B. „textures_resized“, und stellst das Format auf DDS - Direct Draw Surface ein.

![XnResize Output Tab](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Fazit
Nachdem du alle Texturen bearbeitet und verkleinert hast, ersetze die alten Texturen in deinem Mod durch die neuen, komprimierten Versionen. Du wirst sehen, dass die komprimierte Texturgröße deutlich kleiner ist, was nicht nur Speicherplatz spart, sondern auch die Performance deines Spiels verbessert.

| **Beschreibung**            | **Original Texture Dictionary** | Komprimiertes Texture Dictionary | X Mal besser      |
| :-------------------------- | :------------------------------ | :------------------------------ | :---------------- |
| **Komprimierte Größe**      | 11,8 MB                        | 1,23 MB                         | 9,6x              |
| **Unkomprimierte Größe**    | 164 MB                        | 11 MB                          | 14,9x             |
| **Virtueller Speicher**     | 0,05 MiB                      | 0,05 MiB                       | -                 |
| **Physischer Speicher**     | 166,00 MiB                    | 10,69 MiB                      | 15,5x             |

Vergiss nicht, die Texturen im Spiel zu testen. Falls Probleme auftreten, kannst du einzelne Texturen jederzeit auf die Originalgröße zurücksetzen oder die originalen .dds Dateien verwenden.

<InlineVoucher />