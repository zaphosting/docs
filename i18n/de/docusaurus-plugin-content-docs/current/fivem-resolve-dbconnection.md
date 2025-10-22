---
id: fivem-resolve-dbconnection
title: "FiveM: Datenbank-Verbindungsprobleme lösen"
description: "Entdecke, wie du Verbindungsprobleme deiner FiveM Server-Datenbank behebst und die reibungslose Kommunikation mit deiner Datenbank wiederherstellst → Jetzt mehr erfahren"
sidebar_label: DB-Verbindung lösen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Oxmysql ist eine praktische Open-Source FiveM Ressource, die bereits auf deinem FiveM Gameserver vorinstalliert ist, um die Kommunikation zwischen Server und Datenbank zu ermöglichen. Während der Entwicklung kann es vorkommen, dass du Änderungen vornimmst (z.B. das Aktualisieren der Datenbank-Zugangsdaten), die eine Anpassung der oxmysql-Verbindungszeichenfolge erfordern. Beispiel für ein Datenbank-Verbindungsproblem:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

In dieser Anleitung zeigen wir dir, wie du Verbindungsprobleme zur Datenbank auf deinem FiveM Gameserver behebst, indem du die Verbindungszeichenfolge in deiner Server-Konfigurationsdatei anpasst.

<InlineVoucher />

## Automatische Methode

Öffne zuerst das Webinterface deines Servers auf der Website und navigiere zum Bereich **Einstellungen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

Scrolle auf dieser Seite ganz nach unten, wo du die **Aktionen**-Buttons findest. Klicke einfach auf den Button **MySQL-Verbindungszeichenfolge neu konfigurieren** und starte anschließend deinen Server neu, damit die Änderungen übernommen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Dadurch wird deine `server.cfg` automatisch mit den aktuellen, korrekten Zugangsdaten aktualisiert, sodass deine Datenbank wieder funktionieren sollte.

## Manuelle Methode

Um das manuell zu beheben, benötigst du Zugriff auf deine `server.cfg` Datei, in der du die Verbindungszeichenfolge mit den Zugangsdaten aus deinem Webinterface manuell anpasst. Melde dich im txAdmin Dashboard an und öffne den CFG-Editor. Öffne in einem weiteren Tab den Bereich **Tools->Datenbanken**, wo du deine aktuellen Zugangsdaten findest.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

Füge in deiner `server.cfg` folgende Zeile hinzu (oder **ersetze** sie, falls sie schon existiert) und trage deine eigenen Datenbank-Zugangsdaten aus dem Webinterface ein:

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Speichere die Datei anschließend ab und starte deinen Server neu.

## Fazit

Beim nächsten Serverstart sollte dein Gameserver wieder problemlos auf die Datenbank zugreifen können und alles wie gewohnt funktionieren. Du hast deine Datenbank-Verbindungsprobleme erfolgreich gelöst. Falls du weitere Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />