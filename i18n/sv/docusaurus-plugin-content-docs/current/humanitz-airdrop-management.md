---
id: humanitz-airdrop-management
title: "HumanitZ: Airdrop-hantering"
description: "Lär dig hur du aktiverar, inaktiverar och konfigurerar airdrops på din HumanitZ-server → Läs mer nu"
sidebar_label: "Airdrop-hantering"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Airdrops i HumanitZ ger värdefull loot och kan påverka spelarens rörelser, konfliktzoner och serverns dynamik rejält. Beroende på din servers spelstil kanske du vill ha frekventa supply drops för mer action, eller stänga av dem helt för en tuffare överlevnadsupplevelse med knappa resurser.

<InlineVoucher />

## Konfiguration

Inställningarna för airdrops styrs i filen `GameServerSettings.ini`. Du hittar den i din serverpanel under **Configs**. I config-filen letar du upp följande parametrar:

```
; Sätt om airdrops ska vara aktiverade eller inte
AirDrop=true
; Hur många speldagar mellan varje airdrop
AirDropInterval=1
```

Så här funkar inställningarna:

- `AirDrop=true` – Aktiverar airdrops  
- `AirDrop=false` – Stänger av airdrops helt  
- `AirDropInterval` – Bestämmer hur många speldagar som går mellan varje airdrop  

Vill du till exempel att airdrops ska ske var tredje speldag:

```
AirDrop=true
AirDropInterval=3
```

Vill du stänga av airdrops helt:

```
AirDrop=false
```

När du redigerat klart, spara filen och starta om servern så att ändringarna träder i kraft.

## Avslutning

Grattis! Genom att ändra värdena för `AirDrop` och `AirDropInterval` i `GameServerSettings.ini` har du nu konfigurerat airdrop-beteendet på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />