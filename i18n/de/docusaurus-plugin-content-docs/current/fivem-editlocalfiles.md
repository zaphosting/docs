---
id: fivem-editlocalfiles
title: "FiveM: Locales Dateien (Sprachvariablen)"
description: "Lerne, wie du die Sprachen deiner Resource anpasst und neue hinzufügst für ein persönliches Erlebnis → Jetzt mehr erfahren"
sidebar_label: Locales Dateien (Sprache)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Willst du die Sprachvariablen einer Resource ändern oder weitere Sprachen hinzufügen, die vielleicht noch nicht existieren? Die Locales Dateien ermöglichen es dir, die Sprachvariablen deiner gewünschten Resource anzupassen. 

<InlineVoucher />



## Locales Dateien finden

Die Locales Dateien müssen mit einem FTP-Client bearbeitet werden. Wenn du neu im Umgang mit FTP bist, empfehlen wir dir zuerst unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung zu lesen. Sobald du verbunden bist, navigiere zum ESX Resource-Verzeichnis der Resource, die du bearbeiten möchtest. Öffne dort das locales Verzeichnis. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

Im locales Verzeichnis findest du alle Sprachdateien, die für diese Resource existieren. Von hier aus kannst du entweder eine bestehende Datei bearbeiten oder eine kopieren und mit einem neuen Namen für eine neue Sprache anlegen, die du dann bearbeiten kannst. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Locales Datei bearbeiten

Jetzt kannst du den Inhalt der einzelnen Sprachvariablen in der geöffneten Locale-Datei anpassen. Der Inhalt der Sprachvariablen steht hinter dem Gleichheitszeichen in den Anführungszeichen. Passe den Inhalt nach deinem Geschmack an und speichere die Änderungen am Ende ab. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Sprache (Locale) einstellen

Die verwendete Sprache kannst du über die Konfigurationsdatei `config.lua` im Resource-Verzeichnis festlegen. Passe dazu den Wert von `Config.Locale = GetConvar('esx:locale', 'en')` an. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Abschluss

Glückwunsch, wenn du alle Schritte befolgt hast, hast du erfolgreich die Locale-Datei deiner Resource bearbeitet. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />