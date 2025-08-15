---
id: dedicated-windows-installmysql
title: "Dedicated Server: Installation von MySQL Server"
description: Informationen, wie du einen MySQL Server auf deinen Windows Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: MySQL Server Installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein MySQL Server wird für verschiedenste Anwendungsgebiete benötigt und kann zum Beispiel wichtige Daten für einen Gameserver oder eine Website enthalten. Im Folgenden richtest du deinen eigenen MySQL Datenbankserver auf deinem Windows Dedicated Server ein.

<InlineVoucher />

## Installation

Zu Beginn verbindest du dich via Remotedesktopverbindung auf deinem Dedicated Server und lädst dir dort die
aktuellste Version von MariaDB herunter, diese verwenden wir als unseren Datenbankserver: [MariaDB Download](https://mariadb.org/download/?t=mariadb).

Das heruntergeladene Archiv entpackst du mit WinRAR oder 7Zip und startest die darin befindliche Installationsdatei mit einem Doppelklick: 

![](https://screensaver01.zap-hosting.com/index.php/s/TaDPSzNDDcaA2dt/preview)

Im Anschluss navigierst du durch das Klicken auf **Next** durch den Installationsvorgang, bis du zur Eingabe des root Passwort aufgefordert wirst:

![](https://screensaver01.zap-hosting.com/index.php/s/rdPgYifLTcPNq8j/preview)

Dort legst du nun das Hauptpasswort für den Zugang zu deinem Datenbankserver fest, achte bitte unbedingt darauf, dass du hier ein sicheres Passwort verwendest und dass niemand außer dir dieses Passwort kennt!

:::info
WICHTIG! Möchtest du von Außen via Navicat, HeidiSQL oder mithilfe eines anderen Tool auf die Datenbank zugreifen können muss zusätzlich der Punkt **Enable access from remote machins for root user** aktiviert werden! Aus Sicherheitsgründen ist dies jedoch generell nicht zu empfehlen.
:::

Im Anschluss klickst du auch hier auf **Next** bis du zum Ende der Installation gelangst, dort klickst du dann abschließend auf **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/fnwYx699HKiNfB7/preview)

Dein Datenbankserver ist jetzt online und einsatzbereit!

## Externen Zugriff konfigurieren

Wenn du während der Installation den Zugriff von Außen (Enable access from remote machins for root user" aktiviert hast, musst du zusätzlich noch den MySQL Port **3306** in der Windows-Firewall freigeben, dazu öffnest du diese und legst dort eine neue Regel an.
Dafür findest du eine seperate Anleitung: [Portweiterleitung (Firewall)](vserver-windows-port.md)

Damit ist dein MySQL Server nun auch von außen erreichbar. 



## Abschluss

Glückwunsch, du hast den MySQL Server erfolgreich installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
