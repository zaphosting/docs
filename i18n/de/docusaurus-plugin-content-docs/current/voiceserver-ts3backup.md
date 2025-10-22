---
id: voiceserver-ts3backup
title: "Voiceserver: Backups erstellen, herunterladen und importieren"
description: "Entdecke, wie du Backups ganz easy erstellst und verwaltest – mit kostenlosem Speicherplatz und Upgrade-Optionen für sichere Datensicherung → Jetzt mehr erfahren"
sidebar_label: Backups
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wir bieten dir die Möglichkeit, individuelle Backups mit nur einem Klick zu erstellen. So kannst du Backups ganz einfach und ohne großen Aufwand anlegen und jederzeit später wieder importieren. Alle Backups werden auf deinem Speicher-Server abgelegt, der standardmäßig 10 GB kostenlosen Speicherplatz beinhaltet. Wenn du mehr brauchst, kannst du auf Premium Storage upgraden.

<InlineVoucher />

## Backups erstellen

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak Server Produkt" default>

Um ein Backup auf unserer Webseite zu erstellen, öffnest du deinen Voiceserver-Service im Webinterface und navigierst zur **Snapshots**-Verwaltung. Dort klickst du einfach auf den grünen Button **Snapshot erstellen**, um ein Backup anzulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Externe Backups
Der Import von externen Backups (Snapshots) ist aus Sicherheitsgründen nicht möglich. Ausnahmen gibt es keine. 
:::

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Dedicated Server)">

Wie beim TeamSpeak Server Produkt kannst du, wenn du die GS/TS3-Oberfläche nutzt, mit einem Klick über die TeamSpeak Server Service-Verwaltung ein Backup (Snapshot) erstellen. Alternativ kannst du das Backup auch manuell mit den Login-Daten deiner TeamSpeak-Instanz (Query) und der externen Anwendung YatQA anlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Um in YatQA einen Snapshot zu erstellen, gehst du oben in der Anwendung auf **Miscellaneous** und klickst dann auf **Create and save snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Backups herunterladen

Erstellte Backups (Snapshots) kannst du über FTP von deinem Speicher-Server herunterladen. Die Login-Daten findest du im Webinterface deines Speicher-Server-Services. Falls du FTP noch nicht benutzt hast, empfehlen wir dir unsere allgemeine [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Fazit

Wenn du alle Schritte befolgt hast, hast du erfolgreich ein Backup erstellt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />