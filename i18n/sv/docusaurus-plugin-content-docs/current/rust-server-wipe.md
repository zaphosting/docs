---
id: rust-server-wipe
title: "Rust: Server Wipe - Håll Din Server Balanserad och Ren"
description: "Lär dig vad Rust server wipes är, varför de är nödvändiga och hur du utför en wipe på din Rust-server → Läs mer nu"
sidebar_label: Server Wipe
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

I **Rust** innebär en server wipe att delar av spelvärlden nollställs för att ge alla spelare en nystart. Med tiden byggs Rust-kartor upp med stora baser, samlade resurser och etablerade spelargemenskaper. Detta kan påverka serverns balans och prestanda.

En server wipe tar bort befintlig progression och återställer en ren miljö så att spelare kan börja om från början. Många Rust-communityn gör wipes regelbundet för att hålla spelet rättvist och spännande, särskilt när nya uppdateringar eller kartor släpps.

Beroende på vilken typ av wipe det är kan antingen **kartan**, **spelarens blueprints** eller **båda** nollställas.

<InlineVoucher />



## Vad en Server Wipe Gör

En Rust server wipe tar bort sparad data om världen eller spelarens progression. Detta kan inkludera:

- Spelbyggda strukturer och baser  
- Spelarens inventarier och lagrade föremål  
- Kartans utforskningsdata  
- Inlärda blueprints (beroende på wipe-typ)

Efter en wipe fungerar servern som en helt ny värld där spelare måste samla resurser, bygga baser och lära sig progressionen på nytt.



## Typer av Rust Wipes

Rust stödjer flera typer av wipes, beroende på vad du vill nollställa. Följande typer av wipes förklaras här nedan.

### Map wipe

En **map wipe** tar bort hela världens sparfil. Alla baser, strukturer och kartframsteg raderas. När servern startar om genereras eller laddas en ny karta ner. Blueprint-progressen påverkas inte om inte en blueprint wipe också görs.

### Blueprint wipe

En **blueprint wipe** nollställer alla inlärda crafting-blueprints. Spelare måste forska fram föremål igen innan de kan tillverka dem. Denna wipe påverkar bara progressionen och nollställer inte kartan.

### Full wipe

En **full wipe** nollställer både kartan och alla spelarblueprints. Detta skapar en helt ny servermiljö och används ofta vid säsongsresets eller stora uppdateringar.



## Varför Server Wipes Är Viktiga

Server wipes hjälper till att hålla en Rust-server frisk och balanserad. Med tiden samlas stora mängder strukturer, lagringsbehållare och världsenheter på servrarna. Detta kan påverka serverns prestanda och spelbalans negativt. Regelbundna wipes ger flera fördelar:

- Återställer serverns prestanda  
- Ger alla spelare en nystart  
- Förhindrar att dominerande klaner kontrollerar kartan för evigt  
- Gör det möjligt för servrar att köra nya kartor eller kartfrön

Många Rust-communityn gör schemalagda wipes varje vecka, varannan vecka eller varje månad beroende på serverns stil.



## Så Utför Du en Server Wipe

För att göra en wipe på din Rust-server, gå in på dina serverfiler via [FTP-access](gameserver-ftpaccess.md). Leta sedan upp sparfilerna i Rust-serverns mapp. Dessa filer inkluderar vanligtvis:

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Vilka filer du tar bort avgör vilken typ av wipe som utförs. Att ta bort `proceduralmap.*` gör en **map wipe** och raderar den befintliga världen. Att ta bort `player.blueprints.*` gör en **blueprint wipe**.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Att ta bort båda resulterar i en **full wipe**. Efter att du tagit bort önskade filer, starta om servern. Servern genererar automatiskt en ny värld och låter spelarna börja om från början.



## Slutsats

Grattis! Nu vet du hur Rust server wipes fungerar och hur du utför dem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />