---
id: assettocorsa-contentmanager
title: "Assetto Corsa: Server mit Content Manager konfigurieren"
description: "Entdecke, wie du deine Gameserver-Einstellungen effizient konfigurierst und verwaltest für optimale Performance und individuelle Anpassung → Jetzt mehr erfahren"
sidebar_label: Server mit Content Manager konfigurieren
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Wichtig** Um den Server mit Content Manager zu verwalten, wird die Vollversion benötigt, die Lite-Version kann *keine* Server verwalten.
:::

<InlineVoucher />


## Vorbereitung

Zuerst öffnen wir unseren Content Manager und klicken oben rechts auf das Sandwich-Menü, wo wir "Server" auswählen:

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Hier erstellen wir jetzt ein neues Preset und wählen es aus:

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Server Slots einstellen

Zuerst müssen wir festlegen, wie viel Kapazität unser Server hat. In unserem Fall hat unser Server nur 10 Slots, also wählen wir bei Kapazität '10' aus:

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Map einstellen

Standardmäßig ist hier Imola als Map ausgewählt. Durch Klicken auf die Map können wir unsere eigene Map auswählen:

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Autos einstellen

Jetzt wechseln wir zum Tab "Entry List", hier können wir neue Autos hinzufügen:


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Achte darauf, dass alle Auto-Slots gefüllt sind und nicht mehr als die verfügbare Slot-Anzahl eingestellt wird.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## FTP Upload konfigurieren

Über das Menü "Advanced" können wir einen FTP-Uploader konfigurieren, damit du deine Server-Konfiguration mit einem Klick hochladen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Jetzt gib hier deine FTP-Daten ein:

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
Im Feld "Folder" musst du die ID deines Gameservers eintragen, wie du sie in der URL deines Gameservers siehst, zum Beispiel:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

In unserem Fall wäre das:

```
/g427814/assetto-corsa/
```

Für AssettoServer:

```
/g427814/assettoserver/
```

Danach kannst du auf "Upload Content" klicken, die konfigurierte Config, Strecke und Autos werden automatisch hochgeladen, danach musst du nur noch deinen Server starten!

<InlineVoucher />