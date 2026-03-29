---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI: Chatinstellingen Configureren"
description: "Leer hoe je chat- en communicatie-instellingen configureert op je Over the Top WWI server → Leer nu meer"
sidebar_label: Chatinstellingen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

De chatinstellingen in **Over the Top WWI** bepalen hoe spelers via tekst met elkaar communiceren tijdens het spelen. Door deze instellingen aan te passen, kun je globale communicatie aan- of uitzetten, het gebruik van chat beperken, of spelers volledig dempen als dat nodig is.

Een goede chatconfiguratie helpt om orde op de server te houden en zorgt voor een betere game-ervaring voor iedereen.

<InlineVoucher />

## Configuratie

Je stelt de chatinstellingen in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. In dit bestand vind je de volgende parameters:

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` zet globale chatcommunicatie aan of uit

- `0` → Uitgeschakeld
- `1` → Ingeschakeld

- `ServerMuteAll` schakelt alle spelerschat uit als het aan staat

- `0` → Uitgeschakeld
- `1` → Ingeschakeld

- `BannedWordsPathString` geeft het bestand aan dat gebruikt wordt om verboden woorden te filteren. Dit bestand bevat een lijst met geblokkeerde termen die niet in de chat mogen voorkomen

Pas deze instellingen aan om te bepalen hoe spelers met elkaar communiceren en om chatmoderatie op je server te handhaven.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe chatinstellingen worden dan automatisch toegepast.

## Afsluiting

Gefeliciteerd! Je hebt de chatinstellingen op je **Over the Top WWI server** succesvol geconfigureerd. Zo beheer je de communicatie tussen spelers en zorg je voor een gecontroleerde en fijne speelomgeving.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />