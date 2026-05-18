---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Konfigurera Skadeinställningar"
description: "Lär dig hur du justerar skada och stridsbeteende på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Skadeinställningar
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Skadeinställningarna i **Over the Top WWI** bestämmer hur dödligt strider är och hur vapen beter sig under spelets gång. Genom att justera dessa värden kan du skapa en mer realistisk upplevelse eller en mer avslappnad och förlåtande miljö.

Genom att ändra skademultiplikatorer och stridsmekanik kan du påverka hur snabbt spelare elimineras och hur striderna utspelar sig.

<InlineVoucher />

## Konfiguration

Skadeinställningarna konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` styr skadan som görs av distansvapen

- `MeleeDamageMulti` definierar skadan för närstridsattacker

- `ShootingVelocityMulti` påverkar projektilens hastighet och kan påverka träffsäkerhet och registrering av träffar

- `DragEffector` påverkar hur snabbt kulor tappar hastighet över avstånd

- `WindEffector` bestämmer hur starkt vinden påverkar kulans bana

- `RandomEffectorr` lägger till slumpmässighet i kulans beteende, vilket påverkar träffsäkerheten

Genom att justera dessa värden kan du skapa mer realistisk ballistik eller förenkla stridsmekaniken beroende på din serverstil.

Efter att du ändrat `ServerConfiguration.ini`, spara filen och starta om din server. De nya skade- och stridsinställningarna tillämpas automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat skadeinställningarna på din **Over the Top WWI-server**. Genom att justera dessa parametrar kan du finjustera stridsbeteendet och skapa en spelupplevelse som passar din community.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />