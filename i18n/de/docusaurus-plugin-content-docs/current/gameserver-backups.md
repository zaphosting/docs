---
id: gameserver-backups
title: 'Gameserver: Backups erstellen, herunterladen und importieren'
description: "Entdecke, wie du ganz easy manuelle oder automatische Backups für deinen Gameserver erstellst und wiederherstellst, um deine Daten zu schützen → Jetzt mehr erfahren"
sidebar_label: Backups
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Wir bieten dir die Möglichkeit, individuelle Backups per Klick zu erstellen. So kannst du Backups ganz einfach und ohne großen Aufwand anlegen und jederzeit später wieder importieren. Dieses Feature gibt’s sowohl für die Serverdateien deines Gameservers als auch für die dazugehörigen Datenbanken. Alle Backups werden auf deinem Storage-Server gespeichert, der standardmäßig 10 GB kostenlosen Speicherplatz beinhaltet. Wenn du mehr brauchst, kannst du auf Premium Storage upgraden.

Neben der manuellen Backup-Erstellung kannst du Backups auch vollautomatisch anlegen lassen. Die Backups können entweder täglich oder wöchentlich zu einer festgelegten Uhrzeit erstellt werden. Nach dem Wiederherstellen eines Backups befindet sich dein Server genau im Zustand zum Zeitpunkt der Backup-Erstellung.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="So erstellst du BACKUPS für deinen Server!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber entspannt alles aufnimmst – hier bist du richtig!"/>

<InlineVoucher />

## Backups manuell erstellen

Drücke den grünen **+** Button neben der Backup-Liste, um ein Backup manuell zu erstellen. Der Backup-Prozess startet danach automatisch.

:::info
Je nach Dateigröße deines Servers kann die Backup-Erstellung ein paar Minuten dauern!
:::

## Backups automatisch erstellen

Unten auf der Seite findest du weitere Optionen, darunter die Einstellungen für automatische Backups. Die Option **Backups automatisch erstellen** muss aktiviert sein, damit das Feature funktioniert. Außerdem musst du das Intervall einstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

Je nach Spiel ist es außerdem sinnvoll, auch die Datenbank zu sichern, da dort oft wichtige Daten wie Scores, Berechtigungen und vieles mehr gespeichert sind.

>⚠️ Ausreichend Speicherplatz ist essenziell, um regelmäßige Backups zu erstellen. Achte darauf, immer genug Speicher verfügbar zu haben.

## Backups herunterladen/löschen

Wenn du Backups herunterladen oder löschen möchtest, musst du dich per FTP mit dem Storage-Server verbinden. Hier findest du eine Anleitung zur Nutzung von FTP: [Zugriff via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

Dort kannst du die Zugangsdaten deines Storage-Servers und den aktuell genutzten Speicherplatz einsehen. Sobald du per FTP verbunden bist, kannst du die Backups herunterladen oder löschen.

<InlineVoucher />