---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Aktivera/Inaktivera Permadeath"
description: "Lär dig hur du aktiverar eller inaktiverar permadeath på din HumanitZ-server → Läs mer nu"
sidebar_label: "Aktivera/Inaktivera Permadeath"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Permadeath höjer rejält svårighetsgraden och spänningen i överlevnadsspelet HumanitZ. När det är aktiverat förlorar spelare sin karaktär permanent vid död och måste skapa en ny. Den här inställningen används ofta på hardcore- eller high-risk survival-servrar.

<InlineVoucher />

## Konfiguration

Permadeath styrs i filen `GameServerSettings.ini`. Du hittar den i din serverpanel under **Configs**. Inuti config-filen, leta upp följande parameter:

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – Aktiverar permadeath. Spelare förlorar sin karaktär permanent när de dör.  
- `PermaDeath=false` – Inaktiverar permadeath. Spelare kan respawna med sin befintliga karaktär.

Vill du slå på permadeath ändrar du värdet till:

```
PermaDeath=true
```

Efter att du redigerat filen, spara ändringarna och starta om servern för att den nya inställningen ska börja gälla.

## Avslutning

Grattis! Genom att ändra värdet på `PermaDeath` i `GameServerSettings.ini` har du nu framgångsrikt aktiverat eller inaktiverat permadeath på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />