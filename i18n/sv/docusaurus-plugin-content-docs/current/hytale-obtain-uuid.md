---
id: hytale-obtain-uuid
title: "Hytale: Skaffa UUID"
description: "Ta reda på hur du hittar eller skaffar en spelares UUID för serverkonfiguration och behörigheter → Lär dig mer nu"
sidebar_label: Skaffa UUID
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Varje spelare på en Hytale-server identifieras internt med en UUID, även kallad Universally Unique Identifier. Denna identifierare är permanent och ändras inte, även om spelaren senare byter användarnamn.

UUIDs krävs för olika administrativa uppgifter som att hantera behörigheter, tilldela grupper eller referera till spelare i serverkommandon och konfigurationsfiler.

:::info Early Access Notice

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, moddsupport och installationsflöden fortsätta att förändras över tid.

:::

<InlineVoucher />


## Skaffa UUID

En spelares UUID kan hämtas direkt i spelet med serverns inbyggda chattkommando. Den här metoden är extra smidig när spelaren redan är online och UUID:n behövs direkt.

När du är inloggad med tillräckliga rättigheter, öppna spelets chatt och kör UUID-uppslagskommandot för den önskade spelaren:

```
/whoami <playername>
```

Efter att kommandot körts svarar servern direkt i chatten med UUID:n som är kopplad till den angivna spelaren. Den returnerade UUID:n identifierar unikt den spelaren och kan kopieras för användning i behörighetshantering, grupp-tilldelningar, whitelist-uppgifter eller andra serverrelaterade operationer.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Slutsats

Att skaffa en spelares UUID är ett viktigt steg i avancerad serverhantering på en Hytale-server. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂


<InlineVoucher />