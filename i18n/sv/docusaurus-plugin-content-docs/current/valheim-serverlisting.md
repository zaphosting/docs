---
id: valheim-serverlisting
title: "Valheim: Problem med serverlistning för Steam-spel som använder Steamworks"
description: "Upptäck varför populära spel har svårt att lista alla aktiva servrar på grund av Steamworks-begränsningar och hur det påverkar din multiplayer-upplevelse → Läs mer nu"
sidebar_label: Problem med serverlistning
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Tyvärr har många populära spel som ARK eller Valheim stora problem med att lista alla servrar i den inbyggda serverlistan.

Detta beror på att dessa spel använder "Steamworks"-mjukvaran för sin listning.

Steamworks kan lista max 4880 servrar. Om ett spel har fler aktiva servrar än så, kommer bara en liten del av de aktiva servrarna att visas för spelaren.

Det är väldigt slumpmässigt om spelare 1 ser server Y eller inte.  
Det händer alltså också att spelare 1 ser server Y, men spelare 2 gör det inte. Spelare 3 ser den däremot igen, men ser inte en annan server som spelare 1 ser.

För att utesluta ett problem med serverleverantören kan du söka efter servern under "Steam" - "Visa" - "Server" med IP och port. Om den hittas där är kopplingen mellan spelare och server felfri. Detta eftersom en direkt förfrågan görs av spelaren.

Ett bra exempel för att bekräfta problemet är att ARK-spelare, särskilt de som startar spelet via Steam, inte kan hitta servrar. Om de istället öppnar ARK via Epic Games hittas servrarna perfekt. Där används inte Steamworks.

Det finns också flera spelutvecklare som kommenterat detta problem. Till exempel trodde Garry Newman från Garrysmod att problemet låg hos hans serverleverantör OVH. Men så var det inte. Problemet finns även hos ZAP-Hosting och alla andra serverleverantörer, eftersom det är direkt kopplat till Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/mWWpmZzJ6ZXX59W/preview)

Källa: https://x.com/garrynewman/status/1334446218437681152?s=20

Eller Rust, som skriver i sin blogg:

```
Det är inte bara solsken och regnbågar när man får en så plötslig popularitetsökning.  
Man börjar se sprickor i grunden, mest märkbart för oss var att serverbläddraren aldrig var tänkt att hantera så många servrar.  
Utan att gå in på teknikaliteter har detta lett till att många servrar inte visas för användare och orsakar mycket frustration för serverägare.  
Vi jobbar just nu på och utforskar lösningar, så ha tålamod med oss.
```

Källa: https://rust.facepunch.com/blog/

Vi kommer fortsätta hålla koll på problemet och informera här när en lösning finns.

<InlineVoucher />