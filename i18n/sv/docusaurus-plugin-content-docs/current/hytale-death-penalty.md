---
id: hytale-death-penalty
title: "Hytale: Ändra Dödsstraff"
description: "Upptäck hur dödsstraff fungerar på din Hytale-server → Läs mer nu"
sidebar_label: Ändra Dödsstraff
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

På en Hytale-server bestämmer **dödsstraffet** hur spelare påverkas när de dör. Den här inställningen styr i vilken grad spelarens framsteg, föremål, hållbarhet eller andra spelkonsekvenser tillämpas efter en dödshändelse.

:::info Early Access-meddelande

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, moddstöd och installationsflöden fortsätta att ändras över tid.

:::

<InlineVoucher />


## Tillgängliga inställningar för dödsstraff
Dödsstraffets inställningar styr hur spelarens död påverkar inventariets innehåll och föremålens hållbarhet. Dessa alternativ låter dig bestämma om föremål behålls, delvis förloras eller helt tappas, samt hur mycket slitage föremålen får vid döden.

Följande konfigurationsalternativ finns:

**ItemsLossMode**  
 Denna inställning definierar det övergripande beteendet för föremålsförlust när en spelare dör.  
 Stöder följande värden:

- `None` – Spelare behåller hela sitt inventarium efter döden  
- `All` – Alla föremål tappas vid döden  
- `Configured` – Föremålsförlust bestäms av procentbaserade inställningar

**ItemsAmountLossPercentage**  
 Detta värde används endast när `ItemsLossMode` är satt till `Configured`.  
 Det definierar hur stor del av varje föremålsstack som tas bort vid döden, uttryckt i procent.  
 Exempelvis betyder värdet `50.0` att hälften av varje stack förloras.

**ItemsDurabilityLossPercentage**  
 Denna inställning styr hur mycket hållbarhet föremål förlorar när en spelare dör.  
 Värdet anges som en procentandel av föremålets nuvarande hållbarhet och gör att döden får konsekvenser utan att föremålen försvinner helt.

Tillsammans ger dessa inställningar dig finjusterad kontroll över hur förlåtande eller straffande döden ska vara på servern.  
Noggrann justering säkerställer en balanserad upplevelse som matchar serverns tänkta svårighetsgrad och spelstil.



## Konfigurera dödsstraff

Inställningarna för dödsstraff finns i din servers huvudfil `config.json`. Dessa värden läses in när servern startar och gäller globalt för alla spelare.

I konfigurationsfilen är dödsrelaterade inställningar en del av gameplay-konfigurationen. För att lägga till eller ändra dödsstraffet, leta upp följande rad i `config.json`:

```
"GameplayConfig": "Default",
```

Denna rad definierar den aktiva gameplay-konfigurationsprofilen. Dödsstraffets konfiguration placeras direkt under denna rad som ett nytt block. När du hittat den, lägg till döds-konfigurationsblocket för att definiera hur respawn och föremålsförlust hanteras:

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

Följande exempel visar en typisk konfiguration där föremålsförlust och hållbarhetsförlust delvis tillämpas vid döden:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

I denna konfiguration använder servern förlustläget `Configured`, vilket betyder att föremålsförlust styrs av procentandelar.  
När en spelare dör tas hälften av varje föremålsstack bort och föremålen förlorar 25 procent av sin nuvarande hållbarhet.

Om ingen föremålsförlust alls ska ske kan förlustläget sättas till `None`, då ignoreras procentvärdena:

```
{
  "ItemsLossMode": "None"
}
```

För en mer straffande upplevelse där alla föremål tappas vid döden kan konfigurationen sättas till:

```
{
  "ItemsLossMode": "All"
}
```

Efter att ha ändrat `config.json` måste servern startas om för att ändringarna ska träda i kraft.  
Vi rekommenderar att du testar beteendet i spelet efter omstart för att säkerställa att dödsstraffet matchar den önskade svårighetsgraden.



## Slutsats

Med dödsstraffet konfigurerat har du nu en tydlig översikt över hur spelarens död hanteras på din Hytale-server. Vid fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂



<InlineVoucher />