---
id: minecraft-server-optimize
title: "Minecraft: server prestatie optimalisatie"
description: "Ontdek hoe je Minecraft-servers optimaliseert voor betere prestaties en soepelere gameplay met effectieve instellingen → Leer nu meer"
sidebar_label: Minecraft-Server Optimalisatie
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Wat gebeurt er precies tijdens optimalisatie?

Optimalisatie is super belangrijk voor Minecraft-servers zodat ze soepel draaien, en je moet hier zeker genoeg tijd voor nemen op een publieke server. Alleen met veel tijd en testen haal je het beste resultaat. Deze documentatie is dus niet per se om precies te volgen, maar meer als een handige gids om de goede kant op te gaan.

Meestal verandert optimalisatie een hoop instellingen op de servers, wat soms het gedrag van de server flink kan beïnvloeden. Zo worden sommige instellingen bijvoorbeeld strakker gezet, wat de server ontlast en dus meer performance kan geven. Maar om de game-ervaring niet te veel te beïnvloeden, moet je hier altijd de gulden middenweg vinden.

## Vanilla

De opties om een vanilla server te optimaliseren zijn helaas vrij beperkt, omdat er maar weinig instellingen beschikbaar zijn. We proberen de vanilla server wat meer power te geven met de volgende maatregelen:

### Zichtbaarheid

Een veelgebruikte maatregel is het verkleinen van de zichtafstand. De standaard zichtafstand is 10 chunks, maar veel spelers spelen met veel minder, zoals 6-8. Sommige spelers overdrijven het met chunks en zetten dit soms op 32 chunks, waardoor de server al die chunks moet laden en verwerken, wat veel performance kost.

Bij een vanilla server kun je de zichtafstand aanpassen in de "server.properties" config, door de waarde "view-distance" aan te passen. Om de game-ervaring niet te veel te beperken, raden we aan deze waarde op 5-6 te zetten, wat de server tot wel 50% ontlast.
We hebben hier al een entry voor in onze documentatie, die je [hier](minecraft-default-config.md) vindt.

### Data-compressie

Op een server is er continu data-uitwisseling tussen de server en de verbonden spelers. De bewegingen van spelers worden naar de server gestuurd, die dit weer naar alle andere spelers doorstuurt. Ook acties van spelers of gebeurtenissen in de wereld, zoals explosies, worden steeds opnieuw verzonden.

Om deze uitwisseling efficiënter te maken, kan de grootte van de gecomprimeerde data verdubbeld worden, waardoor de server maar 50% van de moeite hoeft te doen om dezelfde data te versturen. Hiervoor moet de waarde "network-compression-threshold" in de "server.properties" config aangepast worden naar 512. Ook hiervoor hebben we een documentatie-entry, die je [hier](minecraft-default-config.md) vindt.

## Forge

Net als bij Vanilla zijn de opties op de server zelf beperkt, omdat er alleen kleine config-bestanden zijn. Maar je kunt wel extra mods installeren, waardoor de server wat ontlast kan worden.

### Chunks preloaden

Een manier om de server te ontlasten is door chunks vooraf te laden. De server hoeft dan tijdens het spelen alleen de opgeslagen chunk-data te laden, en niet de chunks helemaal te genereren. Dit proces kun je het beste 's nachts laten draaien, die je 's avonds start.

Hiervoor moet je een extra mod installeren. Een geschikte mod vind je [hier](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator).
De mod installeer je daarna gewoon op de server zoals in onze handleiding beschreven.

Zorg voordat je de server herstart dat "max-tick-time" in "server.properties" op "-1" staat, anders kan de server crashen. Het is ook aan te raden minimaal 8-10 GB RAM beschikbaar te hebben, want dit proces vraagt veel geheugen. Je kunt tijdelijk het RAM verhogen voor de nacht en daarna weer verlagen.

:::info
Let op: de genoemde mod is mogelijk niet compatibel met jouw Forge-versie en het proces kan verschillen als je een andere mod gebruikt.
:::

Als de server met de mod draait, open dan de console. We raden aan een wereldgrens te maken met een radius van 16.000 blokken. Voer hiervoor de volgende commando’s achter elkaar uit:

- worldborder center 0 0
- worldborder set 16000

:::info
Vervang eventueel de coördinaten met je eigen wereldcentrum met het center-commando, zodat je wereld niet "afgesneden" wordt (als er al gebouwd is).
:::

Als de grens is ingesteld, start je het preloaden met:

- pregen gen startWorldBorder

Nu worden alle chunks binnen de grens één voor één geladen. Dit kan tot 8 uur duren, afhankelijk van het aantal mods. De voortgang wordt regelmatig in de console getoond. Als het klaar is, zie je dat ook in de console!

:::info
De mod kan ook na dit proces geïnstalleerd blijven. Hij blijft dan chunks optimaliseren, ook als er geen spelers op de server zijn.
:::

### Zichtbaarheid

Een veelgebruikte maatregel is het verkleinen van de zichtafstand. De standaard zichtafstand is 10 chunks, maar veel spelers spelen met veel minder, zoals 6-8. Sommige spelers overdrijven het met chunks en zetten dit soms op 32 chunks, waardoor de server al die chunks moet laden en verwerken, wat veel performance kost.

De zichtbaarheid van een Forge server kun je aanpassen in de "server.properties" config, door de waarde "view-distance" aan te passen. Om de game-ervaring niet te veel te beperken, raden we aan deze waarde op 5-6 te zetten, wat de server tot wel 50% ontlast.
We hebben hier al een entry voor in onze documentatie, die je [hier](minecraft-default-config.md) vindt.

### Data-compressie

Op een server is er continu data-uitwisseling tussen de server en de verbonden spelers. De bewegingen van spelers worden naar de server gestuurd, die dit weer naar alle andere spelers doorstuurt. Ook acties van spelers of gebeurtenissen in de wereld, zoals explosies, worden steeds opnieuw verzonden.

Om deze uitwisseling efficiënter te maken, kan de grootte van de gecomprimeerde data verdubbeld worden, waardoor de server maar 50% van de moeite hoeft te doen om dezelfde data te versturen. Hiervoor moet de waarde "network-compression-threshold" in de "server.properties" config aangepast worden naar 512. Ook hiervoor hebben we een documentatie-entry, die je [hier](minecraft-default-config.md) vindt.

## Bukkit

### Zichtbaarheid

Een veelgebruikte maatregel is het verkleinen van de zichtafstand. De standaard zichtafstand is 10 chunks, maar veel spelers spelen met veel minder, zoals 6-8. Sommige spelers overdrijven het met chunks en zetten dit soms op 32 chunks, waardoor de server al die chunks moet laden en verwerken, wat veel performance kost.

De zichtbaarheid van een Bukkit server kun je aanpassen in de "server.properties" config, door de waarde "view-distance" aan te passen. Om de game-ervaring niet te veel te beperken, raden we aan deze waarde op 5-6 te zetten, wat de server tot wel 50% ontlast.
We hebben hier al een entry voor in onze documentatie, die je [hier](minecraft-default-config.md) vindt.

### Data-compressie

Op een server is er continu data-uitwisseling tussen de server en de verbonden spelers. De bewegingen van spelers worden naar de server gestuurd, die dit weer naar alle andere spelers doorstuurt. Ook acties van spelers of gebeurtenissen in de wereld, zoals explosies, worden steeds opnieuw verzonden.

Om deze uitwisseling efficiënter te maken, kan de grootte van de gecomprimeerde data verdubbeld worden, waardoor de server maar 50% van de moeite hoeft te doen om dezelfde data te versturen. Hiervoor moet de waarde "network-compression-threshold" in de "server.properties" config aangepast worden naar 512. Ook hiervoor hebben we een documentatie-entry, die je [hier](minecraft-default-config.md) vindt.

### Spawn-limieten

Hier verlagen we de algemene spawn rates van mobs op de server iets. Het verschil is bijna niet merkbaar ten opzichte van de standaardwaarden. Toch kan het voorkomen dat mob farms hierdoor niet helemaal werken zoals gepland.

Om dit aan te passen, moet je de "bukkit.yml" config bewerken. Pas de volgende waarden aan bij "spawn-limits":
- monsters: 50 #Standaard: 70
- animals: 10 #Standaard: 15
- water-animals: 3 #Standaard: 5
- ambient: 4 #Standaard: 15

:::info
Je mag de waarden natuurlijk zelf aanpassen als je wilt, maar bovenstaande waarden zijn een goede gemiddelde.
:::

Om het spawnen verder te verbeteren, kun je ook de waarde "monster-spawns" in "ticks-per" in "bukkit.yml" aanpassen:
- monster-spawns: 2 #Standaard: 1

Als er een algemeen probleem is met monsters (bijvoorbeeld te zien in een timing report), kan deze waarde tot 5 worden verhoogd. Kijk dan per waarde hoe de server reageert om de beste instelling voor jouw server te vinden.

### Chunk-verwerking

Minecraft werkt met zogenaamde chunks. Een chunk bestaat uit 16x16 blokken die samen de wereld visueel vormen voor de client. De server werkt dus met chunks en laadt de benodigde chunks in het RAM. Hoe meer chunks geladen en verwerkt worden, hoe meer power de server moet leveren, wat de server soms kan overbelasten.

Servers met standaardinstellingen laden chunks nooit uit, waardoor het RAM zwaar belast wordt en er veel geheugen nodig is. Dit vermindert helaas de performance, omdat er steeds meer verwerkt moet worden.

Om ervoor te zorgen dat de server alleen de chunks laadt die nodig zijn, moeten de volgende opties in "bukkit.yml" onder "chunk-gc" aangepast worden:
- period-in-ticks: 300 #Standaard: 600
- load-threshold: 300 #Standaard: 0

De optie "period-in-ticks" bepaalt met welke interval in seconden chunks worden uitgeladen. Je kunt deze waarde verder verlagen, maar let op dat er dan een ongewenst effect kan optreden: een loop.

Bij een loop wordt een chunk uitgezet, maar is die kort daarna weer nodig, waardoor de server opnieuw performance moet steken in het laden. Dit herhaalt zich steeds, wat zwaarder is dan de chunks iets langer geladen houden.

## Spigot

### Zichtbaarheid

Een veelgebruikte maatregel is het verkleinen van de zichtafstand. De standaard zichtafstand is 10 chunks, maar veel spelers spelen met veel minder, zoals 6-8. Sommige spelers overdrijven het met chunks en zetten dit soms op 32 chunks, waardoor de server al die chunks moet laden en verwerken, wat veel performance kost.

Bij een Spigot server kun je de zichtafstand aanpassen in de "spigot.yml" config, door de waarde "view-distance" aan te passen. Om de game-ervaring niet te veel te beperken, raden we aan deze waarde op 5-6 te zetten, wat de server tot wel 50% ontlast.

:::info
Afhankelijk van je voorkeur kun je de waarde ook op 4 zetten, wat bijvoorbeeld erg helpt tegen lag bij farm world servers op versie 1.13+.
:::

### Data-compressie

Op een server is er continu data-uitwisseling tussen de server en de verbonden spelers. De bewegingen van spelers worden naar de server gestuurd, die dit weer naar alle andere spelers doorstuurt. Ook acties van spelers of gebeurtenissen in de wereld, zoals explosies, worden steeds opnieuw verzonden.

Om deze uitwisseling efficiënter te maken, kan de grootte van de gecomprimeerde data verdubbeld worden, waardoor de server maar 50% van de moeite hoeft te doen om dezelfde data te versturen. Hiervoor moet de waarde "network-compression-threshold" in de "server.properties" config aangepast worden naar 512. Ook hiervoor hebben we een documentatie-entry, die je [hier](minecraft-default-config.md) vindt.

### Spawn-limieten

Hier verlagen we de algemene spawn rates van mobs op de server iets. Het verschil is bijna niet merkbaar ten opzichte van de standaardwaarden. Toch kan het voorkomen dat mob farms hierdoor niet helemaal werken zoals gepland.

Om dit aan te passen, moet je de "bukkit.yml" config bewerken. Pas de volgende waarden aan bij "spawn-limits":
- monsters: 50 #Standaard: 70
- animals: 10 #Standaard: 15
- water-animals: 3 #Standaard: 5
- ambient: 4 #Standaard: 15

:::info
Je mag de waarden natuurlijk zelf aanpassen als je wilt, maar bovenstaande waarden zijn een goede gemiddelde.
:::

Om het spawnen verder te verbeteren, kun je ook de waarde "monster-spawns" in "ticks-per" in "bukkit.yml" aanpassen:
- monster-spawns: 2 #Standaard: 1

Als er een algemeen probleem is met monsters (bijvoorbeeld te zien in een timing report), kan deze waarde tot 5 worden verhoogd. Kijk dan per waarde hoe de server reageert om de beste instelling voor jouw server te vinden.

### Chunk-verwerking

Minecraft werkt met zogenaamde chunks. Een chunk bestaat uit 16x16 blokken die samen de wereld visueel vormen voor de client. De server werkt dus met chunks en laadt de benodigde chunks in het RAM. Hoe meer chunks geladen en verwerkt worden, hoe meer power de server moet leveren, wat de server soms kan overbelasten.

Servers met standaardinstellingen laden chunks nooit uit, waardoor het RAM zwaar belast wordt en er veel geheugen nodig is. Dit vermindert helaas de performance, omdat er steeds meer verwerkt moet worden.

Om ervoor te zorgen dat de server alleen de chunks laadt die nodig zijn, moeten de volgende opties in "bukkit.yml" onder "chunk-gc" aangepast worden:
- period-in-ticks: 300 #Standaard: 600
- load-threshold: 300 #Standaard: 0

De optie "period-in-ticks" bepaalt met welke interval in seconden chunks worden uitgeladen. Je kunt deze waarde verder verlagen, maar let op dat er dan een ongewenst effect kan optreden: een loop.

Bij een loop wordt een chunk uitgezet, maar is die kort daarna weer nodig, waardoor de server opnieuw performance moet steken in het laden. Dit herhaalt zich steeds, wat zwaarder is dan de chunks iets langer geladen houden.

### Spawn-bereik

Mobs kunnen altijd spawnen rondom spelers binnen bepaalde afstanden. Hier verlagen we die afstand iets om problemen met mob spawning te voorkomen. Deze instelling is belangrijk, omdat sommige spawn-instellingen hierboven al zijn aangepast.

We veranderen de volgende instelling in "spigot.yml" onder "world-settings":
- mob-spawn-range: 3 #Standaard: 4

### Entity-bereiken

Hier bepalen we wanneer entities - dus dieren en monsters - geactiveerd worden. Dat betekent dat dieren kunnen bewegen en monsters spelers kunnen herkennen. Dit is standaard voor alle mobs aan, maar in een soort standby-modus. In standby kunnen mobs langzaam bewegen en spelers herkennen, maar verbruiken ze minder serverkracht.

Deze aanpassingen maak je in "spigot.yml" onder "entity-activation-range". We raden deze waarden aan:
- animals: 6 #Standaard: 32
- monsters: 16 #Standaard: 32
- misc: 2 #Standaard: 16
- water: 6 #Standaard: 6
- tick-inactive-villagers: true #Standaard: true

### Hopper-optimalisaties

Hoppers zijn super belangrijk in Minecraft, maar voor servers zijn ze echte performance killers! Voor elke hopper checkt de server 20 keer per seconde of er een item opgepakt kan worden. Items verplaatsen van hopper naar hopper of in een kist kost ook veel werk.

Om dit te verbeteren verhogen we de tijdsintervallen waarop de server deze acties uitvoert. Met de hier gebruikte waarden gebeurt dit elke 3 seconden. De overdrachtssnelheid verandert niet, maar redstone-klokken met hoppers kunnen hierdoor minder goed werken.

Pas hiervoor de volgende waarden aan in "spigot.yml":
- hopper-transfer: 24 #Standaard: 8
- hopper-check: 24 #Standaard: 8
- hopper-amount: 3 #Standaard: 1

### Collisies

Sinds Minecraft 1.9 zijn er collisies, waardoor spelers bijvoorbeeld niet meer in elkaar kunnen staan. Hier bepaal je hoe vaak entities in botsing mogen komen. Vooral in mob farms met veel mobs op een kleine plek kan dit de server zwaar belasten.

Pas deze waarde aan in "spigot.yml":
- max-entity-collisions: 1 #Standaard: 8

Omdat collisies geen effect hebben op mobs, kan deze waarde omlaag. Dit geldt niet voor spelers, alleen voor mobs!

### Merge-radius

De merge-radius bepaalt welke items en XP samengevoegd worden, waardoor de server minder entities hoeft te verwerken. Vooral op servers met veel items op de grond kan dit positief zijn als je deze radius vergroot. Let wel op dat je een goede middenweg vindt, want te hoog zorgt weer voor lag doordat de server een groter gebied moet checken.

Pas deze waarden aan in "spigot.yml" onder "merge-radius":
- item: 4.0 #Standaard: 2.5
- exp: 6.0 #Standaard: 3.0

:::info
Zet deze waarden niet hoger dan 8, anders krijg je het hierboven genoemde lag-effect!
:::

### Explosies

Bij Paper Spigot zijn veel delen van Minecraft servers opnieuw geprogrammeerd om beter te draaien, ook explosies! De software verwerkt explosies efficiënter, waardoor grote lag spikes voorkomen worden.

Pas deze waarde aan in "paper.yml":
- optimize-explosions: true #Standaard: false

### Kisten

Ook bij kisten valt iets te optimaliseren! Als er een kat op een kist zit, kan die niet geopend worden. De server moet dan alle mobs in een bepaalde radius checken of er een kat op zit, wat veel tijd kost bij elke kistopening.

Je kunt dit uitschakelen met deze instelling:
- disable-chest-cat-detection: true #Standaard: false

### Inventarissen

Inventarissen worden veel gebruikt, maar zijn niet allemaal hetzelfde (bijv. kist of werkbank). Met deze wijziging geef je de server een kleine boost zonder dat iemand het merkt! Je stelt in na hoeveel ticks de server elk inventory update.

Pas deze waarde aan in "paper.yml":
- container-update-tick-rate: 3 #Standaard: 1

:::info
Zet deze waarde niet hoger dan 5, anders kan het inventory buggy worden! In gamemodes zoals SurvivalGames, waar veel spelers tegelijk kisten openen, moet deze op 1 blijven.
:::

### Licht-updates

Paper Spigot biedt ook een optie om licht-updates beter te verwerken. Deze updates gebeuren dan niet binnen een tick (wat soms lag veroorzaakt), maar asynchroon buiten de tick om.

Pas deze waarde aan in "paper.yml":
- queue-light-updates: true #Standaard: false

### Chunk data opslaan

Als er iets verandert in een chunk, wordt dat niet direct naar de harde schijf geschreven, maar eerst in het RAM geladen. Toch worden veranderingen vaak opgeslagen, wat soms extreme lag kan veroorzaken, vooral bij grote veranderingen.

Met deze instelling beperken we het aantal chunks dat per save wordt opgeslagen. Hierdoor blijft meer data langer in het RAM, wat soms beter is.

Pas deze waarde aan in "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Standaard: 24

### Redstone

Redstone wordt vaak gebruikt in soms enorme circuits. Op publieke servers is dit vaak het zwakste punt van bijna 90% van de servers, omdat het veel lag kan veroorzaken. Paper Spigot gebruikt een alternatieve verwerking van Redstone die het bijna onschadelijk maakt, maar met dezelfde functionaliteit als Vanilla!

Pas deze waarde aan in "paper.yml":
- use-faster-eigencraft-redstone: true #Standaard: false

:::info
**Let op! In sommige situaties kan dit het gedrag van Redstone flink veranderen!**
:::

<InlineVoucher />