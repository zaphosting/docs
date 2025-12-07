---
id: minecraft-pregenerate-world
title: "Minecraft: Förgenerera Värld (Chunks)"
description: "Upptäck hur du effektivt förgenererar Minecraft-världar med plugins eller mods för smidigare gameplay och optimerad serverprestanda → Lär dig mer nu"
sidebar_label: Förgenerera Värld (Chunks)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Vill du generera din värld snabbt, effektivt och säkert i förväg, istället för under spelets gång? Minecraft har inte en inbyggd funktion för detta som standard. Men det går att fixa med specialdesignade plugins eller mods. Hur du använder dem och vad du behöver tänka på förklaras mer i detalj nedan.



## Förberedelse

Först och främst måste du säkerställa att din server är anpassad för att använda plugins eller mods. Du behöver använda någon av följande Minecraft-varianter för att kunna göra detta: 

- Minecraft: Forge, Minecraft Fabric (mods)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (plugins) 

Om du inte redan använder någon av dessa Minecraft-varianter kan du använda [game switch(gameserver-gameswitch.md)-funktionen för att välja önskat spel.


## Installation
Det vanligaste sättet att förgenerera chunks är att använda [Chunky](https://github.com/pop4959/Chunky), som finns för flera serverplattformar både som plugin och mod-version. I det här exemplet förklaras och visas chunk-generering med Chunky.

| Variant | Ladda ner |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Ladda ner **Chunky** som antingen plugin eller mod och installera det på din server. Om du är osäker på hur man installerar [Plugins](minecraft-pluginuploader.md) eller [Mods](minecraft-forge-fabric-add-mods-modpacks) hjälper våra guider dig.



## Användning 

När **Chunky** är installerat kan du börja generera chunks. Processen startas med kommandot `chunky start`.

Vill du pausa genereringen tillfälligt och fortsätta senare kan du använda kommandona `chunky pause` och `chunky continue`. För att helt avbryta processen använder du `chunky cancel`. Kommandona kan köras via live-konsolen eller som operatör direkt i spelet på din server.

:::warning Överbelastning
Att permanent överskrida resursgränser under en längre tid kan leda till tillfälliga avstängningar. För att undvika detta bör chunk-genereringen ske i en balanserad takt och omfattning så att systembelastningen håller sig inom acceptabla nivåer.

Mer info om resursgränser och möjliga åtgärder hittar du i vår [resursgräns](gameserver-resourcelimit.md)-guide. 
:::



## Kommandon

Här hittar du alla kommandon som Chunky använder för att generera och hantera chunks. 

#### Uppgiftshantering

| Kommando         | Beskrivning                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Startar en ny chunk-genereringsuppgift från aktuell markering |
| chunky pause    | Pausar pågående chunk-generering och sparar framsteg         |
| chunky continue | Fortsätter pågående eller sparade chunk-genereringsuppgifter  |
| chunky cancel   | Stoppar pågående chunk-generering och avbryter framsteg       |



#### Markering

| Kommando                                    | Beskrivning                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [värld]                       | Sätter den valda världen                                     |
| chunky shape `<shape>`                     | Sätter formen för genereringen                               |
| chunky center [`<x>` `<z>`]                | Sätter den aktuella mittpunkten                              |
| chunky radius `<radius>`                   | Sätter den aktuella radien                                   |
| chunky worldborder                         | Sätter mittpunkt och radie så att det matchar världens gräns |
| chunky spawn                               | Sätter mittpunkten till spawn-punkten                        |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Sätter markeringen via hörnkoordinater                       |
| chunky pattern `<pattern>`                 | Sätter önskat genereringsmönster                             |
| chunky slection                            | Visar aktuell markering                                      |





#### Övrigt

| Kommando                   | Beskrivning                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Växla visning av uppdateringsmeddelanden             |
| chunky quiet `<interval>` | Sätt tyst läge-intervall i sekunder för uppdateringar |
| chunky progress           | Visa förgenereringsprogress i spelet för alla uppgifter |
| chunky reload             | Laddar om konfigurationen                             |
| chunky trim               | Radera chunks utanför markeringen                      |



## Avslutning

Genom att följa stegen har du nu installerat Chunky och kan förgenerera din värld (chunks). Grattis! Om du följt allt rätt bör du ha en fungerande koppling till servern. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />