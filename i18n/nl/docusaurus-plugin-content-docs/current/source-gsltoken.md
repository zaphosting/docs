---
id: source-gsltoken
title: Game server login tokens gebruiken
description: "Ontdek hoe GSL-tokens Steam gameservers beveiligen door bans aan accounts te koppelen, voor veiligere en conforme serverhosting → Leer er nu meer over"
sidebar_label: GSL-Token
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ Wat is een GSL-token?

Gameserver Login Tokens (GSLT’s) zijn een beveiligingsmaatregel die Steam heeft ingevoerd. Om gameservers van bepaalde Steam-games (voornamelijk Source-games) te draaien, moet je zo’n token aanmaken.

<InlineVoucher />

## ❓ Wat is het doel van een GSL-token?

Vroeger heeft Valve wat regels aangepast voor het hosten van een gameserver. Niet alle serverhosts hielden zich aan die regels, waardoor IP-adressen van servers werden geblokkeerd.

Maar dat werkte niet echt, want je kon makkelijk een nieuw IP-adres gebruiken. Bovendien was het een groot probleem voor serverproviders, omdat bij een IP-ban vaak ook andere klanten last hadden.

Daarom is dit systeem bedacht: in plaats van het IP-adres wordt nu het token geblokkeerd, en het gekoppelde Steam-account wordt ook geblokkeerd voor verdere serverhosting.

## ➕ Token aanmaken

Om een game server login token te maken, moet je ingelogd zijn op de Steam-website. Je kunt het token hier aanmaken: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

Daar word je gevraagd om de App ID en een memo (een naam die je als notitie wilt gebruiken). De App ID hangt af van de game. Hieronder vind je de belangrijkste App IDs:

|              Game               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |

Het GSL-token kun je instellen in de interface onder de instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

Als dit geregeld is en de server is opnieuw gestart, verschijnt je server ook in de publieke serverlijst.

## ⁉ Veelgestelde vragen

**Wat zijn de voorwaarden voor een GSL-token?**

Het Steam-account mag geen restricties hebben, zoals een community-ban. Daarnaast moet er een geldig telefoonnummer aan het Steam-account gekoppeld zijn.

**Kan ik één GSL-token voor meerdere servers gebruiken?**

Nee, voor elke gameserver heb je een eigen token nodig.

**Kan mijn GSL-token geblokkeerd worden?**

Vooral bij CS:GO-servers zijn er plugins die niet zijn toegestaan. Een officiële lijst is niet gepubliceerd, maar het gaat vooral om plugins die spelersinventarissen (zoals weapon skins), ranks of iets dergelijks aanpassen.

**Wat gebeurt er als mijn GSL-token geblokkeerd wordt?**

Als een token geblokkeerd wordt, worden ook het account en alle gekoppelde tokens geblokkeerd. Dit betekent dat de server niet meer publiek toegankelijk is en het account niet meer gebruikt kan worden voor het hosten van servers. Je kunt het Steam-account nog wel gewoon gebruiken om te gamen. Verder worden er geen extra straffen verwacht.

<InlineVoucher />