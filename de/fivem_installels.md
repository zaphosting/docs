---
id: fivem_installels
title: FiveM: ELS auf Server installieren
description: Informationen, wie du ELS auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: ELS Installieren
---

## Mit FTP verbinden

Bevor die Resource installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden

## Vorbereitung

Zuerst laden wir die neuste [ELS-FiveM Version](https://github.com/MrDaGree/ELS-FiveM/releases/latest) runter, diese finden wir unter "Assets":

![](https://screensaver01.zap-hosting.com/index.php/s/q7ftdNXaZybDEtg/preview)

Nachdem wir ELS runtergeladen haben, entpacken wir zunächst die Zipdatei, nachdem wir dies getan haben, öffnen wir den "ELS-FiveM" Ordner, dieser sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/a2pm84dy77izHZg/preview)

## Konfiguration

Nun Konfigurieren wir ELS-FiveM, dazu erstellen wir eine Kopie von der `vcf.default.lua`, und nennen diese `vcf.lua`.

> Beachte: Die alte `vcf.default.lua` darf nicht gelöscht werden.

Es können auch weitere Einstellungen in der "config.lua" vorgenommen werden, wir lassen diese aber Standard.

## Resource hochladen

Um ELS-FiveM zu installieren, können diese über Drag&Drop in den "resources" Ordner hochgeladen werden

![](https://screensaver01.zap-hosting.com/index.php/s/PeCsrNmqDgPmaTn/preview)

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/6LjYGCLFyLJBaS5/preview)

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für ELS-FiveM hinzugefügt werden:


![](https://screensaver01.zap-hosting.com/index.php/s/bqqwkH6d6rX4kcq/preview)


Danach kann der Server neugestartet werden und ELS-FiveM ist ingame verfügbar!


## Carmods Konfigurieren

Um neue Carmods in ELS-FiveM einzufügen brauchen wir zunächst dessen ELS-Config, diese findet man oft im Ordner des runtergeladenen Carmods, meist heißen diese `autoname.xml`, in unserem Fall ist es `scpdvic.xml`.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCsWyTj3gZaZc6/preview)

Diese laden wir nun in den "vcf" Ordner unseres ELS-FiveM Ordners über FTP Hoch:

![](https://screensaver01.zap-hosting.com/index.php/s/c8CRmDdW3KDt5Rj/preview)

Nachdem die Datei hochgeladen wurde, öffnen wir nun die `vcf.lua` Datei, im ELS-FiveM Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/6fDTMeDLc5DWeEC/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/2W6SG2eoDq9g9Yo/preview)

Hier fügen wir nun unsere neue Datei wie folgt ein:

![](https://screensaver01.zap-hosting.com/index.php/s/tirH3rHBiq79Rz9/preview)

> Gehe sicher das die vorherige zeile immer ein Komma am ende ha

Fertig! Unser Carmod sollte nach einem Neustart des Servers ELS-Aktiviert sein.
