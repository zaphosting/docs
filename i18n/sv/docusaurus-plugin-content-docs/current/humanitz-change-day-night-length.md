---
id: humanitz-change-day-night-length
title: "HumanitZ: Ändra dag- och nattlängd"
description: "Upptäck hur du justerar dag- och nattlängden på din HumanitZ-server → Läs mer nu"
sidebar_label: "Ändra dag-/nattlängd"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Dag- och nattcykeln i HumanitZ påverkar direkt gameplay, sikt, överlevnadssvårighet och spelets tempo. Kortare dagar kan skapa en mer intensiv överlevnadsupplevelse, medan längre dagsljusperioder ger spelare mer tid att utforska, bygga och samla resurser.

<InlineVoucher />



## Konfiguration

Dag- och nattlängden styrs i filen `GameServerSettings.ini`. Du hittar den i din serverhanteringspanel under **Configs**. Inuti konfigurationsfilen, leta upp följande parametrar:

```
;Daglängd i minuter
DayDur=40
;Nattlängd i minuter
NightDur=20
```

Värdena anges i minuter:

- `DayDur` – Styr hur länge dagen varar  
- `NightDur` – Styr hur länge natten varar  

För att ändra cykellängden, justera helt enkelt siffrorna till önskad tid. Exempel för längre dagar och kortare nätter:

```
DayDur=60
NightDur=15
```

Efter att du redigerat filen, spara ändringarna och starta om servern för att de nya inställningarna ska börja gälla.



## Slutsats

Grattis! Genom att ändra värdena för `DayDur` och `NightDur` i `GameServerSettings.ini` har du framgångsrikt justerat dag- och nattcykeln på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />