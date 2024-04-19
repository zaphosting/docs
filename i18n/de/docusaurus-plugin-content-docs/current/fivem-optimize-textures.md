---
id: fivem-optimize-textures
title: "FiveM: Texturen optimieren"
description: Wie du Texturen bei deinem FiveM Server von ZAP-Hosting optimieren kannst - ZAP-Hosting.com - Dokumentation
sidebar_label: Texturen optimieren
---



## Einführung
Du möchtest deine GTA5-Mod-Texturen optimieren und ihre Größe reduzieren, ohne dabei auf Qualität verzichten zu müssen? In dieser Anleitung zeigen wir dir, wie du Texturen effektiv unter 16MB komprimieren kannst. Mit ein paar einfachen Schritten und den richtigen Tools kannst du die Leistung deines Spiels verbessern und Speicherplatz sparen. Ebenfalls vermeidest du so mögliche Probleme, wie zum Beispiel:

```
Asset hevo/hevo.ytd uses 166.0 MiB of physical memory. Oversized assets can and will lead to streaming issues (models not loading/rendering, commonly known as 'texture loss', 'city bug' or 'streaming isn't great'). 
```



## Vorbereitung

Bevor du beginnst, stelle sicher, dass du die notwendigen Tools heruntergeladen und installiert hast. Lade dir dafür **OpenIV** und **XnResize** von den offiziellen Website herunter und folge den Installationsanweisungen. Diese Tools werden für die Bearbeitung der Texturen verwendet:

- **OpenIV**  [(Download) ](https://openiv.com/)
- **XnResize** [(Download)](https://www.xnview.com/en/xnresize/#downloads)



## Konfiguration
Sobald du die notwendigen Tools heruntergeladen und installiert hast, kannst du mit der Bearbeitung der Texturen beginnen. Suche die .ytd Datei deines Mods in OpenIV und öffne diese, um auf die Texturen zugreifen zu können. 

![OpenIV Texture Dictionary](https://forum.cfx.re/uploads/default/optimized/4X/d/9/1/d91c308f849ed326be0324695c3d0897d486ef01_2_505x271.png) 

In OpenIV findest du die Option „Export all textures“ unten links. Klicke darauf, um alle Texturen deiner Mod zu exportieren. Speichere sie in einem Ordner innerhalb deines Fahrzeugmod-Verzeichnisses, zum Beispiel unter „textures“. 

## Optimierung

Jetzt, wo du alle Texturen exportiert hast, ist es Zeit, sie zu bearbeiten und die Größe anzupassen. Starte XnResize auf deinem Computer. Ziehe alle exportierten .dds Dateien in das XnResize-Fenster. Du solltest nun alle deine Texturen innerhalb der Anwendung sehen. Stelle im „Action“-Tab von XnResize die Breite und Höhe auf Prozent und reduziere die Größe der Texturen auf 50% ihrer Originalgröße. Achte darauf, das Verhältnis beizubehalten.

![XnResize Action Tab](https://forum.cfx.re/uploads/default/original/4X/4/c/f/4cfccc99c913b0072787f90a705ae383ba482368.png)



Wähle im „Output“-Tab einen Zielordner für die bearbeiteten Texturen, zum Beispiel „textures_resized“, und stelle das Format auf DDS - Direct Draw Surface ein.

![XnResize Output Tab](https://forum.cfx.re/uploads/default/original/4X/6/9/b/69b93dac616de807d4496f53363f1792646046b5.png)



## Schlussfolgerung
Nachdem du alle Texturen bearbeitet und die Größe angepasst hast, ersetze die alten Texturen in deiner Mod durch die neuen, komprimierten Versionen. Du wirst feststellen, dass die komprimierte Texturgröße signifikant geringer ist, was nicht nur Speicherplatz spart, sondern auch die Leistung deines Spiels verbessern kann. 

| **Beschreibung**            | **Original Texturverzeichnis** | Verkleinertes Texturverzeichnis | Um das X-Fache besser |
| :-------------------------- | :----------------------------- | :------------------------------ | :-------------------- |
| **Komprimierte Größe**      | 11.8 MB                        | 1.23 MB                         | 9.6x                  |
| **Unkomprimierte Größe**    | 164 MB                         | 11 MB                           | 14.9x                 |
| **Virtueller Speicher**     | 0.05 MiB                       | 0.05 MiB                        | -                     |
| **Physikalischer Speicher** | 166.00 MiB                     | 10.69 MiB                       | 15.5x                 |

Vergiss nicht, die Texturen im Spiel zu testen. Sollten Probleme auftreten, kannst du immer einzelne Texturen auf ihre ursprüngliche Größe zurücksetzen oder die originalen .dds Dateien verwenden.



