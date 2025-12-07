---
id: nmrih-plugins
title: "No More Room In Hell: Installeer plugins op je eigen server"
description: "Ontdek hoe je je game server kunt customizen en verbeteren met Sourcemod en Metamod voor betere managementopties en features → Leer het nu"
sidebar_label: Plugins Installeren
services:
  - gameserver-nmrih
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/nmrih-plugins.json';


## Introductie

Leer hoe je Sourcemod en Metamod installeert en hoe je plugins gebruikt voor je server. Beide extensies laten je games zoals CS:S, CS:GO, DoD:S of TF2 customizen en bieden veel meer opties voor serverbeheer.

Met Sourcemod en Metamod kun je plugins toevoegen, speciale features activeren en je server precies naar jouw wensen inrichten.

<InlineVoucher />



## Sourcemod / Metamod installatie

### Voorbereiding

De benodigde extensies kun je downloaden via [Sourcemod](https://sourcemod.net/) en [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Gebruik altijd de nieuwste **stabiele** versies voor optimale functionaliteit en compatibiliteit.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Je hebt de Linux-pakketten **Sourcemod** en **Metamod** nodig. Download ze vanaf de genoemde bronnen. Na het downloaden heb je twee gecomprimeerde bestanden. Pak deze uit op je computer zodat je een addons map krijgt met daarin de mappen `sourcemod` en `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installatie

Als je dit gedaan hebt, kun je verder met de installatie. Upload de bestanden via FTP naar je server met een FTP-client. Ben je niet bekend met FTP? Check dan deze handleiding: [Toegang via FTP](gameserver-ftpaccess.md)

Upload daarna de **addons** map naar de hoofdmap van je server. De mappenstructuur zou er dan zo uit moeten zien:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

De installatie van **Sourcemod** en **Metamod** is nu klaar. Je kunt in de game verbinding maken met je server en in de console het commando ``sm version`` gebruiken om te checken of Sourcemod en Metamod goed geïnstalleerd zijn. De output zou er zo uit moeten zien:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Als je de melding **Unknown command** krijgt, is er iets misgegaan tijdens de installatie.



## Plugins installeren

### Voorbereiding

Als Sourcemod en Metamod goed werken, kun je beginnen met het toevoegen van plugins. Download de plugins die je wilt gebruiken vanaf [Sourcemod](https://sourcemod.net/), waar een grote en groeiende collectie beschikbaar is. Zorg dat je voor elke plugin het bijbehorende .smx bestand hebt.

### Installatie

Heb je de gewenste plugins gedownload? Upload dan via FTP de pluginbestanden naar de map:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Populaire plugins
Ben je nog op zoek naar de perfecte plugins voor je server? Check onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen plugins om je gameplay te boosten en je server die finishing touch te geven. Laat je inspireren en vind precies wat bij jouw project past.
<SearchableItemList items={items} />


## Conclusie

Als je alle stappen hebt gevolgd, heb je Sourcemod/Metamod en je gewenste plugins succesvol geïnstalleerd. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />