---
id: fivem-esx-changejobgarages
title: "FiveM: Job-Garagen - Autos hinzufügen"
description: Informationen, wie du Autos zu Job-Garagen auf deinem FiveM Server mit ESX von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Job-Garagen Autos hinzufügen
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Möchtest du die verfügbaren Fahrzeuge in deinen Jobgaragen ändern oder erweitern? Im Folgenden erklären wir dir, wie du das machen kannst und welche Schritte du dabei beachten musst!

<InlineVoucher />



## Konfiguration

Zusätzliche Autos werden den Job-Garagen per FTP hinzugefügt. Verbinde dich dementsprechend per FTP mit deinem Gameserver. Solltest du noch nicht wissen, wie du FTP verwendest, dann schaue dir unsere [FTP-Zugriff](gameserver-ftpaccess.md) Anleitung an. 

Sobald du über FTP verbunden bist, navigiere zum ESX-Ressourcenordner und öffne den Ordner esx_addons. Die Ordnerstruktur sollte wie folgt aussehen: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Wähle nun z.B. den Ambulance- oder Police-Job und öffne die `config.lua` Konfigurationsdatei in den Ressourcen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)

In der Konfigurationsdatei muss der Abschnitt von Config.AuthorizedVehicles angepasst werden. Du kannst diesen über die Suchfunktion suchen und dann nach deinen Wünschen anpassen oder erweitern:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning
Stelle sicher, dass du ein Komma am Ende der vorherigen Zeile setzt, wenn du neue Fahrzeuge hinzufügst, sonst kann es zu Problemen kommen.
:::

## Abschluss
Vorausgesetzt, dass du alle Schritte befolgt hast, solltest du deine Jobs-Garage nun erfolgreich angepasst oder erweitert haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

