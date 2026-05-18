---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Konfigurera Tid och Miljö"
description: "Lär dig hur du justerar tid på dygnet och miljöinställningar på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Tid & Miljö
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Tid- och miljöinställningar i **Over the Top WWI** påverkar sikt, atmosfär och de övergripande spelvillkoren. Genom att justera dessa värden kan du skapa ljusa dagsstrider, mörkare scenarion eller varierande säsongsmiljöer.

Dessa inställningar låter dig anpassa serverns utseende och känsla för att öka spelarnas inlevelse.

<InlineVoucher />

## Konfiguration

Tid- och miljöinställningar konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` definierar spelets timme
- `Season` styr aktuell årstid

- `0` → Standard
- `1` → Vår
- `2` → Sommar
- `3` → Höst
- `4` → Vinter

- `TemperatureinCelcius` justerar miljötemperaturen
- Detta kan påverka atmosfär och miljöeffekter

Dessa inställningar låter dig skapa olika scenarion, som tidiga morgonstrider, nattstrider eller säsongsbaserade miljöer.

Efter att du ändrat `ServerConfiguration.ini`, spara filen och starta om din server. De nya miljöinställningarna tillämpas automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat tid och miljöinställningar på din **Over the Top WWI-server**. Det ger dig möjlighet att anpassa atmosfären och skapa unika spelupplevelser för dina spelare.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />