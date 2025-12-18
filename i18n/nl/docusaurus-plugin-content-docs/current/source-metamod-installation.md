---
id: source-metamod-installation
title: Installeer Source Mod en Meta Mod op je server
description: "Ontdek hoe je jouw Source engine game server kunt upgraden met Source- en Metamod voor geavanceerde aanpassingen en beheer → Leer het nu"
sidebar_label: Installatie
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wat is SM en MM eigenlijk?

Source- en Metamod zijn twee uitbreidingen voor Half Life 2, waarmee je een Source engine game server (zoals CS: S, CS: GO, DoD: S, TF2, etc.) nog meer kunt personaliseren dan normaal. Denk hierbij aan het gebruik van plugins en uitgebreidere serveradministratie.

<InlineVoucher />

## SM / MM Installatie

### Download de bestanden

Allereerst heb je de daadwerkelijke extensies nodig. Het is belangrijk om altijd de nieuwste versies (**stable**) te gebruiken, zodat ze volledig functioneel en compatibel blijven. De nieuwste versies kun je downloaden via deze websites:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
Source engine gameservers bij ZAP-Hosting draaien meestal op een Linux besturingssysteem. Daarom heb je de Linux-versie van de extensies nodig.
:::

### Pak de bestanden uit

Na het downloaden van de twee extensies krijg je twee gecomprimeerde bestanden (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar), die je eerst moet uitpakken voordat je ze uploadt. Gebruik hiervoor Winrar, 7zip of een vergelijkbaar programma.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

Uit de uitgepakte bestanden haal je de mappen addons en cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Upload de bestanden

Als je dit gedaan hebt, begint de eigenlijke installatie. Hiervoor moet je via FTP verbinding maken met je server om de mappen van de extensies te uploaden.

De bestanden moeten in de hoofdmap van je server worden geplaatst. De hoofdmap vind je in de volgende mappenstructuur:

| Game | Map  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

De mappenstructuur zou er daarna zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## Check je SM / MM installatie

Er zijn twee manieren om te checken of de extensies goed geïnstalleerd zijn:

1. In de game console
2. Via de Remote Console (HLSW - RCON)

### Versie check via commands

Volg deze stappen om de versie op je server te checken:

1. Verbind met je server in de game
2. Open de console en typ de volgende commands:

```
sm version
meta version
```

Je krijgt dan dit als output:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Versie check via RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

Volg deze stappen om de versie via RCON te checken:

1. Vul bovenaan het IP-adres in bij IP / Port
2. Ga naar Rcon Configuratie onderaan
3. Vul je Rcon-wachtwoord in bij Rcon password
4. Open de console en typ de volgende commands:

```
sm version
meta version
```

Je krijgt dan dit als output:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Download HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />