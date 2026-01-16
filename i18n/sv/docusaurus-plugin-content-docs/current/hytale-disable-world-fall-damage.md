---
id: hytale-disable-world-fall-damage
title: "Hytale: Inaktivera Fallskada i Världen"
description: "Upptäck hur du inaktiverar fallskada på din Hytale-server → Läs mer nu"
sidebar_label: Inaktivera Fallskada i Världen
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

På en Hytale-server är gravitation och fallskada en del av världens gameplay-mekanik. När fallskada är aktiverat tar spelare skada vid höga fall, medan när det är inaktiverat kan spelare falla fritt utan att ta skada. Att inaktivera fallskada kan vara användbart för kreativa servrar, byggprojekt, testmiljöer eller alla situationer där fallskada inte ska påverka spelupplevelsen. 

<InlineVoucher />



## Konfiguration

Fallskada styrs på varje värld individuellt via världens konfigurationsfil. Varje värld i serverns universum har sin egen `config.json`, och i den här filen finns en inställning som avgör om fallskada ska gälla. 

För att inaktivera fallskada, öppna världens `config.json` som finns i motsvarande världsmapp under `universe/worlds/<world_name>/config.json`. Hitta inställningen som styr fallskada, vanligtvis en boolean-flagga som `IsFallDamageEnabled`, och sätt den till `false`:

```
{
  "IsFallDamageEnabled": false
}
```

När värdet är satt till `false` kommer spelare inte längre ta skada från fall. Om fallskada ska vara aktiverat, sätt värdet till `true`:

```
{
  "IsFallDamageEnabled": true
}
```

Efter att du uppdaterat filen, spara ändringarna och **starta om servern**.
Konfigurationsändringar träder i kraft först när servern laddar om världen, så en omstart krävs för att den nya inställningen ska börja gälla.



## Slutsats

Genom att konfigurera fallskade-flaggan i världens konfigurationsfil har du full kontroll över om spelare tar skada vid fall. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />