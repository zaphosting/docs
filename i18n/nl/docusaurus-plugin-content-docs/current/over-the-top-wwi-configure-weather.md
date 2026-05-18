---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Weer Instellen"
description: "Leer hoe je de weersinstellingen op je Over the Top WWI server configureert → Leer nu meer"
sidebar_label: Weer
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Weersinstellingen in **Over the Top WWI** hebben directe invloed op de gameplay, zichtbaarheid en sfeer. Door deze waarden aan te passen, kun je heldere omstandigheden creëren voor gebalanceerde gevechten of juist uitdagende omgevingen zoals mist, regen of stormen toevoegen.

Met aangepaste weersconfiguraties bepaal je de algehele ervaring en maak je matches dynamischer en meeslepender.

<InlineVoucher />

## Configuratie

Weersinstellingen worden ingesteld in het serverconfiguratiebestand. Je kunt dit bestand openen en bewerken in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. Zoek in dit bestand de volgende parameters:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` schakelt dynamische weersveranderingen aan of uit

- `0` → Uitgeschakeld
- `1` → Ingeschakeld

- `CurrentWeather` bepaalt het huidige weertype

- `0` → Helder
- `1` → Regen
- `2` → Mist
- `3` → Sneeuw
- Voeg `+3` toe voor intensere versies

- `CloudCoverage` regelt hoeveel van de lucht bedekt is met wolken

- Lagere waarden zorgen voor een helderdere lucht
- Hogere waarden verhogen de wolkendichtheid

- `TimeToChangeWeather` bepaalt hoe vaak het weer verandert in seconden

- `TimeToChangeClouds` regelt hoe vaak de wolkencondities worden bijgewerkt

Extra omgevingsinstellingen:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` bepaalt hoe sterk de wind de gameplay beïnvloedt
- `WindDirection` geeft de windrichting aan
- `ChanceOfLightningOccuring` stelt in hoe waarschijnlijk bliksem voorkomt
- `LightningTimer` regelt hoe vaak bliksem verschijnt
- `CanLightningKill` bepaalt of bliksem spelers kan beschadigen

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe weersinstellingen worden dan automatisch toegepast.

## Conclusie

Gefeliciteerd! Je hebt de weersinstellingen op je **Over the Top WWI server** succesvol geconfigureerd. Door deze waarden aan te passen creëer je dynamische omgevingen en verbeter je de gameplay-ervaring voor je spelers.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />