---
id: voiceserver-ts3backup
title: "Voiceserver: Backups maken, downloaden en importeren"
description: "Ontdek hoe je eenvoudig backups maakt en beheert met gratis opslag en upgrade-opties voor veilige databeveiliging → Leer het nu"
sidebar_label: Backups
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Je kunt met één klik individuele backups maken. Zo maak je makkelijk en zonder gedoe backups en kun je ze later altijd weer importeren. Alle backups worden opgeslagen op je opslagserver, die standaard 10GB gratis opslagruimte bevat. Heb je meer nodig? Dan kun je upgraden naar Premium Storage.

<InlineVoucher />

## Backups maken

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak Server Product" default>

Om een backup te maken op onze website, open je je Voiceserver service in de webinterface en ga je naar **Snapshots** in de administratie. Klik daar op de groene knop **Create snapshot** om een backup te maken.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Externe Backups
Het importeren van externe backups (snapshots) is om veiligheidsredenen niet mogelijk. Uitzonderingen zijn uitgesloten.
:::

</TabItem>
<TabItem value="self_hosted" label="Zelf gehost (VPS/Dedicated Server)">

Net als bij het TeamSpeak Server product kun je, als je de GS/TS3 interface gebruikt, met één klik een backup (snapshot) maken via de TeamSpeak Server service administratie. Je kunt ook handmatig een backup maken met de inloggegevens van je TeamSpeak instance (Query) en de externe applicatie YatQA.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Om een snapshot te maken in YatQA ga je bovenin de applicatie naar **Miscellaneous** en klik je vervolgens op **Create and save snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Backups downloaden

Gemaakte backups (snapshots) kun je downloaden van je opslagserver via FTP. De inloggegevens vind je in de webinterface bij je opslagserver service. Weet je niet hoe je FTP moet gebruiken? Dan raden we je aan onze algemene [FTP toegang](gameserver-ftpaccess.md) gids te gebruiken.

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Conclusie

Als je alle stappen hebt gevolgd, heb je succesvol een backup gemaakt. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />