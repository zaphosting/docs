---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Konfigurera Väder"
description: "Lär dig hur du konfigurerar väderinställningarna på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Väder
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Väderinställningarna i **Over the Top WWI** påverkar direkt gameplay, sikt och atmosfär. Genom att justera dessa värden kan du skapa klara förhållanden för balanserad strid eller introducera utmanande miljöer som dimma, regn eller stormar.

Anpassade väderkonfigurationer låter dig forma hela upplevelsen och göra matcherna mer dynamiska eller immersiva.

<InlineVoucher />

## Konfiguration

Väderinställningarna konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` aktiverar eller inaktiverar dynamiska väderförändringar

- `0` → Avaktiverad
- `1` → Aktiverad

- `CurrentWeather` definierar aktuell vädertyp

- `0` → Klart
- `1` → Regn
- `2` → Dimma
- `3` → Snö
- Lägg till `+3` för mer intensiva versioner

- `CloudCoverage` styr hur mycket av himlen som täcks av moln

- Lägre värden ger klarare himmel
- Högre värden ökar molntätheten

- `TimeToChangeWeather` bestämmer hur ofta vädret ändras i sekunder

- `TimeToChangeClouds` styr hur ofta molnförhållandena uppdateras

Ytterligare miljöinställningar:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` styr hur starkt vinden påverkar gameplay
- `WindDirection` definierar vindens riktning
- `ChanceOfLightningOccuring` sätter sannolikheten för blixtnedslag
- `LightningTimer` styr hur ofta blixtar visas
- `CanLightningKill` avgör om blixtar kan skada spelare

Efter att du ändrat `ServerConfiguration.ini`, spara filen och starta om din server. De nya väderinställningarna appliceras automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat väderinställningarna på din **Over the Top WWI-server**. Genom att justera dessa värden kan du skapa dynamiska miljöer och förbättra spelupplevelsen för dina spelare.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />