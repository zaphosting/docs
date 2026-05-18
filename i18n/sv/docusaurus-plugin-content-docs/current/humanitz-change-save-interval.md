---
id: humanitz-change-save-interval
title: "HumanitZ: Ändra Sparintervall"
description: "Lär dig hur du justerar det automatiska sparintervallet på din HumanitZ-server → Läs mer nu"
sidebar_label: "Ändra Sparintervall"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Sparintervallet bestämmer hur ofta din HumanitZ-server automatiskt sparar världens tillstånd. Regelbundet sparande hjälper till att förhindra dataförlust vid krascher eller oväntade avstängningar, medan längre intervaller kan minska diskaktiviteten något.

<InlineVoucher />

## Konfiguration

Sparintervallet för världen styrs i filen `GameServerSettings.ini`. Du hittar den här filen i din serverhanteringspanel under **Configs**. Inuti konfigurationsfilen, leta upp följande parameter:

```
;The interval in seconds at which the server saves the world. Set to 0 to disable auto-saving.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – Servern sparar världen var 300:e sekund (5 minuter).  
- `SaveIntervalSec=0` – Stänger av automatisk sparning av världen.  

Värdet anges i **sekunder**. Till exempel:

- `600` = 10 minuter
- `900` = 15 minuter

Vill du öka intervallet till 10 minuter:

```
SaveIntervalSec=600
```

Efter att du redigerat filen, spara ändringarna och starta om servern för att den nya inställningen ska börja gälla.

## Avslutning

Grattis! Genom att ändra värdet på `SaveIntervalSec` i `GameServerSettings.ini` har du framgångsrikt justerat det automatiska sparintervallet på din HumanitZ-server.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />