---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Konfigurera Bans och Moderering"
description: "Lär dig hur du konfigurerar banlistor och modereringsinställningar på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Bans & Moderering
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Moderationsverktygen i **Over the Top WWI** låter dig styra spelarbeteende och hålla en rättvis och schysst miljö på din server. Genom att konfigurera banlistor och modereringsinställningar kan du begränsa åtkomst, hantera straff och ge tydliga instruktioner till spelarna.

Dessa inställningar är extra användbara för community-servrar där aktiv moderering krävs.

<InlineVoucher />

## Konfiguration

Ban- och modereringsinställningar konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera den här filen i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti den här filen hittar du följande parametrar:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` definierar filen som innehåller permanent bannade spelare  
- `TempBanPathstring` definierar filen som innehåller temporärt bannade spelare  

- `CustomUnBanString` låter dig skriva ett eget meddelande som berättar för spelare hur de kan begära avban. Exempel: Discord-länk eller hemsida

### Användning av ban-filer

Ban-filerna ligger i din serverkatalog och innehåller spelar-ID:n.

Varje bannad spelare ska stå på en ny rad i filen:

```
SteamID1
SteamID2
SteamID3
```

Dessa filer läses automatiskt av servern för att blockera åtkomst för listade spelare. Genom att justera dessa inställningar kan du bestämma hur bans hanteras och hur spelare kan överklaga dem.

Efter att du ändrat `ServerConfiguration.ini`, spara filen och starta om din server. De uppdaterade modereringsinställningarna tillämpas automatiskt.

## Avslutning

Grattis! Du har nu konfigurerat ban- och modereringsinställningar på din **Over the Top WWI-server**. Det ger dig möjlighet att effektivt hantera spelarbeteende och hålla en kontrollerad servermiljö.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />