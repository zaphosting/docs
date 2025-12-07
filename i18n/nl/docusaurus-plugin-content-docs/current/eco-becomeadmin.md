---
id: eco-becomeadmin
title: "ECO: Word Admin"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en efficiënte gamebeheer → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toekennen van administratorrechten geeft je eenvoudige en uitgebreide admin-mogelijkheden met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten aan je server toekent.  
<InlineVoucher />

## Configuratie
Een admin toevoegen doe je via de **Users.eco** Config, die je terugvindt in de interface onder Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



Om een nieuwe speler als admin toe te voegen, moet het volgende gedeelte in de **Users.eco** Config aangepast worden:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



De speler die admin moet worden, geef je op in het veld **values**. Bij meerdere admins voeg je ze toe, gescheiden door een komma. Om de speler te identificeren gebruik je de SteamID64.

Je vindt deze door je Steam-profiel te openen en ergens op de pagina rechts te klikken. Daar kun je de Steam URL van je profiel kopiëren.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



Vervolgens plak je de URL in één van deze websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



Deze sites geven je algemene accountinformatie én de Steam ID. Die plak je vervolgens in **values**. Het resultaat ziet er zo uit:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```



Na een server restart hebben de opgegeven spelers adminrechten. Wil je later meer admins toevoegen? Dan hoef je niet altijd via de Config te werken, maar kan dat ook in de game met dit commando:

```
/admin [player]
```



Hieronder vind je een overzicht van veelgebruikte admin-commando’s die je als admin kunt uitvoeren.



## Veelgebruikte commando’s

|              Commando’s             |                      Beschrijving                       |
| :---------------------------------: | :-----------------------------------------------------: |
|             /allblocks              |                   Spawn alle blokken                    |
|          /allconstructed            |         Spawn alle door spelers bouwbare blokken        |
|             /allplants              |                Spawn alle plantblokken                  |
|             /allskills              |                   Ontgrendel alle skills                |
|            /allterrain              |               Spawn alle blokken die je kunt graven     |
|          /allworldobjects           |                Spawn alle wereldobjecten                |
|      /kick [player],(reden)         |                      Kickt een speler                   |
|       /ban [player],(reden)         |                      Bant een speler                    |
|     /give [itemnaam],(aantal)       |                 Geef jezelf een item                     |
| /giveskillpoints [player],(aantal)  |           Geef skillpoints aan een andere speler         |
|                /fly                 |                    Zet vliegmodus aan/uit               |
|         /move [x],[y],[z]           | Verplaatst je naar positie x, y, z; waar xyz gehele getallen zijn. |
|       /removeadmin [player]         |               Verwijdert een speler als admin           |

Meer commando’s vind je in de officiële [ECO Wiki](https://eco.gamepedia.com/Chat_Commands).

## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />