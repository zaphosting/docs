---
id: hytale-gamemode
title: "Hytale: Game Mode Configuratie"
description: "Ontdek hoe je jouw Hytale-server beveiligt door spelers toegang te geven via whitelist-functies en bescherm je gameplay → Leer nu meer"
sidebar_label: Gamemode
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hytale-servers laten je gameplay-instellingen aanpassen, zoals de gamemode die de spelerservaring bepaalt. Het veranderen van de gamemode maakt het mogelijk om je server af te stemmen op een specifieke speelstijl of community voorkeur.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel zich nog in een actieve ontwikkelingsfase bevindt, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Gamemode veranderen

### Live console
De gamemode kan worden aangepast terwijl de server draait via de live console of in-game commands, mits je de benodigde permissies hebt. Met deze methode kunnen admins de gamemode wisselen zonder configuratiebestanden te hoeven aanpassen.

Met het console-commando wordt de actieve gamemode direct bijgewerkt voor de huidige serversessie. Afhankelijk van de serverinstellingen blijft de wijziging actief tot de volgende herstart, of wordt deze teruggezet naar de waarde in het configuratiebestand.

```
/gamemode <gamemode> <spelernaam>
```

De waarde van `GameMode` bepaalt welke gamemode wordt toegepast bij het opstarten van de server. Afhankelijk van de gewenste gameplay-ervaring kun je deze waarde aanpassen.

Veelgebruikte gamemode-waarden zijn:

- `Creative` voor onbeperkt bouwen en content creëren
- `Adventure` voor gestructureerde gameplay met vaste progressie en interactieregels

Na het aanpassen van de gamemode-waarde moet de server opnieuw worden gestart om de nieuwe instelling te activeren.



### Configuratiebestand

De gamemode kan ook direct worden ingesteld in het serverconfiguratiebestand.  
Deze methode is aan te raden als je wilt dat de server altijd met een specifieke gamemode start of bij het opzetten van een verse server.

Het configuratiebestand is toegankelijk via je hosting control panel of bestandsbeheer. In dit bestand staat een instelling die de actieve gamemode bepaalt bij het opstarten van de server. Na het wijzigen van deze waarde moet de server opnieuw worden gestart om de wijziging door te voeren.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

De waarde van `GameMode` bepaalt welke gamemode wordt toegepast bij het opstarten van de server. Afhankelijk van de gewenste gameplay-ervaring kun je deze waarde aanpassen.

Veelgebruikte gamemode-waarden zijn:

- `Creative` voor onbeperkt bouwen en content creëren
- `Adventure` voor gestructureerde gameplay met vaste progressie en interactieregels

Na het aanpassen van de gamemode-waarde moet de server opnieuw worden gestart om de nieuwe instelling te activeren.



## Conclusie

Door de gamemode te configureren via het serverconfiguratiebestand of de live console, heb je volledige controle over de gameplay-ervaring op jouw Hytale-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂