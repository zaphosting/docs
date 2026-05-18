---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Aktivera eller Inaktivera Röstchatt"
description: "Lär dig hur du aktiverar eller inaktiverar röstchatt på din HumanitZ-server → Läs mer nu"
sidebar_label: "Aktivera/Inaktivera Röstchatt"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Röstkommunikation kan verkligen förändra stämningen på en HumanitZ-server. Att aktivera röstchatt låter spelare prata direkt när de är nära varandra, vilket boostar både immersion och samarbete. Att stänga av det kan istället uppmuntra till att använda externa kommunikationsplattformar eller skapa en tystare, mer isolerad survival-upplevelse.

I HumanitZ konfigureras röstchatten direkt i serverns konfigurationsfil.

<InlineVoucher />



## Konfiguration

Inställningarna för röstchatt styrs i filen `GameServerSettings.ini`. Du hittar den i din serverpanel under **Configs**. Inuti konfigurationsfilen, leta upp följande parameter:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

Så här funkar inställningen:

- `Voip=true` eller `Voip=1` – Aktiverar röstchatt  
- `Voip=false` eller `Voip=0` – Inaktiverar röstchatt  

Vill du ändra röstchatten, ändra bara värdet efter vad du vill ha. Spara filen och starta om servern så att ändringen träder i kraft.



## Avslutning

Grattis! Genom att ändra värdet på `Voip` i `GameServerSettings.ini` har du nu aktiverat eller inaktiverat röstchatt på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />