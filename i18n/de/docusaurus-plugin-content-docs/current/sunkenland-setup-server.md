---
id: sunkenland-setup-server
title: "Sunkenland: Sunkenland Server Einrichtung"
description: Informationen zur Einrichtung deines Sunkenland Gameservers von ZAP-Hosting - ZAP-Hosting.com dokumentation
sidebar_label: Server Einrichtung
---

Sunkenland-Server erfordern eine Ersteinrichtung, damit der Server korrekt funktioniert. In dieser Anleitung werden wir die notwendigen Schritte zur Einrichtung deines Sunkenland Gameservers beschreiben.

## Voraussetzungen

Bevor du fortfährst, musst du zuerst Sunkenland starten und eine Welt erstellen. Stellen sicher, dass du die Welt speicherst, bevor du fortfährst.

Um später in der Anleitung auf deine Serverdateien zugreifen zu können, benötigst du außerdem einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

## Zugriff auf deine lokalen Daten

Der erste Schritt besteht darin, auf deine Sunkenland-Savegame-Daten zuzugreifen.

Drücke dazu die Tastenkombination `CTRL+R` auf deiner Tastatur und gib in der Windows-Ausführungsaufforderung folgendes ein:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

An diesem Ort wirst du einen Ordner `Worlds` sehen können, der alle deine lokalen Spielstände enthält. 

Wähle den Ordner aus, den du auf dem Server hosten möchtest.

:::tip
Siehst du hier nichts? Bitte stelle sicher, dass du Sunkenland startest und einen Spielstand erstellst, wodurch ein neuer Ordner erstellt werden sollte.
:::

## Savegame hochladen
Im nächsten Schritt verbindest du dich per FTP mit deinem Gameserver und lädst das Savegame hoch, das du im vorherigen Schritt ausgewählt hast.

Verbinde dich zunächst über einen FTP-Client mit deinem Server, indem du die Zugangsdaten verwendest, die du unter **Tools->FTP-Broswer** im Webinterface deines Gameservers findest. 

Bitte benutze unsere [Zugriff per FTP Anleitung](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.

Nach der Verbindung kannst du im Ordner "Sunkenland" den Ordner "AppData" und anschließend den Ordner "Worlds" öffnen, das Savegame aus dem vorherigen Schritt auswählen und es in diesen Ordner hochladen.

Die Ordnerstruktur sollte nun wie folgt aussehen, wobei `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` dein eigenes Savegame ist.
![image](https://github.com/zaphosting/docs/assets/13604413/40aecc3b-4a8a-4477-8c09-d56ec412883e)

:::important
An dieser Stelle sollte die GUID kopiert werden, die am Ende des Namens der Spielwelt steht. 

Diese wird im folgenden Schritt benötigt, um deinen Server funktionsfähig zu machen.

Die GUID sieht wie folgt aus:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Vollständiger Weltname
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Die benötigte GUID
```
:::

## Server aktivieren
Gehe schließlich zum Abschnitt **Einstellungen** im Webinterface deines Gameservers. 

Suche in diesem Abschnitt nach der Option **World GUID**. Trage in diesem Feld die GUID ein, die du am Ende des vorherigen Schrittes kopiert hast.

Vergesse nicht auf den grünen **Speichern** Button am unteren Rand der Seite zu drücken. Versuche nun, deinen Server zu starten, er sollte dann korrekt starten.

Du hast deinen Sunkenland Gameserver erfolgreich eingerichtet.
