---
id: valheim-backup-schedule
title: "Valheim: Automatisierte Backups für Server aktivieren"
description: Informationen, wie du automatisierte Backups für deinen Valheim Server von ZAP-Hosting aktivieren und einstellen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Automatisierte Backups
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Leider bietet Valheim keine direkte Möglichkeit automatisiert Backups zu erstellen, weshalb wir dies mit einem kleinen Workaround durchführen müssen. Zuerst öffnest du in deinem Dashboard den "Restart Planer". 

![](https://screensaver01.zap-hosting.com/index.php/s/NtTLF97tpokM72Z/preview)

Danach klicken wir auf das "+" es öffnet sich nun ein weiteres Fenster, in welchem wir die gewünschten Restartzeiten definieren können.

![](https://screensaver01.zap-hosting.com/index.php/s/m8BxKtpfKJi57jj/preview)

Zuerst wählen wir, sofern gewünscht "Täglich", dies bedeutet, dass dieser Neustart dann täglich zu einer bestimmten Uhrzeit erfolgt. 
Als Nächstes definieren wir die gewünschte Uhrzeit, an welcher der Neustart durchgeführt werden soll.

:::info
Offline Server starten - Startet deinen Server automatisch, sollte er zum Restart-Zeitpunkt ausgeschaltet sein.
:::

Als Nächstes klicken wir auf Speichern.


:::info
Du könntest z.B. alle 6 Stunden einen Neustart durchführen lassen, somit wird also alle 6 Stunden ein Backup deines Savegames angelegt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BqgMAN5mTgqBCJp/preview)
