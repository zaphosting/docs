---
id: minecraft-commands
title: "Minecraft: Algemene Servercommando's"
description: "Ontdek hoe je Minecraft-commando's gebruikt om je gameplay te verbeteren en functies effectief te beheren → Leer het nu"
sidebar_label: Algemene commando's
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### Wat zijn commando's?

Commando's kun je in Minecraft gebruiken om extra of speciale functies uit te voeren. Minecraft zelf bevat al meer dan **100 commando's** zonder enige aanpassing, die je kunt gebruiken om allerlei functies te activeren, beheren of uitvoeren.

In dit artikel van onze documentatie gaan we in op de belangrijkste commando's, die heel vaak gebruikt en nodig zijn.
Als een commando hier niet staat, is de officiële [Minecraft-Wiki](https://minecraft-de.gamepedia.com/) super handig, want elk onderdeel (inclusief alle commando's) wordt daar tot in detail uitgelegd.

<InlineVoucher />

### Gebruik

Elk commando begint altijd met een "/". Dus als je een commando wilt gebruiken, moet je eerst de chat in het spel openen en de "/" typen, daarna kun je het commando zelf typen. Door op de TAB-toets te drukken, krijg je een preview van alle beschikbare commando's. Zo kun je commando's snel en makkelijk automatisch laten aanvullen, zoals je dat ook kent van zoekopdrachten op internet.

:::info
Als je commando's via de console uitvoert, is de "/" niet nodig en moet je deze weghalen!

Dit teken wordt alleen gebruikt om in het spel onderscheid te maken tussen een normale chatbericht of een commando.
:::

### Rechten / Permissies

Om commando's te kunnen gebruiken, heb je de benodigde rechten nodig. In Minecraft-Vanilla of Forge is er geen echt permissiesysteem dat door plugins gebruikt kan worden zoals in Spigot. Hier kun je alleen het levelsysteem van de OP-rechten gebruiken. Hier vind je een tutorial over het OP-rechten systeem:  [OP Permissies](minecraft-addop.md)

Als er een permissiesysteem is geïnstalleerd en je wilt rechten toewijzen aan bepaalde Minecraft-commando's, dan kunnen de respectievelijke permissies als hieronder beschreven worden toegekend.

:::info
De syntax van de permissies voor elk commando is altijd hetzelfde en kan dus eenvoudig worden aangepast.

Wil je bijvoorbeeld permissies toewijzen voor het Locate-commando, dan moet je de volgende permissie instellen: ``minecraft.command.locate``
:::



## Commando's

### /tp

Met het **/tp** commando kunnen admins zichzelf naar andere spelers teleporteren of een speler naar een gewenste doelspeler teleporteren.
Het commando kan ook gebruikt worden om mobs te teleporteren of jezelf naar een locatie te teleporteren door bijvoorbeeld coördinaten in te voeren. Meer details vind je hieronder.

**Voorbeelden:**

``/tp PlayerA``

Teleport de uitvoerder van het commando naar een andere speler.

``/tp PlayerA PlayerB``

Teleport *PlayerA* naar *PlayerB*. Het maakt niet uit wie het commando uitvoert, de opgegeven spelers worden geteleporteerd.
Als de uitvoerder van het commando *PlayerB* is, wordt *PlayerA* naar zichzelf geteleporteerd.

``/tp -100 75 985``

De uitvoerder van het commando wordt naar de opgegeven coördinaten geteleporteerd.
Door een speler voor de coördinaten te zetten (``/tp PlayerA -100 75 985``), wordt die speler daarheen geteleporteerd in plaats van jezelf.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Teleport jezelf naar de dichtstbijzijnde *koe* binnen een straal van 10 blokken.
``@s`` kan ook vervangen worden door een speler zoals *PlayerA*, dan wordt die speler geteleporteerd.

### /locate

Met het **/locate** commando kun je de coördinaten vinden van een gebouw dat je zoekt, zoals een dorp van dorpsbewoners.

**Voorbeelden:**

``/locate fortress``

Vindt en toont de positie van de dichtstbijzijnde Nether-fortress als je in de Nether bent.

``/locate village``

Vindt en toont de positie op dezelfde manier als bij Netherforten, maar dan voor een dorp van dorpsbewoners.

### /worldborder

Met dit commando kun je een wereldgrens instellen binnen de huidige wereld. Dit voorkomt dat spelers verder kunnen verkennen dan met dit commando is ingesteld.

**Voorbeelden:**

``/worldborder center 0 0``

Stelt het middelpunt van de wereld in op coördinaten 0;0, waarvandaan de straal wordt berekend en ingesteld.

``/worldborder set 16000``

Stelt de limiet in op 16.000x16.000 blokken. Dit betekent een straal van 8.000 blokken in elke richting.

### /effect

Hiermee kun je spelers (of zelfs entiteiten) normale potion-effecten geven.
Sommige effecten zijn alleen via commando's te krijgen, zoals het geluk-effect, dat nog geen functie heeft gekregen.

:::info
Het commando is door de versies heen veranderd, uitgebreid en aangepast.

De voorbeelden hieronder zijn van de nieuwste versie en kunnen er in oudere versies dus anders uitzien!
:::

**Voorbeelden:**

``/effect give PlayerA minecraft:speed``

Geeft speler *PlayerA* het speed-effect van **Sss 1.

### /gamerule

Met dit commando kun je speciale instellingen in een wereld aanpassen of speciale functies aan- of uitzetten.
Bijvoorbeeld, zoals in het voorbeeld hieronder, kun je instellen dat spelers hun inventaris behouden na het overlijden.

**Voorbeelden:**

``/gamerule keepInventory true``

Deze instelling zorgt ervoor dat spelers hun inventaris (inclusief ervaring) behouden na het overlijden.

``/gamerule mobGriefing false``

Met dit commando bepaal je of monsters zoals Creepers schade aan de wereld kunnen aanrichten.

### /save-all

De server slaat de wereld elke 5 minuten automatisch op en schrijft de data naar de schijf.
Met dit commando wordt de wereld direct opgeslagen en wordt de countdown voor automatisch opslaan gereset naar 5 minuten.

### /tps

Met dit commando kun je de TPS (ticks per seconde) checken voor Spigot en Paper Spigot.
TPS geeft info over de performance van de server. De maximale en beste TPS die de server kan halen is 20.
De TPS toont de laatste 60 seconden, de twee volgende waarden zijn het gemiddelde van 5 en 15 minuten.

### /ban

Met dit commando kun je een speler van de server verbannen, zodat die speler onder geen enkele omstandigheid meer op de server kan komen. Het spelersaccount wordt verbannen op basis van zijn UUID.

:::info
Op servers met uitgeschakelde online modus kunnen spelers hun naam veranderen en zo weer toegang krijgen. In zo’n geval is een IP-ban via plugins de beste oplossing.
:::

**Voorbeelden:**

``/ban PlayerA``

In dit voorbeeld wordt speler *PlayerA* verbannen van de server.

``/ban @a``

Met dit commando worden alle huidige spelers op de server verbannen. Admins met OP-rechten worden niet geraakt en blijven op de server.

### /pardon

Met dit commando kun je een ban ongedaan maken (zoals hierboven beschreven), zodat de speler weer op de server kan komen.

**Voorbeelden:**

``/pardon PlayerA``

Speler *PlayerA* wordt van de banlijst verwijderd en kan weer op de server.

### /kick

Met dit commando wordt de verbinding tussen de server en de opgegeven speler verbroken. Dit dwingt de speler om de server te verlaten, maar hij kan wel weer opnieuw verbinden.

**Voorbeelden:**

``/kick PlayerA``

Hiermee wordt speler *PlayerA* van de server gegooid met het bericht "Kicked by an operator".

``/kick PlayerA Reden``

Hiermee wordt speler *PlayerA* van de server gegooid met het bericht "Reden".

<InlineVoucher />