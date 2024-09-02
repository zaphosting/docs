---
id: gameserver-backups
title: 'Gameserver: Backups erstellen, herunterladen und einspielen'
description: Informationen, wie du Backups für deinen Gameserver von ZAP-Hosting erstellen, herunterladen und wieder einspielen kannst -ZAP-Hosting.com Dokumentation
sidebar_label: Backups
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Wir bieten die Möglichkeit, Backups individuell per Klick zu erstellen. Dadurch können Backups kinderleicht und ohne großen Aufwand erstellt und zu einem späteren Zeitpunkt jederzeit wieder importiert werden. Dieses Feature bieten wir sowohl für die Server-Dateien deines Gameserver als auch für die dazugehörigen Datenbanken. Das Backup wird dann auf deinem Storage Server gespeichert, welcher standardmäßig 10 GB kostenlosen Speicherplatz bietet. Solltest du mehr benötigen, dann kannst du auch auf ein Premium Storage upgraden.

Neben dem manuellen Erstellen von Backups können auch Backups voll automatisiert erstellt werden. Es können entweder täglich oder wöchentlich Backups zu einer angegebenen Uhrzeit angelegt werden. Nach einer Wiederherstellung eines Backups befindet sich der Server auf dem Stand zum Zeitpunkt der Backuperstellung.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LjaeTNtckNYP5RP/preview" title="Wie du BACKUPS für deinen Server erstellst!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />

## Backup manuell erstellen

Um ein Backup manuell zu erstellen, muss der grüne **+** Button neben der Backup-Liste gedrückt werden. Im Anschluss startet der Backupvorgang. 

:::info
Je nach Speichergröße des Servers kann das Anlegen des Backups durchaus ein paar Minuten dauern!
:::

## Backup automatisiert erstellen

Unten am Ende der Seite befinden sich weitere Optionen, wo unter anderem auch die Einstellungen für automatisierte Backups zu finden. Die Option **Backups automatisch erstellen** muss aktiviert sein, damit die Funktion aktiv ist. Zudem muss das Intervall gesetzt werden. 

![image](https://screensaver01.zap-hosting.com/index.php/s/rMW42qd2joy4yZ6/preview)

Je nach Spiel ist es oftmals auch zu empfehlen die Datenbank mitzusichern, da dort oftmals wichtige Daten wie Spielstände, Rechte und vieles mehr gespeichert werden. 

:::info
Ausreichend Speicherplatz ist essenziell, damit regelmäßige Backups erstellt werden können. Stelle daher sicher, dass du immer ausreichend Speicherplatz hast. 
:::




## Backups herunterladen/löschen

Um Backups herunterladen oder zu löschen, muss man sich per FTP mit dem Storage Server verbinden. Eine Anleitung zum Benutzen von FTP findest du hier: [FTP-Zugang](gameserver-ftpaccess.md)

![image](https://screensaver01.zap-hosting.com/index.php/s/Px9jEtoxQoPkeFs/preview)

![image](https://screensaver01.zap-hosting.com/index.php/s/Bi8YbGNejsw97an/preview)

Dort angelangt, findet man die Zugangsdaten zum Storage Server und den aktuell belegten Speicherplatz. Wenn du per FTP verbunden bist, dann findest du dort die Backups und kannst sie darüber herunterladen oder löschen.
