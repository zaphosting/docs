---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Aktivera/Avaktivera Dödsmeddelanden"
description: "Lär dig hur du aktiverar eller avaktiverar dödsmeddelanden för spelare på din HumanitZ-server → Läs mer nu"
sidebar_label: "Aktivera/Avaktivera Dödsmeddelanden"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Dödsmeddelanden informerar spelare när någon på servern har dött. Det kan vara användbart för att hålla koll på aktiviteten, men vissa servrar föredrar en mer immersiv eller tävlingsinriktad upplevelse utan offentliga dödsmeddelanden.

HumanitZ låter dig aktivera eller avaktivera dödsmeddelanden direkt via serverns konfigurationsfil.

<InlineVoucher />

## Konfiguration

Inställningarna för dödsmeddelanden styrs i filen `GameServerSettings.ini`. Du hittar den i din serverpanel under **Configs**. 
I konfigurationsfilen, leta upp följande parameter:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Dödsmeddelanden stängs av för vanliga spelare. Admins ser dem fortfarande. 
- `NoDeathFeedback=false` – Dödsmeddelanden aktiveras för alla spelare.

Vill du att dödsmeddelanden ska synas för alla, sätt värdet till:

```
NoDeathFeedback=false
```

Efter att du redigerat filen, spara ändringarna och starta om servern för att den nya inställningen ska börja gälla.

## Avslutning

Grattis! Genom att ändra värdet på `NoDeathFeedback` i `GameServerSettings.ini` har du nu konfigurerat dödsmeddelandena på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂 

<InlineVoucher />