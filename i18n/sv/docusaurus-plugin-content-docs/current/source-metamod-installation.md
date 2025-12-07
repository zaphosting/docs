---
id: source-metamod-installation
title: Installera Source Mod och Meta Mod på servern
description: "Upptäck hur du kan förbättra din Source-engine spelserver med Source- och Metamod för avancerad anpassning och administration → Lär dig mer nu"
sidebar_label: Installation
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Vad är SM och MM egentligen?

Source- och Metamod är två Half Life 2-tillägg som gör det möjligt att skräddarsy en Source-engine spelserver (t.ex. CS: S, CS: GO, DoD: S, TF2, osv.) ännu mer än vanligt. Det inkluderar till exempel användning av plugins och utökad administration av din server.

<InlineVoucher />

## SM / MM Installation

### Ladda ner filerna

Först och främst behöver du själva tilläggen. Det är viktigt att alltid använda de senaste versionerna (**stable**) för att de ska fungera fullt ut och vara kompatibla. De senaste versionerna kan laddas ner från följande sajter:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
Source-engine spelservrar hos ZAP-Hosting körs vanligtvis på Linux. Därför behöver du Linux-versionen av tilläggen.
:::

### Packa upp filerna

När du laddar ner de två tilläggen får du två packade filer (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar) som måste packas upp innan du laddar upp dem. Du kan använda Winrar, 7zip eller liknande program för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

Efter uppackningen får du mapparna addons och cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Ladda upp filerna

När du gjort ovanstående är det dags för själva installationen. Vi måste koppla upp oss mot servern via FTP för att kunna ladda upp tilläggens mappar.

Filerna ska laddas upp till huvudmappen. Huvudmappen finns under följande mappstruktur:

| Spel | Mapp  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

Mappstrukturen bör sedan se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## Kontrollera din SM / MM-installation

Det finns två sätt att kontrollera att tilläggen installerats korrekt:

1. Spelkonsolen
2. Remote Console (HLSW - RCON)

### Versionskontroll via kommandon

Så här kan du kolla versionen på din server:

1. Anslut till servern i spelet
2. Öppna konsolen och skriv följande kommando:

```
sm version
meta version
```

Du får då ut följande svar:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Versionskontroll via RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

Så här kollar du versionen via RCON:

1. Skriv in IP-adressen högst upp under IP / Port
2. Gå till Rcon Configuration nedanför
3. Skriv in ditt Rcon-lösenord under Rcon password
4. Öppna konsolen och skriv följande kommando:

```
sm version
meta version
```

Du får då ut följande svar:

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

Ladda ner HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />