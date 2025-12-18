---
id: minecraft-custom-seed
title: "Minecraft: Custom wereld seed"
description: "Ontdek hoe je unieke Minecraft werelden maakt door custom seeds in te stellen voor nieuwe avonturen en wereldgeneratie → Leer er nu meer over"
sidebar_label: Custom wereld seed
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een seed in Minecraft is een specifieke code bestaande uit cijfers of letters die bepaalt hoe jouw gamewereld wordt gegenereerd. Het bepaalt het terrein, biomen, structuren en de resources die je in je wereld tegenkomt. Met dezelfde seed, dezelfde gameversie en instellingen wordt altijd dezelfde wereld gegenereerd, wat het makkelijk maakt om unieke werelden met anderen te delen.

Let op: je kunt de seed niet aanpassen voor een bestaande wereld. De seed beïnvloedt alleen de generatie van een nieuwe wereld. Wil je een andere seed gebruiken, dan moet je altijd een nieuwe wereld aanmaken nadat je de seed hebt ingesteld.

<InlineVoucher />

## Configuratie

Om een custom seed in te stellen, stop je eerst je server om dataconflicten te voorkomen. Open daarna je `server.properties` bestand. Dit configuratiebestand vind je in het adminpaneel van je server onder **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Zoek de regel die begint met `level-seed=`. Hier vul je de gewenste seed in. Bijvoorbeeld:

```
level-seed=12345
```

Vervang `12345` door jouw eigen seedcode. Dit kan elk getal of tekststring zijn die je wilt. Nadat je je custom seed hebt ingesteld, moet je een nieuwe wereld genereren om de wijziging door te voeren.

De makkelijkste manier is om de `level-name` in de **Instellingen** te veranderen naar een nieuwe, ongebruikte naam, bijvoorbeeld `world1`. Zo zorgt Minecraft ervoor dat er een verse wereldmap wordt aangemaakt met jouw nieuwe seed.

Wil je weten hoe je een bestaande wereld opnieuw kunt creëren? Check dan onze [Wereld opnieuw creëren](minecraft-worlds.md) gids voor uitgebreide instructies. Start daarna je server weer op. Minecraft genereert nu een nieuwe wereld met jouw custom seed.

## Conclusie

Met deze stappen heb je succesvol een nieuwe seed ingesteld voor je nieuwe wereld. Herstart je server, verken je vers gegenereerde wereld en geniet van je eigen unieke Minecraft avontuur. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />