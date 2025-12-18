---
id: rimworldtogether-configuration
title: "RimWorld Together: Serverconfiguratie"
description: "Ontdek de RimWorld Together serverinstellingen om je gameplay aan te passen en toegang te beheren voor een gepersonaliseerde multiplayerervaring → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RimWorld Together servers bieden een breed scala aan configuratieparameters die je helemaal naar eigen wens kunt instellen. In deze gids duiken we in alle beschikbare configuratieopties en leggen we ze stuk voor stuk uit.

<InlineVoucher />

## Je Configuratiebestand Bereiken

Eerst moet je toegang krijgen tot je configuratiebestand om parameters te kunnen aanpassen. Op dit moment kan dat alleen via FTP. Ben je niet bekend met FTP? Check dan zeker onze [Toegang via FTP](gameserver-ftpaccess.md) gids.

:::note
De server moet uitstaan voordat je configs kunt aanpassen. Als je een config wijzigt en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Met je FTP-client klaar, navigeer je naar deze map:
```
../rimworld-together/Core
```

In deze map vind je allerlei `.json` configuratiebestanden voor je RimWorld Together server.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Serverconfiguratie Opties

Hieronder vind je uitleg over hoe je een aantal populaire en veelgebruikte configuratieopties voor je RimWorld Together server aanpast. Wil je nog meer weten? Check dan de [officiële RimWorld Together gids](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core) over configuratieopties.

:::tip
We raden af om de Poort- of IP-instellingen in het **ServerConfig.json** bestand te veranderen, want die worden automatisch door de game server ingesteld. Aanpassen kan je server kapot maken!
:::

#### Server Whitelist

De server whitelist aan- of uitzetten is simpel. Open het **Whitelist.json** configuratiebestand en zet de `UseWhitelist` parameter op true.

Pas daarna de `WhitelistedUsers` parameter aan door de in-game gebruikersnamen toe te voegen van mensen die je wilt toelaten. Iedereen die niet op deze lijst staat, kan dan niet meer verbinden.

#### Gameplay Instellingen

Je kunt allerlei moeilijkheidsparameters voor je RimWorld Together server aanpassen via het **DifficultyValues.json** bestand.

Ook de Savegame-instellingen kun je aanpassen in het **WorldConfig.json** bestand. We raden aan dit niet te doen als je al ver in je spel zit, want dat kan je ervaring verpesten.

<InlineVoucher />