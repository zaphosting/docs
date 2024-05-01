---
id: minecraft-worlds
title: "Minecraft: Server Welten verwalten"
description: Informationen, wie du mehrere Welten auf deinem Minecraft-Server von ZAP-Hosting verwalten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Welten verwalten
---

Hier gelangst du zu unseren Minecraft Servern: [Minecraft Server mieten](https://zap-hosting.com/de/minecraft-server-mieten/)

## Verbindung aufbauen

Deine Welt kannst du über ein Programm wie FileZilla Client oder WinSCP verwalten. In unserem Beispiel benutzen wir FileZilla.
Stelle mit dem Programm deiner Wahl einfach eine Verbindung her, die Daten dafür findest du links im Dashboard unter "FTP-Browser".
Sobald du angemeldet bist, sollte es so aussehen:

![image](https://user-images.githubusercontent.com/26007280/189978884-df871f60-74f5-4413-9b12-b65c2135941e.png)

Der Ordner "world" ist der Standart Ordner. Der Name von diesem wird in der server.properties Datei festgelegt.
Diese Datei liegt da, wo auch der "world" Ordner liegt. Der Wert kann durch das Bearbeiten von der Zeile "level-name" geändert werden.
Wird ein Name eingetragen, der so nicht als Ordner existiert, wird eine neue Welt generiert.

## Spigot/PaperMC/Bukkit Besonderheiten

Bei Spigot, PaperMC & Bukkit gibt es eine Besonderheit. Anders als bei Vanilla Minecraft haben die beiden Dimensionen "Nether" und "The End" ihren eigenen Ordner. Wenn du also deine Welt komplett neu erstellen möchtest, musst du die beiden Dimensions-Ordner auch noch mit entfernen. Im Weiteren kannst du "Weltname" immer mit dem Namen deiner Welt austauschen. Diese lauten:


```
WeltName_nether
```
und
```
WeltName_the_end
```

Sollten beim Importieren von einer eigenen Welt Fehler im Nether oder End auftauchen, kannst du diese manuell in ihre richtigen Ordner schieben. Lösche davor den Inhalt von WeltName_nether\ und WeltName_the_end\

Verschiebe nun alle Dateien aus diesen Ordnern in die neuen Ordner.

Nether:

WeltName\Dim-1\ -> WeltName_nether\Dim-1\

The End:

WeltName\Dim1\  -> WeltName_the_end\Dim1\

Danach sollten diese dann auch korrekt geladen werden.

## Welt neu erstellen

Fahre deinen Server runter, und verbinde dich per FTP. Lösche jetzt einfach den Weltordner oder benenne ihn um. Möchtest du gleichzeitig noch Einstellungen wie den Seed einstellen, kannst du diese in der "server.properties" durchführen. Diese werden nach dem Starten angewendet. Starte deinen Server. Du solltest jetzt eine frische Welt haben.

## Welt ersetzen

Fahre deinen Server runter, und verbinde dich per FTP. Lösche nun einfach den Alten Welt Ordner oder bennene ihn um. Lade jetzt einfach deine vorhandene Welt hoch, öffne die server.properties und gebe dort den Namen der Welt ein. Starte nun deinen Server. Du solltest nun deine Welt sehen.

## Welt sichern

Fahre deinen Server runter, und verbinde dich per FTP. Das Sichern ist ganz einfach, lade einfach deinen Welten Ordner herunter. 
In deinem Weltordner ist dein ganzes Inventar gespeichert, plus natürlich alles was du gebaut hast.
