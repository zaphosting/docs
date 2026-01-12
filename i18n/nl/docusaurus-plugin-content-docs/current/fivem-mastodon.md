---
id: fivem-mastodon
title: "FiveM: Een activiteit feed instellen met Mastodon"
description: "Ontdek hoe je een Mastodon activiteit feed integreert in je server voor realtime updates en betere community betrokkenheid → Leer het nu"
sidebar_label: Activiteit Feed Configureren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Een activiteit feed houdt spelers direct binnen je FiveM server op de hoogte. Door een Mastodon-account te koppelen, kunnen serverupdates, aankondigingen en korte berichten realtime worden weergegeven, zonder dat spelers externe platforms hoeven te checken.

Deze integratie creëert een duidelijke communicatielijn tussen de server en de community en zorgt ervoor dat belangrijke info altijd centraal en zichtbaar is.

## Voorbereiding

Voor je de activiteit feed instelt, heb je een Mastodon-account nodig. Dit account wordt gebruikt om updates te publiceren die later op de server verschijnen.

Heb je nog geen account? Registreer je dan op een [Mastodon](https://joinmastodon.org/) instance naar keuze. Zorg er na registratie voor dat je profiel toegankelijk is en klaar om updates te plaatsen, want deze posts worden in de activiteit feed getoond.



## Setup

Open je Mastodon-profiel en kopieer je volledige gebruikersnaam.  
De gebruikersnaam heeft meestal dit formaat:

```
gebruikersnaam@instance.domein
```

In dit voorbeeld is de gebruikersnaam `zaphosting@mstdn.instance`. Open daarna de **Configs** sectie van je FiveM server en bewerk het `server.cfg` bestand. Scroll helemaal naar beneden en voeg de volgende regel toe:

```
sets activitypubFeed gebruikersnaam
```

Vervang `gebruikersnaam` door jouw Mastodon gebruikersnaam.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Sla het bestand op en herstart de server. Na de herstart kan het tot 20 minuten duren voordat de activiteit feed beschikbaar is. Zodra actief, verschijnt er een nieuw **Feed** tabblad bij het openen van de server, waar je de posts van het gekoppelde Mastodon-account ziet.



## Conclusie

Met de activiteit feed ingesteld, worden serverupdates en aankondigingen direct en overzichtelijk aan spelers getoond. Deze setup verhoogt de transparantie, versterkt de community interactie en biedt een efficiënte manier om nieuws en info te delen zonder afhankelijk te zijn van externe links of platforms.



Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂