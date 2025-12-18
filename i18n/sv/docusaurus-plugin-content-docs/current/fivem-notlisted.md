---
id: fivem-notlisted
title: "FiveM: Servern syns inte i serverlistan"
description: "Lär dig hur du felsöker problem med serverlistan och ser till att din server visas korrekt i listan → Läs mer nu"
sidebar_label: Servern syns inte i serverlistan
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Om servern inte syns i serverlistan kan det bero på flera olika saker. Om den här guiden inte löser problemet, vänligen kontakta vår [Support](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Konfigurationsfel

Ofta är det enkla konfigurationsfel som orsakar problemet. Först bör vi kolla om vår server har listningen avstängd, för detta kollar vi på raden `sv_master1`:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Den här raden ska **alltid** vara kommenterad med en #, om så inte är fallet kommer servern inte att listas.
:::

Kolla även servernamnet (`sv_hostname`):

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

I det här fallet saknas citationstecknet i slutet av raden. Med vissa servernamn kan det också uppstå problem p.g.a. formatering, vi rekommenderar att ta bort dem i så fall, t.ex. [DE] eller specialtecken som ä, ü, ö.

## Problematiska resurser

Det kan också vara så att vissa resurser hindrar servern från att listas. Vi rekommenderar då att ta bort de senaste installerade resurserna och sedan låta servern vara online i ~1 timme. I de flesta fall bör servern då visas igen.

## Ominstallation

Om inget av detta hjälper rekommenderar vi en nyinstallation, vilket återställer alla serverfiler till standard.

:::info
Se till att göra en backup innan ominstallation, annars förloras all data på servern.
:::

<InlineVoucher />