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

Hytale-servers laten je gameplay-instellingen aanpassen, zoals de game mode die de spelerservaring bepaalt. Door de game mode te veranderen, kun je je server afstemmen op een specifieke speelstijl of community voorkeur.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel nog in actieve ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Game mode veranderen

### Live console
De game mode kan worden aangepast terwijl de server draait via de live console of in-game commands, mits je de juiste permissies hebt. Met deze methode kunnen admins de game mode wisselen zonder configuratiebestanden te hoeven aanpassen.

Met het console-commando wordt de actieve game mode direct bijgewerkt voor de huidige serversessie. Afhankelijk van je serverinstellingen blijft de wijziging actief tot de volgende herstart, of wordt deze teruggezet naar de waarde in het configuratiebestand.

```
/gamemode <gamemode> <playername>
```

De waarde van `GameMode` bepaalt welke game mode wordt toegepast bij het opstarten van de server. Afhankelijk van de gewenste gameplay-ervaring kun je deze waarde aanpassen.

Veelgebruikte game mode waarden zijn:

- `Creative` voor onbeperkt bouwen en content creëren
- `Adventure` voor gestructureerde gameplay met vaste progressie en interactieregels

Na het aanpassen van de game mode waarde moet de server opnieuw worden gestart om de wijziging door te voeren.



### Configuratiebestand

De game mode kan ook direct in het serverconfiguratiebestand worden ingesteld.  
Deze methode is aan te raden als je wilt dat de server altijd met een specifieke game mode start of als je een nieuwe server setup voorbereidt.

Het configuratiebestand is toegankelijk via je hosting control panel of file manager. In dit bestand staat een instelling die de actieve game mode bepaalt bij het opstarten van de server. Na het aanpassen van deze waarde moet de server opnieuw worden gestart om de wijziging door te voeren.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

De waarde van `GameMode` bepaalt welke game mode wordt toegepast bij het opstarten van de server. Afhankelijk van de gewenste gameplay-ervaring kun je deze waarde aanpassen.

Veelgebruikte game mode waarden zijn:

- `Creative` voor onbeperkt bouwen en content creëren
- `Adventure` voor gestructureerde gameplay met vaste progressie en interactieregels

Na het aanpassen van de game mode waarde moet de server opnieuw worden gestart om de wijziging door te voeren.



## Conclusie

Door de game mode te configureren via het serverconfiguratiebestand of de live console, heb je volledige controle over de gameplay-ervaring op jouw Hytale-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂