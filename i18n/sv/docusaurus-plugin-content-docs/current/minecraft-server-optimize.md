---
id: minecraft-server-optimize
title: "Minecraft: serverprestandaoptimering"
description: "Upptäck hur du optimerar Minecraft-servrar för bättre prestanda och smidigare spelupplevelse med effektiva inställningsjusteringar → Lär dig mer nu"
sidebar_label: Minecraft-serveroptimering
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Vad händer egentligen vid optimering?

Optimering är en viktig grej för Minecraft-servrar så att de kan rulla smidigt, och du bör definitivt lägga ner tillräckligt med tid på detta på en publik server. Det är bara med mycket tid och tester som man kan nå bästa resultat. Den här dokumentationen är därför inte nödvändigtvis något du måste följa exakt, utan mer som en hjälp för att styra åt rätt håll.

I de flesta fall ändrar optimeringen en massa inställningar på servrarna, vilket ibland kan ändra serverns beteende ganska mycket. Bland annat skruvas vissa inställningar ner, vilket avlastar servern och kan ge mer prestanda. Men för att inte påverka spelupplevelsen för mycket bör du alltid hitta en bra balans.

## Vanilla

Alternativen för att optimera en vanilla-server är tyvärr ganska begränsade eftersom det finns få inställningsmöjligheter. Vi försöker ge vanilla-servern lite mer kraft genom att göra följande:

### Synlighet

En vanlig åtgärd är att minska synfältet. Standard är 10 chunks, men många spelar med betydligt färre, som 6-8. Vissa överdriver och sätter det till exempelvis 32 chunks, vilket gör att servern måste ladda och bearbeta alla dessa chunks, vilket kostar mycket prestanda.

På en vanilla-server kan synfältet justeras i "server.properties"-konfigurationen genom att ändra värdet "view-distance". För att inte begränsa spelupplevelsen för mycket rekommenderas att sätta detta till 5-6, vilket kan avlasta servern med upp till 50%. Vi har redan en guide för detta i vår dokumentation, som du hittar [här](minecraft-default-config.md).

### Datakomprimering

På en server pågår en ständig kommunikation mellan servern och de anslutna spelarna. Spelarnas rörelser skickas till servern, som i sin tur skickar vidare till alla andra spelare. Även spelarhandlingar eller händelser i världen, som explosioner, är data som skickas om och om igen.

För att göra denna kommunikation mer effektiv kan storleken på den packade datan dubblas, vilket innebär att servern bara behöver lägga ner 50% av insatsen för att skicka samma data till spelarna jämfört med tidigare. Detta görs genom att ändra värdet "network-compression-threshold" i "server.properties" till 512. Även här har vi en guide i dokumentationen, som du hittar [här](minecraft-default-config.md).

## Forge

Precis som med Vanilla är möjligheterna att ändra på servern begränsade eftersom bara små konfigurationsfiler finns. Men du kan installera mods, vilket gör att servern kan avlastas lite.

### Förladdning av chunks

Ett sätt att avlasta servern är att förladda chunks. Servern behöver då bara ladda sparad chunk-data när spelare är online, istället för att skapa och generera chunks på plats. Det är bäst att låta detta köras över natten, som du startar på kvällen.

Du behöver installera en extra mod för detta. En bra mod finns [här](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator). Modden installeras sedan normalt på servern enligt våra instruktioner.

Innan servern startas om bör du se till att "max-tick-time" i "server.properties" är satt till "-1", annars kan servern krascha. Det är också bra att ha minst 8-10 GB RAM tillgängligt, eftersom processen kräver mycket minne. Du kan tillfälligt uppgradera RAM under natten och sedan sänka det igen efteråt.

:::info
Observera att modden ovan kanske inte är kompatibel med din Forge-version och att processen kan skilja sig om du använder en annan mod.
:::

När servern startas med modden öppnar du konsolen. Vi rekommenderar att du sätter en världgräns med radie 16 000 block. Kör följande kommandon i ordning:

- worldborder center 0 0
- worldborder set 16000

:::info
Byt ut koordinaterna till din egen världscenrum med center-kommandot om du vill undvika att "klippa av" din redan byggda värld.
:::

När gränsen är satt kan förladdningen startas med kommandot:

- pregen gen startWorldBorder

Alla chunks inom gränsen laddas nu in i tur och ordning. Det kan ta upp till 8 timmar beroende på antal mods. Processens framsteg visas regelbundet i konsolen. När det är klart meddelas det också i konsolen!

:::info
Modden kan vara installerad även efter processen. Den fortsätter optimera chunks under drift och fungerar även utan spelare på servern.
:::

### Synlighet

En vanlig åtgärd är att minska synfältet. Standard är 10 chunks, men många spelar med färre, som 6-8. Vissa sätter det till exempelvis 32 chunks, vilket kostar mycket prestanda.

Synfältet på en Forge-server justeras i "server.properties" genom att ändra "view-distance". Rekommenderat är 5-6 för att inte påverka spelupplevelsen för mycket och avlasta servern upp till 50%. Vi har en guide för detta [här](minecraft-default-config.md).

### Datakomprimering

Samma som för Vanilla: justera "network-compression-threshold" till 512 i "server.properties" för att halvera serverns belastning vid datakommunikation. Guide finns [här](minecraft-default-config.md).

## Bukkit

### Synlighet

Minska synfältet från standard 10 chunks till 5-6 för att avlasta servern upp till 50%. Justeras i "server.properties" via "view-distance". Mer info [här](minecraft-default-config.md).

### Datakomprimering

Samma som ovan, sätt "network-compression-threshold" till 512 i "server.properties". Guide [här](minecraft-default-config.md).

### Spawn-gränser

Här sänks spawnfrekvensen för mobs något. Skillnaden märks knappt, men kan påverka mobfarmar.

Redigera "bukkit.yml" och ändra under "spawn-limits":
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Du kan självklart justera värdena som du vill, men ovan är en bra medelnivå.
:::

För bättre spawn, ändra även "monster-spawns" i "ticks-per" i "bukkit.yml":
- monster-spawns: 2 #Standard: 1

Om det finns problem med monsters (t.ex. enligt timing-rapport) kan värdet höjas till 5. Testa och se vad som funkar bäst för din server.

### Chunk-hantering

Minecraft jobbar med chunks (16x16 block). Servern laddar och processar dessa i RAM. Ju fler laddade chunks, desto mer belastning.

Standardinställningar laddar aldrig ur chunks, vilket kan göra att RAM används mycket och prestandan sjunker.

För att servern bara ska ladda nödvändiga chunks, ändra i "bukkit.yml" under "chunk-gc":
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

"period-in-ticks" styr hur ofta chunks ska avlastas (i sekunder). Sänk gärna, men var försiktig så att det inte skapas en loop där chunks laddas och avlastas hela tiden, vilket belastar servern mer.

## Spigot

### Synlighet

Minska synfältet från 10 till 5-6 chunks i "spigot.yml" via "view-distance" för att avlasta servern upp till 50%.

:::info
Vill du kan du testa 4, vilket hjälper mot lagg på farmvärldar i version 1.13+.
:::

### Datakomprimering

Sätt "network-compression-threshold" till 512 i "server.properties" för att halvera serverns datakommunikationsbelastning. Guide [här](minecraft-default-config.md).

### Spawn-gränser

Samma som Bukkit: sänk spawn-limits i "bukkit.yml":
- monsters: 50
- animals: 10
- water-animals: 3
- ambient: 4

Justera "monster-spawns" till 2 i "ticks-per". Kan höjas till 5 vid problem.

### Chunk-hantering

Samma som Bukkit, ändra i "bukkit.yml" under "chunk-gc":
- period-in-ticks: 300
- load-threshold: 300

### Spawn-radie

Mobs spawnar inom en viss radie från spelare. Sänk detta för att minska spawn-problem.

I "spigot.yml" under "world-settings":
- mob-spawn-range: 3 #Standard: 4

### Entity-radier

Styr när mobs aktiveras (rör sig, ser spelare). I "spigot.yml" under "entity-activation-range" rekommenderar vi:

- animals: 6 #Standard: 32
- monsters: 16 #Standard: 32
- misc: 2 #Standard: 16
- water: 6 #Standard: 6
- tick-inactive-villagers: true #Standard: true

### Tratt-optimeringar

Trattar (hoppers) är viktiga men tunga för servern då de kollar 20 gånger per sekund om föremål ska plockas upp.

Vi ökar intervallen till var 3:e sekund för att minska belastningen. Detta kan dock påverka redstone-klockor med trattar.

I "spigot.yml" ändra:
- hopper-transfer: 24 #Standard: 8
- hopper-check: 24 #Standard: 8
- hopper-amount: 3 #Standard: 1

### Kollisioner

Sedan Minecraft 1.9 finns kollisioner så att spelare inte kan stå i varandra. Här styr vi hur ofta mobs kan kollidera, viktigt i mobfarmar.

I "spigot.yml":
- max-entity-collisions: 1 #Standard: 8

Det påverkar inte spelare, bara mobs.

### Sammanfogningsradie

Bestämmer vilka föremål och XP som slås ihop, vilket minskar antal entiteter servern måste hantera.

I "spigot.yml" under "merge-radius":
- item: 4.0 #Standard: 2.5
- exp: 6.0 #Standard: 3.0

:::info
Sätt inte högre än 8 för att undvika lagg.
:::

### Explosioner

Paper Spigot har omprogrammerat explosioner för bättre prestanda.

I "paper.yml":
- optimize-explosions: true #Standard: false

### Kistor

Servern kollar om en katt sitter på en kista, vilket är tidskrävande.

Du kan stänga av detta i "paper.yml":
- disable-chest-cat-detection: true #Standard: false

### Inventarier

Servern uppdaterar inventarier ofta. Du kan minska uppdateringsfrekvensen för bättre prestanda.

I "paper.yml":
- container-update-tick-rate: 3 #Standard: 1

:::info
Sätt inte högre än 5 för att undvika buggar. I t.ex. SurvivalGames bör det vara 1.
:::

### Ljusuppdateringar

Paper Spigot kan göra ljusuppdateringar asynkront för bättre prestanda.

I "paper.yml":
- queue-light-updates: true #Standard: false

### Spara chunk-data

Ändringar sparas ofta, vilket kan ge lagg.

Minska max antal chunks som sparas per tick i "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Standard: 24

### Redstone

Paper Spigot har snabbare redstonehantering som minskar lagg men behåller funktionalitet.

I "paper.yml":
- use-faster-eigencraft-redstone: true #Standard: false

:::info
**Varning! Kan i vissa fall ändra hur redstone fungerar mycket!**
:::

<InlineVoucher />