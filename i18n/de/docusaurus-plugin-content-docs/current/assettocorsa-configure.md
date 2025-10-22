---
id: assettocorsa-configure
title: "Assetto Corsa: Deinen Server konfigurieren"
description: "Entdecke, wie du deinen Assetto Corsa Gameserver mit Custom Maps und Autos für das beste Gameplay-Erlebnis einrichtest → Jetzt mehr erfahren"
sidebar_label: Server konfigurieren
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Bevor wir den Server konfigurieren können, muss der [Zugang via FTP](gameserver-ftpaccess.md) eingerichtet sein:

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

Nachdem das eingerichtet ist, kannst du dich verbinden und den Server-Ordner öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Vorbereitung

Als Erstes öffnen wir den Assetto Corsa Ordner. Das geht, indem du Steam öffnest und in der Spieleliste mit Rechtsklick auf "Assetto Corsa" klickst.

Jetzt öffnen wir "Lokale Dateien" und greifen auf die lokalen Spieldateien zu:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Dann öffnen wir den Ordner "server", dort findest du die Datei "acServerManager", die öffnen wir.

## Map einstellen

Wir sind jetzt in der "AC Server Manager" Oberfläche. Damit kannst du Serverconfigs erstellen und verwalten. Zuerst erstellen wir eine neue Config.

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Jetzt können wir unseren Server konfigurieren. In unserem Fall wollen wir nur die Strecken & Autos anpassen, dafür öffnen wir den Tab "Tracks".

Hier kannst du deine bevorzugte Map auswählen, oben kannst du die Anzahl der Autos auf der Strecke einstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Achte darauf, nicht mehr Autos einzustellen als Slots auf deinem Server verfügbar sind, sonst startet der Server nicht.
:::

## Autos einstellen

Jetzt wechseln wir zum Tab "Cars / Entry List". Hier kannst du neue Autos hinzufügen:

Um Autos zu aktivieren, muss links der Haken gesetzt sein.

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

In der Mitte siehst du die Autos, die auf dem Grid platziert werden können. Hier kannst du die Autos in den Farben auswählen, die im Grid erscheinen sollen:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
Um mehrere Autos auszuwählen, kannst du mehrere Haken setzen, um verschiedene Autos in der Mitte hinzuzufügen.

Achte darauf, dass alle Auto-Slots gefüllt sind und nicht mehr als die verfügbaren Slots eingestellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Config hochladen

Jetzt kannst du die Config mit dem "Save"-Button speichern und mit "Export" exportieren:

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Wähle hier einen freien Ordner aus, in dem die Config-Daten gespeichert werden.

Jetzt kannst du den AC Server Manager schließen und den Ordner öffnen, in den die Configs exportiert wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Diese Configs kannst du jetzt per Drag&Drop in den "cfg"-Ordner deines Gameservers kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

Der Server kann jetzt mit der neuen Config gestartet werden.

<InlineVoucher />