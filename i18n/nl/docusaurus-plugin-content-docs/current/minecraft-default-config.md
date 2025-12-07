---
id: minecraft-default-config
title: "Minecraft: Server Config instellingen"
description: "Ontdek hoe je Minecraft serverinstellingen optimaliseert voor performance en stabiliteit, terwijl je de gameplay ervaring aanpast → Leer nu meer"
sidebar_label: Server Config
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wat kan ik instellen in deze config?

Minecraft wordt standaard geleverd met een kleine config genaamd *server.properties*.  
De server kan hier fundamenteel mee worden ingesteld. We leggen uit wat de verschillende opties doen en waar je op moet letten bij het aanpassen. Sommige instellingen moet je **zorgvuldig** behandelen, omdat ze soms drastisch invloed hebben op de performance van de server, wat onder andere kan leiden tot instabiliteit.

<InlineVoucher />

### view-distance

Met deze instelling bepaal je de *maximale zichtafstand* die de server aanhoudt. Ongeacht wat de client instelt, stuurt de server nooit chunk-data verder dan deze waarde. Je kunt deze waarde ook verlagen om de serverperformance te beschermen. De game-ervaring blijft prima met een waarde van 5. Lagere waarden dan 5 worden niet aanbevolen en kunnen in zeldzame gevallen problemen veroorzaken.  
**BELANGRIJK:** Zet deze waarde nooit hoger dan nodig, want dat kan flinke performanceproblemen veroorzaken.

:::info
Deze instelling geldt alleen voor Vanilla of Forge servers.

Voor Bukkit, Spigot en Paper Spigot moet de waarde in hun eigen config worden aangepast.
:::

### max-build-height

Hiermee bepaal je tot welke hoogte (Y-coördinaat) gebouwd of afgebroken kan worden. Waarden boven 256 zijn **niet toegestaan** en worden genegeerd door de server. Handig als je de maximale bouwhoogte wilt beperken.

### server-ip

Als je meerdere IP-adressen hebt geboekt voor je root of VPS, kun je hier aangeven welke IP gebruikt moet worden. Heb je maar één IP, dan kun je dit veld leeg laten – hetzelfde geldt voor een gameserver.

### level-seed

Standaard genereert de wereldgenerator altijd een willekeurige [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) en dus een compleet willekeurige wereld.  
Je kunt hier je eigen seed instellen, bestaande uit **letters of cijfers**, waarna de server de bijbehorende wereld aanmaakt. De maximale lengte is **32 tekens**.

:::info
Er zijn diverse seed generators waarmee je een wereld helemaal naar eigen wens kunt configureren.

[Deze](https://minecraft.tools/en/custom.php) generator is een van de beste en kan bijna alles.
:::

### gamemode

Hiermee stel je de standaard gamemode in voor je server. Elke speler krijgt deze modus bij het eerste bezoek, en kan daarna altijd wisselen met het [/gamemode](https://minecraft.fandom.com/wiki/Gameplay) commando.

Als je de ID’s van de gamemodes niet kent, hier een overzicht:

| waarde | Gamemode |
|--|--|
| 0 | Survival |
| 1 | Creative |
| 2 | Adventure |
| 3 | Spectator |

### server-port

Je kunt een vaste poort toewijzen aan je server waarmee deze bereikbaar is in combinatie met het IP-adres. Wil je meerdere servers draaien, dan moet elke server een andere poort krijgen. Meestal hoef je deze optie niet aan te passen, behalve bij een BungeeCord netwerk.

### enable-command-block

Hiermee schakel je [command blocks](https://minecraft.fandom.com/wiki/Command_Block) in op de server. Als je ze niet nodig hebt, zet deze optie op *false*, want command blocks kunnen soms misbruikt worden om de server te beschadigen.

### allow-nether

Met deze optie zet je de Nether aan of uit. Is het uitgeschakeld, dan kun je niet meer via een portal naar de Nether. Toegang via plugins zoals [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/) blijft wel mogelijk.

### enable-rcon

Met RCON kun je vanaf elke locatie commando’s uitvoeren via de console. Hiervoor is een wachtwoord en een aparte poort nodig. Deze instellingen stel je ook hier in. We raden aan RCON uit te zetten om ongewenste toegang te voorkomen.

### op-permission-level

Hier stel je het standaard OP-niveau in dat een nieuwe operator krijgt. De verschillende niveaus en hoe je ze per speler toewijst, leggen we [hier](minecraft-addop.md) uitgebreider uit.

### enable-query

Met query kunnen externe diensten, zoals een website, aparte data ophalen zoals het aantal spelers of een lijst van huidige spelers. Zo kun je bijvoorbeeld met PHP serverdata op je website tonen. Sommige serverlijsten gebruiken dit om je server correct te tonen.

### prevent-proxy-connections

Hiermee bepaal je of spelers via een VPN/proxy kunnen verbinden. VPN’s worden vaak gebruikt om een IP-ban te omzeilen, dus deze optie kan erg handig zijn. Soms kan het ook normale verbindingen onterecht blokkeren.

:::info
Wil je uitgebreide controle over VPN/proxy verbindingen, dan is het slim om een plugin te installeren.

Er zijn veel gratis plugins, maar deze (betaalde) [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) heeft ons het meest overtuigd en beschermt je server tegen bot-aanvallen.
:::

### generator-settings

Net als in singleplayer kan de server een wereld genereren volgens bepaalde specificaties. Dit lijkt op een seed, maar het blijft een willekeurige wereld en is dus uniek.

Een voorbeeld van een generatiecode voor een vlakke wereld:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Wil je een speciaal texture pack gebruiken op de server? Geef hier dan de **directe downloadlink** op.  
Het pack wordt dan automatisch geladen en geactiveerd nadat de speler akkoord gaat.

### player-idle-timeout

Spelers die inactief zijn kunnen automatisch worden gekickt na het opgegeven aantal seconden. Handig als je server vol zit en je inactieve spelers wilt verwijderen om plek te maken voor nieuwe, actieve spelers.

### level-name

De wereld heet standaard "world". Met deze optie geef je een andere naam op. Als er al een wereld bestaat en je verandert de naam, wordt er automatisch een nieuwe wereld met die naam aangemaakt. De oude wereld blijft gewoon in de oude map staan.

### motd

Hier kun je een bericht instellen dat in de serverlijst wordt getoond. Dit bericht zie je niet bij directe verbinding, tenzij je speciale mods in de client hebt. Je kunt alle kleuren en formatting gebruiken die Minecraft biedt.

:::info
De MOTD maak je snel en makkelijk met deze [tool](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

Bepaalt of spelers altijd in de standaard gamemode komen bij het betreden van de server. Ongeacht in welke modus ze de server verlieten, wordt de standaard modus altijd ingesteld.

### hardcore

Hardcore mode zorgt ervoor dat spelers bij overlijden verbannen worden of in spectator mode komen. Wil je dit gebruiken, dan **moet** je een nieuwe wereld aanmaken, want hardcore beïnvloedt de wereldgeneratie.

### white-list

Activeert de [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), waardoor alleen spelers op de lijst toegang krijgen. De commando’s om spelers toe te voegen, te verwijderen en meer staan op die pagina.

### broadcast-console-to-ops

Bepaalt of operators een chatmelding krijgen als er commando’s in de game worden uitgevoerd.

### pvp

Hiermee zet je PVP aan of uit op de server. Is PVP uit, dan kunnen spelers elkaar niet meer beschadigen. Dit voorkomt niet dat spelers bijvoorbeeld lava plaatsen om anderen te raken, dus aanvallen via omwegen blijft mogelijk.

### spawn-npcs

In dorpen kom je NPC’s tegen, als deze optie aan staat. Staat deze op *false*, dan zijn er geen NPC’s op de server. Handig als je alleen handel tussen spelers wilt en zo de economie van een economy server wilt versterken.

### generate-structures

Deze instelling beïnvloedt de wereldgenerator. Hiermee bepaal je of structuren zoals dorpen of tempels worden gegenereerd.

### spawn-animals

Bepaalt of dieren op de server spawnen. Een lijst van alle dieren vind je  
[hier](https://minecraft.fandom.com/wiki/Animal).

### snooper-enabled

Als dit aan staat, stuurt de server anonieme data naar Mojang. Die data wordt gebruikt voor verdere ontwikkeling en optimalisatie. Deze optie heeft geen invloed op de serverperformance.

### difficulty

Hiermee stel je de algemene moeilijkheidsgraad in op de server. Mobs doen dan meer of minder schade, afhankelijk van de instelling. Meer info en opties vind je [hier](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Deze waarde bepaalt vanaf welke grootte data tussen client en server wordt gecomprimeerd. Bij een kleine waarde zoals de standaard 256 worden data ongeveer 20 keer per seconde uitgewisseld. Een waarde van 512 is aan te raden om de server te ontlasten zonder negatieve effecten. Zet deze waarde **nooit hoger** dan 1024.

**Wees voorzichtig met deze instelling, want verkeerde waarden kunnen grote problemen veroorzaken voor spelers en onherstelbare schade aan de wereld.**

### level-type

Bepaalt het wereldtype waarmee de wereldgenerator een wereld maakt. Na het wijzigen van deze optie moet je een **nieuwe wereld** aanmaken, anders ontstaan er rare overgangen waar nieuwe chunks worden gegenereerd.

| Waarde | Betekenis |
|--|--|
| DEFAULT | Normale wereld met bergen, valleien, dorpen, etc. |
| FLAT | Helemaal vlakke wereld met alleen dorpen |
| LARGEBIOMES | Zoals een normale wereld, maar met grotere biomen |
| AMPLIFIED | Ook zoals normaal, maar met scherpe hoogteverschillen |
| BUFFET | Een buffet-wereld, waarbij de instellingen via *generator-settings* worden bepaald |

### spawn-monsters

Bepaalt of monsters op de server spawnen. Een lijst van monsters vind je  
[hier](https://minecraft.fandom.com/wiki/Mob).

### max-tick-time

Regelt de maximale duur van een tick. Verschillende servertaken worden in een tick uitgevoerd. Als een tick langer duurt dan 60 seconden (standaard), stopt de server automatisch.

Bij Forge servers kan dit vervelend zijn, omdat mods vaak veel eisen stellen en daardoor meer tijd nodig hebben. In dat geval kun je de waarde op *-1* zetten, wat de automatische stop uitschakelt.

### max-players

Stelt het aantal slots in dat bezet kan worden en het maximale aantal spelers op de server.

### enforce-whitelist

Met deze optie worden wijzigingen aan de whitelist direct geaccepteerd. Normaal moet de whitelist eerst worden herladen voordat de wijzigingen actief zijn.

### online-mode

Hiermee bepaal je of spelers zonder premium account kunnen verbinden. Let op: bij een publieke server kunnen spelers zo rechten krijgen door een operatornaam te kiezen, omdat de server alleen op naam controleert.

Om dit te voorkomen, raden we aan een wachtwoord-plugin te installeren op een plugin-compatibele server zoals Spigot.

### allow-flight

Schakelt de eigen AntiCheat van Minecraft aan of uit voor vliegen. Vaak gebruiken hack clients dit om zonder toestemming te vliegen.

:::info
Wij raden altijd aan om een AntiCheat plugin te installeren!
:::

### function-permission-level

Geeft het OP-niveau aan waarmee commando’s uitgevoerd kunnen worden. Op niveau 4 kunnen bijvoorbeeld serverstops, kicks en bans worden uitgevoerd.

<InlineVoucher />