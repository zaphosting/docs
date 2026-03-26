---
id: fivem-esx-changejobgarages
title: "FiveM: Job Garagen - Autos hinzufügen"
description: "Entdecke, wie du Job-Garagen mit zusätzlichen Autos anpassen und erweitern kannst, um dein Spielerlebnis zu verbessern → Jetzt mehr erfahren"
sidebar_label: Job-Garagen Autos hinzufügen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Willst du die verfügbaren Autos in deinen Job-Garagen ändern oder erweitern? Unten erklären wir dir, wie das geht und welche Schritte du dafür befolgen musst!

<InlineVoucher />

## Konfiguration

Zusätzliche Autos werden per FTP zu den Job-Garagen hinzugefügt. Verbinde dich dazu mit deinem Gameserver via FTP. Falls du noch nicht weißt, wie FTP funktioniert, schau dir gerne unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung an.

Sobald du per FTP verbunden bist, navigiere zum ESX-Resource-Ordner und öffne den Ordner esx_addons. Die Ordnerstruktur sollte so aussehen: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Wähle jetzt zum Beispiel den Ambulance- oder Police-Job aus und öffne die `config.lua` Konfigurationsdatei aus den Ressourcen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)

In der Konfigurationsdatei muss der Abschnitt `Config.AuthorizedVehicles` angepasst werden. Du kannst ihn über die Suchfunktion finden und dann nach deinen Wünschen anpassen oder erweitern:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Achte darauf, dass am Ende der vorherigen Zeile ein Komma steht, wenn du neue Fahrzeuge hinzufügst, sonst kann es zu Problemen kommen.
:::

## Abschluss

Wenn du alle Schritte befolgt hast, solltest du deine Job-Garage jetzt erfolgreich angepasst oder erweitert haben. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />