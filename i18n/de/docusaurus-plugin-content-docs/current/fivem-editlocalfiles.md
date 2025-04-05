---
id: fivem-editlocalfiles
title: "FiveM: Locales Dateien (Sprachvariablen)"
description: Informationen, wie du die Locales-Dateien deines FiveM-Server mit ESX von ZAP-Hosting bearbeiten kannstkannst - ZAP-Hosting.com Dokumentation
sidebar_label: Locales Dateien (Sprachvariablen)
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Möchtest du die Sprachvariablen einer Ressource ändern oder der Ressource weitere Sprachen hinzufügen, die vielleicht noch nicht existieren? Mit den Locale-Dateien kannst du die Sprachvariablen deiner gewünschten Ressource anpassen.

<InlineVoucher />



## Locales Files finden
Die Locale-Dateien müssen mit einem FTP-Client bearbeitet werden. Wenn die Nutzung von FTP für dich neu ist, empfehlen wir dir, zuerst die [FTP- Zugriff](gameserver-ftpaccess.md) Anleitung zu lesen. Sobald du verbunden bist, navigiere zum Verzeichnis der ESX-Ressource, die du bearbeiten möchtest. Öffne das Verzeichnis locales im Ressourcenverzeichnis.

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

In dem Verzeichnis locales findest du alle Sprachdateien, die für diese Ressource existieren. Von hier aus kannst du entweder eine bestehende Datei bearbeiten oder eine bestehende Datei mit einem neuen Namen für eine neue Sprache kopieren, die du dann bearbeiten kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)



## Locales File bearbeiten

Du kannst nun den Inhalt der einzelnen Sprachvariablen in der geöffneten Locale-Datei anpassen. Der Inhalt der Sprachvariablen befindet sich hinter dem Gleichheitszeichen innerhalb der Anführungszeichen. Passe den Inhalt nach deinen Wünschen an und speichere die Änderungen am Ende.

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Locale (Sprache) festlegen

Die verwendete Sprache kann über die Konfigurationsdatei config.lua im Ressourcenverzeichnis festgelegt werden. Dazu muss der Wert von Config.Locale = GetConvar('esx:locale', 'en') angepasst werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Abschluss

Glückwunsch, vorausgesetzt, dass du alle Schritte befolgt hast, hast du die Locale-Datei deiner Ressource erfolgreich bearbeitet. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
