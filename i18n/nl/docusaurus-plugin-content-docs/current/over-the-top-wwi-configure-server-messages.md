---
title: "Over the Top WWI: Serverberichten Configureren"
description: "Leer hoe je automatische serverberichten instelt op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Serverberichten
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Automatische serverberichten zijn een handige manier om belangrijke info met spelers te delen tijdens het gamen. Je kunt ze gebruiken om regels te delen, je Discord-server te promoten of handige tips te geven.

Op een **Over the Top WWI** server worden berichten op vaste tijden getoond, zodat alle spelers belangrijke info krijgen zonder dat jij er handmatig mee bezig hoeft te zijn.

<InlineVoucher />

## Configuratie

Serverberichten stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. Zoek hierin de volgende parameters:

```
ShowServerTimedMessages = 1
AddServerMessage = Join the official Discord! discord.gg/example
AddServerMessage = Please report any bugs on our Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` zet automatische berichten aan of uit. Zet op `1` om aan te zetten, `0` om uit te zetten.
- `AddServerMessage` bepaalt welke berichten getoond worden. Je kunt meerdere regels toevoegen om verschillende berichten af te wisselen tijdens het spelen.
- `ServerMessagesTimer` bepaalt het interval tussen berichten in seconden. Bijvoorbeeld `120` toont elke 2 minuten een bericht.

Je kunt je berichten helemaal naar wens aanpassen en uitbreiden door extra regels toe te voegen:

```
AddServerMessage = Welkom op de server!
AddServerMessage = Volg de regels en respecteer andere spelers.
AddServerMessage = Join onze Discord voor updates.
```

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De berichten verschijnen dan automatisch in-game op het ingestelde interval.

## Conclusie

Gefeliciteerd! Je hebt nu succesvol automatische berichten ingesteld op je **Over the Top WWI server**. Zo houd je spelers goed geïnformeerd en verbeter je de communicatie op je server.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />