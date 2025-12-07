---
id: voiceserver-ts3backup
title: "Voiceserver: Backup erstellen, herunterladen und importieren"
description: "Entdecke, wie du Backups ganz easy erstellst und verwaltest – mit kostenlosem Speicherplatz und Upgrade-Optionen für sichere Datensicherung → Jetzt mehr erfahren"
sidebar_label: Backups
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du kannst bei uns mit nur einem Klick individuelle Backups erstellen. So kannst du Backups easy und ohne viel Aufwand anlegen und jederzeit wieder importieren. Alle Backups werden auf deinem Storage-Server gespeichert, der standardmäßig 10 GB kostenlosen Speicherplatz bietet. Brauchst du mehr, kannst du auf Premium Storage upgraden.

<InlineVoucher />

## Backups erstellen

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak Server Produkt" default>

Um ein Backup auf unserer Website zu erstellen, öffnest du deinen Voiceserver-Service im Webinterface und gehst in der Verwaltung auf **Snapshots**. Dort klickst du einfach auf den grünen Button **Snapshot erstellen**, um ein Backup anzulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Externe Backups
Aus Sicherheitsgründen ist der Import von externen Backups (Snapshots) nicht möglich. Ausnahmen gibt es keine.
:::

</TabItem>
<TabItem value="self_hosted" label="Self Hosted (VPS/Dedicated Server)">

Wie beim TeamSpeak Server Produkt kannst du, wenn du die GS/TS3-Oberfläche nutzt, mit einem Klick über die TeamSpeak Server Service-Verwaltung ein Backup (Snapshot) erstellen. Alternativ kannst du das Backup auch manuell mit den Login-Daten deiner TeamSpeak-Instanz (Query) und der externen Anwendung YatQA anlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Um in YatQA einen Snapshot zu erstellen, gehst du oben in der Anwendung auf **Miscellaneous** und klickst dann auf **Create and save snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Backups herunterladen

Erstellte Backups (Snapshots) kannst du per FTP von deinem Storage-Server herunterladen. Die Login-Daten findest du im Webinterface deines Storage-Server-Services. Falls du FTP noch nicht benutzt hast, empfehlen wir dir unseren allgemeinen [FTP-Zugang](gameserver-ftpaccess.md) Guide.

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Fazit

Wenn du alle Schritte befolgt hast, hast du erfolgreich ein Backup erstellt. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />