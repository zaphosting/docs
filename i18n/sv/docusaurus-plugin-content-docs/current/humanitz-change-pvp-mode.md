---
id: humanitz-change-pvp-mode
title: "HumanitZ: Ändra PvP-läge"
description: "Lär dig hur du aktiverar eller inaktiverar PvP på din HumanitZ-server → Läs mer nu"
sidebar_label: "Ändra PvP-läge"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Player versus Player (PvP) är en central mekanik i survival-spel som HumanitZ. Att slå på eller av PvP ändrar hur spelare kan interagera i strid, om de kan skada varandra och om de kan interagera med spelaregendom som fordon eller containers.

<InlineVoucher />

## Konfiguration

PvP-läget styrs i filen `GameServerSettings.ini`. Du hittar den i din serverpanel under **Configs**. Inuti config-filen, leta upp följande parameter:

```
;false/true=Av/På. Detta påverkar även möjligheten att interagera med spelaregendom som bilar och containers
PVP=true
```

- `PVP=true` – Aktiverar Player versus Player-strider  
- `PVP=false` – Inaktiverar Player versus Player-strider

För att ändra PvP-läget, sätt helt enkelt värdet till `true` (På) eller `false` (Av), beroende på hur du vill att PvP ska fungera på din server.

Exempel – PvP avstängt:

```
PVP=false
```

Efter att du redigerat filen, spara ändringarna och starta om servern för att den nya inställningen ska börja gälla.

## Avslutning

Grattis! Genom att ändra `PVP`-värdet i `GameServerSettings.ini` har du nu framgångsrikt ändrat PvP-läget på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />