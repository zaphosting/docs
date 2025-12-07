---
id: valheim-backup-schedule
title: "Valheim: Aktiver automatiska backups för servrar"
description: "Lär dig hur du automatiserar Valheim-backups via schemalagda omstarter för pålitligt dataskydd och serverhantering → Läs mer nu"
sidebar_label: Automatiska Backups
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Tyvärr erbjuder inte Valheim någon direkt funktion för automatiska backups, så vi behöver använda en liten workaround.

Gå till "Restart Planner" i din dashboard.

![](https://screensaver01.zap-hosting.com/index.php/s/FspW5eG7XJNqE4k/preview)

Klicka nu på "+" så öppnas ett nytt fönster där vi kan definiera önskade omstartstider.

![](https://screensaver01.zap-hosting.com/index.php/s/me5tSbwc8YWT7me/preview)

Först väljer vi om vi vill ha "Daily", vilket betyder att en backup skapas varje dag vid den tid vi väljer.
I nästa steg sätter vi önskad omstartstid.

:::info
Start offline server – Betyder att din server startas om den är offline när omstartstiden infaller.
:::

Nu klickar vi på "Save".

:::info
Du kan ställa in en planerad omstart var 6:e timme, vilket innebär att en automatisk backup skapas var 6:e timme.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/rFPWnSH7EkHxoN9/preview)

<InlineVoucher />