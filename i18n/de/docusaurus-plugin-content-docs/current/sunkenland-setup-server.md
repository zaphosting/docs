---
id: sunkenland-setup-server
title: "Sunkenland: Sunkenland Server Setup"
description: "Entdecke, wie du deinen Sunkenland Gameserver für flüssiges Gameplay und optimale Funktion einrichtest → Jetzt mehr erfahren"
sidebar_label: Server Setup
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Sunkenland Server benötigen eine schnelle Erstkonfiguration, damit der Server korrekt funktioniert. In dieser Anleitung zeigen wir dir die notwendigen Schritte, um deinen Sunkenland Gameserver einzurichten.

<InlineVoucher />

## Vorbereitung
Bevor du loslegst, musst du Sunkenland starten und eine Welt speichern. Achte darauf, die Welt zu speichern, bevor du weitermachst.

Um später auf deine Serverdateien zugreifen zu können, benötigst du außerdem einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

## Zugriff auf deine lokalen Daten
Der erste Schritt ist der Zugriff auf deine Sunkenland Savegame-Daten.

Drücke einfach `STRG+R` auf deiner Tastatur und gib folgendes in den Windows-Ausführen-Dialog ein:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

An diesem Ort findest du einen Ordner namens `Worlds`, der alle deine lokalen Savegame-Dateien enthält. Wähle die Welt aus, die du auf dem Server hosten möchtest, oder falls neu, die Welt, die du vor dem Start dieser Anleitung erstellt hast.

:::tip
Siehst du hier nichts? Starte bitte Sunkenland und erstelle eine Welt, damit der Ordner angelegt wird.
:::

## Savegame hochladen
Im nächsten Schritt verbindest du dich per FTP mit deinem Gameserver und lädst das Savegame hoch, das du im vorherigen Schritt ausgewählt hast.

Verbinde dich mit deinem Server über einen FTP-Client mit den Zugangsdaten, die du im Webinterface deines Gameservers unter **Tools->FTP-Browser** findest. Nutze gerne unsere [Anleitung zum FTP-Zugang](gameserver-ftpaccess.md) für weitere Hilfe.

Sobald du verbunden bist, navigiere zum Sunkenland-Ordner, öffne den "AppData"-Ordner und dann den "Worlds"-Ordner. Lade hier das Savegame aus dem vorherigen Schritt hoch.

Die Ordnerstruktur sollte nun so aussehen, wobei `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` dein Savegame ist.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
Kopiere dir jetzt die GUID, die am Ende des Welt-Namens steht. Diese brauchst du im nächsten Schritt, damit dein Server funktioniert.

Die GUID sieht so aus:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Vollständiger Weltname
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Die GUID, die du brauchst
```
:::

## Server aktivieren
Zum Schluss gehst du im Webinterface deines Gameservers in den Bereich **Einstellungen**.

Suche dort die Option **World GUID**. Füge in dieses Feld die GUID ein, die du im vorherigen Schritt kopiert hast.

Drücke unbedingt den grünen **Speichern**-Button unten auf der Seite. Versuche jetzt, deinen Server zu starten – er sollte nun korrekt hochfahren.

Du hast deinen Sunkenland Gameserver erfolgreich eingerichtet.

<InlineVoucher />