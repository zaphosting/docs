---
id: minecraft-server-icon
title: "Minecraft: Server Icon hinzufügen oder ändern"
description: Informationen, wie du ein Server Icon für deinen Minecraft Server von ZAP-Hosting hinzufügen oder ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server Icon
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Minecraft bietet die Option an, ein eigenes Servericon hinzuzufügen, das im Multiplayer vor dem Server angezeigt wird, sofern der Server eingespeichert wurde.

![](https://screensaver01.zap-hosting.com/index.php/s/zFQLZmRrLWrKN7r/preview)

<YouTube videoId="m5mpKcd9Ur0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GcP3wmqDMs9W3aE/preview" title="How to change the ICON on your Minecraft Server " description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />

## Hinzufügen des Icons 

Um das Icon hinzuzufügen werden FTP Rechte sowie das Icon selbst benötigt. 

>Wichtig: Das Icon muss in der Größe 64x64 Pixel sein und den Namen server-icon.png tragen. 

Zuerst wird eine Verbindung via FTP zum Gameserver aufgebaut, wie genau das funktioniert, kann [hier](gameserver-ftpaccess.md) eingesehen werden. 

Sobald die Verbindung besteht, sieht man die Server-Daten, wie z.B.: 

![](https://screensaver01.zap-hosting.com/index.php/s/qBtbpR2ELZeRZPx/preview)

Das Icon muss nun in das Hauptverzeichnis hochgeladen werden, es darf in keinem Unterverzeichnis hochgeladen werden:

![](https://screensaver01.zap-hosting.com/index.php/s/MaPBSwXiicyt3xG/preview)

Ist dies erfolgt, so muss der Server nun gestartet werden über die Buttons im Webinterface oben rechts bei dem jeweiligen Server:

![](https://screensaver01.zap-hosting.com/index.php/s/aamwpPpPMQoYBn7/preview)

## Überprüfung des Icons 

Wenn nun Name und Größe gepasst haben, wird es im Multiplayer vor dem Server angezeigt: 

![](https://screensaver01.zap-hosting.com/index.php/s/TkoEwZBZz4w7cp2/preview)

Das Icon kann auf diesem Wege auch jederzeit getauscht oder gelöscht werden.
