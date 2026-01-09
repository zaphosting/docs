---
id: fivem-server-customisation
title: "FiveM: Pas serverdetails aan"
description: "Ontdek hoe je je servernaam kunt aanpassen met kleuren en emoji’s om op te vallen in de serverlijst → Leer het nu"
sidebar_label: Serverdetails aanpassen
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Wil je je server aanpassen zodat er custom info wordt getoond in de serverlijst? Dat kan super makkelijk! In deze gids leer je hoe je verschillende aanpassingen kunt doen om jouw server te laten opvallen in de serverlijst!



<InlineVoucher />



## Custom servernaam

### Kleurencodes

Er zijn verschillende kleuren die je aan je servernaam kunt toevoegen. Dit doe je door een prefix te gebruiken om de kleur te veranderen. De lijst met beschikbare kleuren vind je in de tabel hieronder.

:::info
Om kleuren in je servernaam te gebruiken, moet je een geldige [Cfx.re abonnement](https://portal.cfx.re/subscriptions) hebben waarin deze functie zit. Heb je dat wel en werkt het toch niet? Check dan of je een [Eigen License Key](fivem-licensekey.md) hebt ingesteld.
:::

Je kunt nu de naam van je server aanpassen door in txAdmin de CFG Editor te openen, te zoeken naar `sv_hostname` en deze naar wens aan te passen. Hier een voorbeeld van het gebruik van kleuren en het resultaat:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Code | Kleur      | Hex Code |
| ---- | ---------- | -------- |
| ^0   | Wit        | #F0F0F0  |
| ^1   | Rood       | #F44336  |
| ^2   | Groen      | #4CAF50  |
| ^3   | Geel       | #FFEB3B  |
| ^4   | Blauw      | #42A5F5  |
| ^5   | Lichtblauw | #03A9F4  |
| ^6   | Paars      | #9C27B0  |
| ^7   | Wit        | #F0F0F0  |
| ^8   | Oranje     | #FF5722  |
| ^9   | Grijs      | #9E9E9E  |

### Emoji’s

FiveM laat je ook emoji’s direct in je servernaam zetten. Voeg simpelweg de emoji’s toe in de `sv_hostname` parameter in je serverconfig en het werkt meteen. Hiervoor heb je geen Cfx.re abonnement nodig.



## Projectdetails instellen

### Serverbeschrijving

Een serverbeschrijving is handig om kort en krachtig te vertellen waar je server over gaat. Je kunt makkelijk een korte projectbeschrijving instellen voor je FiveM server, die naast je servernaam in de serverlijst wordt getoond. Hier een voorbeeld van het instellen van een projectbeschrijving en het resultaat:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Servertags

Servertags helpen om duidelijk te maken waar je server voor staat en maken het makkelijker voor spelers om jouw server te vinden als ze filteren op hun voorkeuren. Zodra je tags instelt, zijn deze zichtbaar op de serverlijstpagina van je server en worden ze ook gebruikt om je server te filteren. Hier een voorbeeld van het instellen van tags en het resultaat:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Overige details

Je kunt ook nog wat andere serverdetails aanpassen naar wens.

#### Gametype

Met de gametype parameter verander je wat er op de serverlijstpagina van je server wordt getoond. Dit verandert **niet** de gamemode op de server zelf. Je kunt de gametype aanpassen via de webinterface van je game server, of door een tag in te stellen:

```
sets gametype "Freeroam"
```

#### Taal

Tot slot kun je de taal van je server aanpassen die op de serverlijstpagina wordt getoond. We hebben een [Taal / locatie (vlag)](fivem-locale.md) voor het instellen van de localisatie. Dit kan via de webinterface van je game server, of door een tag in te stellen:

```
sets locale "en-GB"
```

Een lijst met alle locale tags vind je via [deze bron](https://github.com/TiagoDanin/Locale-Codes#locale-list) of iets soortgelijks.



## Conclusie

Als je alle stappen hebt gevolgd, heb je je FiveM server succesvol aangepast. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />