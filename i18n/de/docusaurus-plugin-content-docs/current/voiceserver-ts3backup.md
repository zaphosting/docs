---
id: voiceserver-ts3backup
title: "Voiceserver: Backups erstellen, herunterladen und einspielens"
description: Informationen über das Erstellen, Herunterladen und Wiederherstellen von Backups für deinen TeamSpeak Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Backups
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wir bieten die Möglichkeit, Backups individuell per Klick zu erstellen. Dadurch können Backups kinderleicht und ohne großen Aufwand erstellt und zu einem späteren Zeitpunkt jederzeit wieder importiert werden. Das Backup wird dann auf deinem Storage Server gespeichert, welcher standardmäßig 10 GB kostenlosen Speicherplatz bietet. Solltest du mehr benötigen, dann kannst du auch auf ein Premium Storage upgraden.

<InlineVoucher />

## Backups erstellen

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak Server Produkt" default>

Um ein Backup auf unserer Website zu erstellen, musst du deinen Voiceserver Dienst im Webinterface aufrufen und in der Verwaltung zu **Snapshots** navigieren. Klicke dort auf den grünen Button **Snapshot erstellen**, um ein Backup zu erstellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/MPNrkDfDEPDA5Re/download)

:::warning Externe Backups
Der Import von externen Backups (Snapshots) ist aus Sicherheitsgründen nicht möglich. Ausnahmen sind ausgeschlossen. 
:::


</TabItem>
<TabItem value="self_hosted" label="Selbst gehostet (vRootserver/Dedicated Server)">



Wie beim TeamSpeak Server Produkt kannst du, wenn du das GS/TS3 Interface verwendest, ein Backup (Snapshot) mit einem Klick über die Verwaltung des TeamSpeak Server Dienstes erstellen. Allerdings kannst du ein Backup auch manuell mit den Zugangsdaten der TeamSpeak-Instanz (Query) und mit der externen Anwendung YatQA erstellen. 

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Um einen Snapshot in YatQA zu erstellen, musst du oben in der Anwendung auf **Miscellaneous** gehen und dann auf **Create and save snapshot** klicken. 

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Backups herunterladen

Erstellte Backups (Snapshots) können per FTP von deinem Storage Server heruntergeladen werden. Die Zugangsdaten dazu findest du im Webinterface bei deinem Storage Server Dienst. Wenn du nicht weißt, wie man FTP benutzt, dann empfehlen wir dir, unsere allgemeine [FTP-Zugang](gameserver-ftpaccess.md) Anleitung zu verwenden.

![img](https://screensaver01.zap-hosting.com/index.php/s/kHFod3oficKzR33/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Abschluss

Du hast erfolgreich ein Backup erstellt, wenn du alle genannten Schritte befolgt hast. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
