---
id: fivem_installels
title: FiveM: ELS auf Server installieren
description: Informationen, wie du ELS auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: ELS Installieren
---

## Mit FTP verbinden

Bevor die Resource installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden

## Vorbereitung

Zuerst laden wir die neuste [ELS-FiveM Version](https://github.com/MrDaGree/ELS-FiveM/releases/latest) runter, diese finden wir unter "Assets"

Nachdem wir ELS runtergeladen haben, entpacken wir zunächst die Zipdatei, nachdem wir dies getan haben, öffnen wir den "ELS-FiveM" Ordner.

## Konfiguration

Nun Konfigurieren wir ELS-FiveM, dazu erstellen wir eine Kopie von der `vcf.default.lua`, und nennen diese `vcf.lua`.

> Beachte: Die alte `vcf.default.lua` darf nicht gelöscht werden.

Es können auch weitere Einstellungen in der "config.lua" vorgenommen werden, wir lassen diese aber Standard.

## Resource hochladen

Um ELS-FiveM zu installieren, können diese über Drag&Drop in den "resources" Ordner hochgeladen werden

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/13604413/159167045-d0e3d23b-9fd9-4bf8-a7ef-eb018b71b11d.png)

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für ELS-FiveM hinzugefügt werden

Danach kann der Server neugestartet werden und ELS-FiveM ist ingame verfügbar!


## Carmods Konfigurieren

Um neue Carmods in ELS-FiveM einzufügen brauchen wir zunächst dessen ELS-Config, diese findet man oft im Ordner des runtergeladenen Carmods, meist heißen diese `autoname.xml`, in unserem Fall ist es `scpdvic.xml`.

Diese laden wir nun in den "vcf" Ordner unseres ELS-FiveM Ordners über FTP Hoch.

Nachdem die Datei hochgeladen wurde, öffnen wir nun die `vcf.lua` Datei, im ELS-FiveM Ordner.

> Gehe sicher das die vorherige zeile immer ein Komma am ende ha

Fertig! Unser Carmod sollte nach einem Neustart des Servers ELS-Aktiviert sein.
