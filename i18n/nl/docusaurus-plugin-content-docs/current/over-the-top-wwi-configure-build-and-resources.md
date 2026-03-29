---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Configureer Build Points en Resources"
description: "Leer hoe je build points, kanonnen en resource limits instelt op je Over the Top WWI server → Leer het nu"
sidebar_label: Build Points & Resources
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Build points en resource-instellingen in **Over the Top WWI** bepalen hoeveel structuren, verdedigingswerken en uitrusting spelers kunnen plaatsen tijdens een match. Deze waarden hebben direct invloed op de gameplay-balans, vooral in modes waar bouwen en fortificaties een grote rol spelen.

Door deze instellingen aan te passen, kun je een meer verdedigende gameplay creëren met uitgebreide fortificaties, of juist resources beperken voor snellere en agressievere matches.

<InlineVoucher />

## Configuratie

Build- en resource-instellingen stel je in via het serverconfiguratiebestand. Je kunt dit bestand openen en aanpassen in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. In dit bestand vind je de volgende parameters:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` en `DefenderBuildPoints` bepalen hoeveel build points elk team tot zijn beschikking heeft

- `AttackerCannonPoints` en `DefenderCannonPoints` regelen hoeveel kanonnen of artillerie-eenheden ingezet kunnen worden

- `SapperBPRegenAmount` geeft aan hoeveel build points er over tijd worden geregenereerd

- `SapperCannonPRegenAmount` bepaalt hoe snel kanonpunten regenereren

- `SapperPropBPRegenTime` en `CannonPropPRegenTime` geven de tijd in seconden aan tussen elke regeneratie-tick

Pas deze waarden aan om te bepalen hoeveel structuren en verdedigingswerken spelers kunnen bouwen en hoe snel resources worden aangevuld tijdens de gameplay.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe resource-instellingen worden dan automatisch toegepast.

## Conclusie

Gefeliciteerd! Je hebt nu succesvol de build points en resource-instellingen geconfigureerd op je **Over the Top WWI server**. Zo bepaal je zelf de fortificaties, balanceer je de gameplay en bepaal je de algehele strijdervaring.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />