---
id: factorio-becomeadmin
title: "Factorio: Word Admin"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en effectief beheer van in-game opties → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toekennen van administratorrechten geeft je eenvoudige en uitgebreide controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten voor je server instelt.  
<InlineVoucher />

## Configuratie

Administratorrechten stellen je in staat om direct in het spel aanpassingen te maken op je server, zonder dat je iets in de Config hoeft te veranderen. Een admin toevoegen doe je via het **server-settings.json** Config-bestand, dat je terugvindt in de interface onder Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

Onderaan het config-bestand vind je het belangrijkste gedeelte. Hier worden de admins gedefinieerd:

```
  "_comment_admins": "Lijst van gebruikersnamen zonder hoofdlettergevoeligheid, die direct admin worden",
  "admins": []
}
```

De namen van de spelers die adminrechten moeten krijgen, moeten hier worden ingevuld. Als je meerdere admins toevoegt, kan het er bijvoorbeeld zo uitzien:

```
  "_comment_admins": "Lijst van gebruikersnamen zonder hoofdlettergevoeligheid, die direct admin worden",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

De spelers met de namen **PlayerName1, PlayerName2, PlayerName3** hebben nu adminrechten gekregen. Admin-commando’s kun je vanaf nu in de game via de console uitvoeren. Hieronder vind je een overzicht van veelgebruikte commando’s.



### Veelgebruikte commando’s

|                Commando                 |                         Beschrijving                          |
| :------------------------------------: | :------------------------------------------------------------: |
|                 /admin                 |               Opent de spelerbeheer GUI.                       |
|           /ban player reden            |                          Ban een speler                        |
|                 /bans                  |               Toont een lijst van gebande spelers.            |
|             /unban player              |                         Unban een speler                       |
|  /banlist add/remove/get/clear player  | Voegt een speler toe of verwijdert een speler van de banlist. Zelfde als /ban of /unban. |
|          /kick player reden            |                         Kick een speler                        |
|              /mute player              |                         Mute een speler                        |
|             /unmute player             |                        Unmute een speler                       |
| /whitelist add/remove/get/clear player |         Voegt een speler toe of verwijdert een speler van de whitelist          |

Meer beschikbare commando’s vind je in de officiële [Factorio Wiki](https://wiki.factorio.com/Console).


## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />