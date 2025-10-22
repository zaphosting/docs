---
id: fivem-installels
title: "FiveM: ELS auf deinem Server installieren"
description: "Entdecke, wie du ELS-FiveM mit Carmods für ein besseres Gameplay auf deinem Server einrichtest und aktivierst → Jetzt mehr erfahren"
sidebar_label: ELS installieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Um die Resource installieren zu können, muss der [Zugang via FTP](gameserver-ftpaccess.md) eingerichtet sein.

## Vorbereitung

Lade dir zuerst die neueste [ELS-FiveM Version](https://github.com/MrDaGree/ELS-FiveM/releases/latest) runter, die du unter „Assets“ findest.

Nachdem du ELS runtergeladen hast, entpacke die Datei und öffne den Ordner „ELS-FiveM“.

## Konfiguration

Jetzt konfigurieren wir ELS-FiveM, indem wir eine Kopie der Datei `vcf.default.lua` machen und sie in `vcf.lua` umbenennen.

:::info
Tipp: Die alte `vcf.default.lua` darf nicht gelöscht werden.
:::

Weitere Einstellungen kannst du in der „config.lua“ anpassen, wir lassen sie aber erstmal auf Standard.

## Resource hochladen

Du kannst ELS-FiveM installieren, indem du die Dateien per Drag & Drop in den „resources“-Ordner hochlädst.

Nachdem der Upload fertig ist, öffne die server.cfg im server-data Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Füge den Eintrag für ELS-FiveM zu den anderen Start-Einträgen der Resources hinzu.

Danach kannst du den Server neu starten und ELS-FiveM ist im Spiel verfügbar!

## Carmods konfigurieren

Um neue Carmods zu ELS-FiveM hinzuzufügen, brauchst du zuerst die ELS-Config, die du oft im Ordner des heruntergeladenen Carmods findest. Meist heißt sie `autoname.xml`, bei uns ist es `scpdvic.xml`.

Lade diese Dateien per FTP in den „vcf“-Ordner deines ELS-FiveM-Ordners hoch.

Nachdem die Datei hochgeladen wurde, öffne die Datei `vcf.lua` im ELS-FiveM-Ordner.

:::info
Achte darauf, dass die vorherige Zeile immer mit einem Komma endet.
:::

Fertig! Dein Carmod sollte nach einem Server-Neustart ELS-aktiviert und funktionsfähig sein.

<InlineVoucher />