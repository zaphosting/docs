---
id: dedicated-linux-wine
title: "Dedicated Server: Wine Compatibility Layer Linux Setup"
description: "Ontdek hoe je Wine op Linux instelt om Windows game servers soepel te draaien op Ubuntu en vergelijkbare systemen → Leer het nu"
sidebar_label: Wine Compatibility Layer Setup
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Wine is een open-source compatibiliteitslaag voor Linux waarmee software die oorspronkelijk voor Windows is ontwikkeld, op Linux-systemen kan draaien. Dit is vooral belangrijk voor dedicated game servers die alleen Windows serverbestanden aanbieden en kan een vereiste zijn voor onze andere Linux dedicated game server handleidingen. In deze gids nemen we je mee door het installatieproces van Wine op je Linux server. We gebruiken Ubuntu als voorbeeld, maar de stappen zijn vergelijkbaar voor andere distributies.

## Voorbereiding

Begin met het verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt bij het verbinden.

## Wine installeren

Start de installatie door te zorgen dat de map `/etc/apt/keyrings/` bestaat, dit is nodig voor Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Download vervolgens de Wine GPG-sleutel en sla deze op in deze map, zodat de authenticiteit van het pakket wordt gegarandeerd.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Je moet ook de sources list voor WineHQ opslaan, dit kan met het volgende kant-en-klare commando:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Voer daarna het update-commando uit om je pakketbronnen te verversen.
```
sudo apt update
```

Nu kun je doorgaan met het downloaden van de nieuwste versie van Wine. Dit kan even duren.
```
sudo apt install --install-recommends winehq-staging
```

Tot slot moet je nog een paar extra pakketten installeren zodat Wine goed werkt met dedicated game servers. Gebruik hiervoor het volgende commando:
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusie

Je hebt nu succesvol de Wine compatibiliteitslaag opgezet, waardoor je Windows-programma’s op je Linux server kunt draaien. Met deze belangrijke voorwaarde geïnstalleerd, kun je nu dedicated game servers installeren, zelfs als ze voor Windows zijn gemaakt.

We raden je aan om ook de andere gidsen in deze sectie te bekijken, waarin het installeren van specifieke games wordt behandeld via SteamCMD en eventueel Wine voor Windows-gebaseerde dedicated server bestanden.