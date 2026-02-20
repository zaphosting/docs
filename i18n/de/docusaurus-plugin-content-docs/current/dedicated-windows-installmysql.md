---
id: dedicated-windows-installmysql
title: "MySQL auf einem Windows Server einrichten – Zuverlässige Datenbanken deployen und verwalten"
description: "Lerne, wie du deinen eigenen MySQL-Datenbankserver auf einem Windows Dedicated Server einrichtest und absicherst für zuverlässiges Datenmanagement → Jetzt mehr erfahren"
sidebar_label: MySQL installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein MySQL-Server wird für verschiedene Anwendungen benötigt und kann wichtige Daten enthalten, zum Beispiel für einen Gameserver oder eine Website. Im Folgenden erklären wir dir, wie du deinen eigenen MySQL-Datenbankserver auf deinem Windows Dedicated Server einrichtest.



## Installation

Zuerst verbindest du dich per Remote Desktop Verbindung mit deinem Server und lädst die neueste Version von MariaDB herunter, die für den Datenbankserver verwendet wird: [MariaDB Download](https://mariadb.org/download/?t=mariadb). 

Entpacke das heruntergeladene Archiv mit WinRAR oder 7Zip und starte die Installationsdatei mit einem Doppelklick: 

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Danach klickst du dich durch den Installationsprozess mit **Next**, bis du aufgefordert wirst, das Root-Passwort einzugeben:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Hier kannst du das Master-Passwort für den Zugriff auf deinen Datenbankserver festlegen. Achte darauf, ein sicheres Passwort zu wählen, das niemand sonst kennt!

:::info
WICHTIG! Wenn du von extern mit Navicat, HeidiSQL oder einem anderen Tool auf die Datenbank zugreifen möchtest, musst du die Option **Enable access from remote machines for root user** aktivieren! Aus Sicherheitsgründen wird das generell nicht empfohlen.
:::

Anschließend klickst du weiter auf **Next**, bis du ans Ende der Installation kommst, dort dann auf **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Dein Datenbankserver ist jetzt online und einsatzbereit!

## Konfiguration des externen Zugriffs

Wenn du während der Installation „Enable access from remote machines for root user“ aktiviert hast, musst du auch den MySQL-Port **3306** in der Windows-Firewall freigeben. Öffne dazu die Firewall und erstelle dort eine neue Regel.
Eine Anleitung zum Weiterleiten von Ports in der Firewall findest du hier:
[Portweiterleitung (Firewall)](vserver-windows-port.md)

Jetzt kannst du von extern auf deinen MySQL-Server zugreifen!



## Fazit

Glückwunsch, du hast den MySQL-Server erfolgreich installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


