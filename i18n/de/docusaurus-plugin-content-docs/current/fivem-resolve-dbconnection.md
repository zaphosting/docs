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

Öffne zunächst das Webinterface deines Servers auf der Website und gehe in den Bereich **Einstellungen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JDat2JBPe2ddQ4w/download)

Scrolle auf dieser Seite ganz nach unten, wo du die Schaltflächen **Aktionen** findest. Benutze einfach den Button **Reconfigure MySQL connection string** und starte deinen Server neu, um sicherzustellen, dass die Änderungen verarbeitet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Dadurch wird deine Datei `server.cfg` automatisch mit den korrekten aktuellen Anmeldedaten aktualisiert, so dass deine Datenbank wieder funktionieren sollte.

## Manuelle Methode

Um das Problem manuell zu beheben, brauchst du Zugang zu deiner Datei `server.cfg`, in der du den Verbindungsstring manuell mit den Anmeldedaten anpasst, die du in deinem Webinterface angegeben hast. Melden dich im txAdmin Interface an und öffne den CFG-Editor. Gehe in einem anderen Tab zum Bereich **Tools->Datenbanken**, wo du deine bestehenden Anmeldedaten einsehen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/TyBqiixBS5wd6bP/preview)

Füge in deine Datei `server.cfg` die folgende Zeile ein (oder  ersetze sie, falls sie bereits existiert) und füge die Details mit deinen eigenen Datenbankzugangsdaten aus dem Webinterface ein.

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:PORT/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Sobald dies abgeschlossen wurde, speichere die Datei und starte deinen Server neu.



## Abschluss

Wenn der Server das nächste Mal startet, sollte dein Server wieder auf deine Datenbank zugreifen können und somit voll funktionsfähig sein. Du hast die Probleme mit der Datenbankverbindung erfolgreich behoben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂