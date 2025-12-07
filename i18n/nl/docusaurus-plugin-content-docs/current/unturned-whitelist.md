---
id: unturned-whitelist
title: "Unturned: Whitelist activeren en beheren op je server"
description: "Ontdek hoe je je Unturned-server beveiligt door de whitelist te activeren en te beheren voor gecontroleerde spelers toegang → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Whitelist activeren

De whitelist in Unturned zorgt ervoor dat alleen geselecteerde spelers die op de lijst staan verbinding kunnen maken met je server. Het activeren van de whitelist doe je in het spel via een commando. Hiervoor heb je **eigenaarstoegang** nodig. Weet je niet wat dat is of hoe je die toekent? Check dan deze gids: [Admin worden](unturned-becomeadmin.md)

Als je de gids hebt gevolgd en succesvol admin bent geworden, kun je nu de whitelist op je server activeren. Open hiervoor de chat/console in het spel op je server en voer het volgende commando uit:

```
/Whitelisted
```

De whitelist is nu actief en laat alleen spelers toe die op de lijst staan. Spelers toevoegen of verwijderen kan met de volgende commando’s.

## Whitelist beheren

**Speler toevoegen aan whitelist:**

```
Permit [SteamID]/[Tag]
```

**Speler verwijderen van whitelist:**

```
Unpermit [SteamID]
```

**Alle toegestane spelers tonen:**

```
Permits
```

<InlineVoucher />