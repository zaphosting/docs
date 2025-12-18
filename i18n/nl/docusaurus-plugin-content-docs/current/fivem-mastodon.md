---
id: fivem-mastodon
title: "FiveM: Een activity feed instellen voor je server"
description: "Ontdek hoe je een Mastodon activity feed integreert in je server voor real-time updates en meer community engagement → Leer het nu"
sidebar_label: Activity Feed Configureren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Voorbereiding

Om een activity feed op onze server in te stellen, moeten we eerst een account aanmaken op Mastodon.

## Setup

Open nu je Mastodon-profiel en kopieer je gebruikersnaam, in ons geval is dat `zaphosting@mstdn.instance`

Open vervolgens de "Configs" van je FiveM-server en bewerk de server.cfg.

Voeg nu de volgende regel helemaal onderaan toe:

```
sets activitypubFeed username
```

Vervang "username" door jouw Mastodon-gebruikersnaam.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Sla het bestand op en herstart je server. Na ongeveer 20 minuten is het tabblad "Feed" beschikbaar zodra je server online is.


<InlineVoucher />