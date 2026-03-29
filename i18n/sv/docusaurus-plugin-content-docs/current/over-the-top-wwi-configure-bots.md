---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: Konfigurera Bots"
description: "Lär dig hur du konfigurerar bot-inställningar på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Bots kan användas på en **Over the Top WWI**-server för att fylla tomma platser, simulera storskaliga strider och hålla igång aktiviteten även med få spelare. Genom att justera bot-inställningarna kan du styra svårighetsgrad, beteende och matchernas intensitet.

Det låter dig skapa allt från små kontrollerade skärmytslingar till stora kaotiska slag med många AI-styrda enheter.

<InlineVoucher />

## Konfiguration

Bot-inställningarna konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` definierar antalet bots i det attackerande laget
- `DefenderBots` definierar antalet bots i det försvarande laget
- `AutoAssignBots` fördelar bots automatiskt över lagen
- `0` → Avstängt
- `1` → Påslaget

- `BotCallinMulti` styr hur ofta bots spawnas eller förstärks
- `SubBotForPlayer` ersätter bots med riktiga spelare när de ansluter
- `1` → Påslaget
- `0` → Avstängt

### Avancerad bot-konfiguration

Du kan anpassa bot-beteendet ytterligare med dessa parametrar:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

Dessa värden styr hur ofta olika enhetstyper väljs när bots spawnas. Att öka ett värde gör att fler bots av den typen dyker upp i matcherna.

### Vågor och skalningsinställningar

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` styr hur länge en bot-våg varar
- `WaveBuildUpTime` definierar hur lång tid det tar för en våg att byggas upp helt
- `AutoAssignBotsScaleMulti` skalar antalet bots beroende på spelarantal

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De nya bot-inställningarna aktiveras under spelets gång.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat bots på din **Over the Top WWI-server**. Genom att justera dessa inställningar kan du styra matchernas intensitet, förbättra spelupplevelsen och hålla din server aktiv hela tiden.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />