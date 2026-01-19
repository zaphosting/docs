---
id: hytale-whitelist
title: "Hytale: Whitelist-inställning och hantering"
description: "Upptäck hur du säkrar din Hytale-server genom att hantera spelartillgång med whitelist-funktioner och skydda ditt gameplay → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Whitelist är en säkerhets- och åtkomstkontrollfunktion som låter dig begränsa vem som kan ansluta till din Hytale-server. När den är aktiverad får endast spelare som uttryckligen finns med på whitelist ansluta. Detta är extra användbart för privata servrar, community-servrar, utvecklingsmiljöer eller testfaser där tillgången ska vara begränsad till betrodda spelare.

:::info Tidig Access-Notis

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, moddsupport och installationsflöden fortsätta att förändras över tid.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Aktivera whitelist

Whitelist kan aktiveras antingen via serverkonsolen eller direkt i spelet. Se till att du har nödvändiga rättigheter, som operatörsbehörighet, innan du kör dessa kommandon.

För att aktivera whitelist, kör följande kommando:

```
/whitelist enable
```



När whitelist är aktiverad kommer alla spelare som inte finns på listan nekas åtkomst när de försöker ansluta till servern. För att kontrollera om whitelist är aktiv, använd:

```
/whitelist status
```

Detta kommando visar det aktuella läget för whitelist och hjälper dig att bekräfta att inställningen har tillämpats korrekt.



## Inaktivera whitelist

Om du vill tillåta alla spelare att ansluta till servern igen kan du när som helst stänga av whitelist. Använd följande kommando för att inaktivera den:

```
/whitelist disable
```

När whitelist är avstängd kommer servern inte längre begränsa åtkomsten baserat på whitelist och alla spelare kan ansluta.



## Hantera whitelist

Whitelist kan hanteras dynamiskt medan servern körs. Spelare kan läggas till eller tas bort när som helst utan att behöva starta om servern, genom att använda kommandon.



### Lägg till spelare i whitelist

För att ge en specifik spelare åtkomst till servern, lägg till dem i whitelist med:

```
/whitelist add <playername>
```

Den angivna spelaren får omedelbart tillåtelse att ansluta till servern, förutsatt att whitelist är aktiverad.



### Ta bort spelare från whitelist

För att ta bort en spelares åtkomst, ta bort dem från whitelist:

```
/whitelist remove <playername>
```

När spelaren tagits bort kan hen inte längre ansluta så länge whitelist är aktiv.



### Lista whitelisted-spelare

För att se alla spelare som för närvarande får ansluta till servern, kör:

```
/whitelist list
```

Detta kommando visar hela listan med spelarnamn som finns på whitelist.



### Rensa whitelist

Om du vill ta bort alla spelare från whitelist på en gång kan du rensa den helt:

```
/whitelist clear
```

Detta tar bort alla befintliga whitelist-poster men inaktiverar inte whitelist i sig.



## Hantera whitelist via fil

Förutom kommandon kan whitelist också hanteras direkt via en konfigurationsfil. Denna metod är smidig för större ändringar eller när du vill förbereda en whitelist innan servern startas. Filen som styr detta heter `whitelist.json` och finns i servermappen.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Avslutning

Grattis, du har nu framgångsrikt satt upp whitelist för din Hytale-server. Din server är nu begränsad till godkända spelare, vilket hjälper dig att behålla kontroll, integritet och en tryggare multiplayer-miljö.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂