---
id: humanitz-change-death-penalty
title: "HumanitZ: Ändra Dödsstraff"
description: "Upptäck hur du justerar dödsstraff-inställningarna på din HumanitZ-server → Lär dig mer nu"
sidebar_label: Ändra Dödsstraff
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Introduktion

Dödsstraffet i HumanitZ bestämmer vad en spelare förlorar efter att ha dött. Beroende på din serverstil kan du föredra en mer förlåtande överlevnadsupplevelse eller ett tuffare system som ökar spänningen och risken. 

<InlineVoucher />



## Konfiguration

Dödsstraffet styrs i filen `GameServerSettings.ini`. Du hittar den i din serverhanteringspanel under **Configs**. Inuti konfigurationsfilen, leta upp följande parameter:

```
;0=Förlora inget, 1=Förlora ryggsäck och vapen i handen, 2=Föregående + fickor och ryggsäck, 3=Alla föregående + Utrustning
OnDeath=2
```

Värdet efter `OnDeath=` bestämmer hur mycket av spelarens inventarie som förloras vid döden:

- `0` – Spelare förlorar inget  
- `1` – Spelare förlorar sin ryggsäck och vapnet som hålls i handen  
- `2` – Föregående + innehållet i fickor och ryggsäck  
- `3` – Alla föregående + utrustad gear  

För att justera straffet, ändra helt enkelt numret till din önskade inställning. Efter att du redigerat filen, spara ändringarna och starta om servern för att den nya inställningen ska börja gälla.



## Avslutning

Grattis! Genom att ändra värdet på `OnDeath` i `GameServerSettings.ini` har du framgångsrikt konfigurerat dödsstraffet på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂



<InlineVoucher />