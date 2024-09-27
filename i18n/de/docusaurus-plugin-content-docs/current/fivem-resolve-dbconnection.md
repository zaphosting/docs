---
id: fivem-resolve-dbconnection
title: "FiveM: Datenbankverbindung auflösen"
description: Informationen darüber, wie man Probleme mit der oxmysql-Datenbankverbindung auf einem FiveM von ZAP-Hosting behebt - ZAP-Hosting.com Dokumentation
sidebar_label: Resolve DB Connection
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Oxmysql ist eine nützliche Open-Source-FiveM-Ressource, die auf deinem FiveM-Server vorinstalliert ist, um die Kommunikation zwischen dem Server und deiner Datenbank zu ermöglichen. Während der Entwicklung kann es vorkommen, dass du Änderungen vornimmst (z.B. neue Datenbankanmeldedaten), die eine Änderung des oxmysql-Verbindungsstrings erfordern. Beispiel für ein Problem mit der Datenbankverbindung:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

In diese Anleitung werden wir untersuchen, wie du Probleme mit der Datenbankverbindung auf deinem FiveM Server durch die Anpassung des Verbindungsstrings in deiner Serverkonfigurationsdatei lösen kannst.

<InlineVoucher />

## Automatische Methode

:::info
Diese Methode ist derzeit nur für die Spielversion **FiveM: txAdmin** verfügbar. Wenn du eine andere Spielversion verwendest, gehe zum nächsten Abschnitt über, in dem beschrieben wird, wie du den Verbindungsstring manuell anpasst.
:::

Öffne zunächst das Webinterface deines Servers auf der Website und gehe in den Bereich **Einstellungen**.

![](https://screensaver01.zap-hosting.com/index.php/s/JW4XHRd8d2n7Ljm/preview)

Scrolle auf dieser Seite ganz nach unten, wo du die Schaltflächen **Aktionen** findest. Benutze einfach die Schaltfläche **Reconfigure mysql connection string** und starte deinen Server neu, um sicherzustellen, dass die Änderungen verarbeitet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Dadurch wird deine Datei `server.cfg` automatisch mit den korrekten aktuellen Anmeldedaten aktualisiert, so dass deine Datenbank wieder funktionieren sollte.

## Manuelle Methode

Um das Problem manuell zu beheben, brauchst du Zugang zu deiner Datei `server.cfg`, in der du den Verbindungsstring manuell mit den Anmeldedaten anpasst, die du in deinem Webinterface angegeben hast.

Öffne zunächst das Webinterface deines Servers und gehe in den Bereich **Einstellungen->Configs**. Auf dieser Seite kannst du das Bearbeitungssymbol verwenden, um einen Webeditor zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/W7JLKJoSFHy4kif/preview)

Gehe in einem anderen Tab zum Bereich **Tools->Datenbanken**, wo du deine bestehenden Anmeldedaten einsehen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/TyBqiixBS5wd6bP/preview)

Füge in deine Datei `server.cfg` die folgende Zeile ein (oder  ersetze sie, falls sie bereits existiert) und füge die Details mit deinen eigenen Datenbankzugangsdaten aus dem Webinterface ein.

```
set mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=fivem"
```

:::tip
Die Server/IP Adresse sollte in den `host` Abschnitt und der `port` sollte auf 3306 belassen werden.
:::

Wenn du das erledigt hast, speichere die Datei und starte deinen Server neu.

![](https://screensaver01.zap-hosting.com/index.php/s/MdanaTBPGLnkQX5/preview)

Wenn der Server das nächste Mal startet, sollte dein Server wieder auf deine Datenbank zugreifen können und somit voll funktionsfähig sein. Du hast die Probleme mit der Datenbankverbindung erfolgreich behoben.