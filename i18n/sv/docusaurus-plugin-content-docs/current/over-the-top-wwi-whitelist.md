---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: Konfigurera Whitelist"
description: "Lär dig hur du aktiverar och hanterar en whitelist på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist låter dig begränsa åtkomsten till din **Over the Top WWI**-server så att bara godkända spelare kan ansluta. Det är extra smidigt för privata servrar, communities eller testmiljöer där åtkomsten behöver kontrolleras.

När du aktiverar whitelist får bara spelare som finns med i whitelist-filen ansluta till servern.

<InlineVoucher />

## Konfiguration

Whitelist konfigureras i serverns konfigurationsfil. Du hittar och kan redigera den i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti den här filen hittar du följande parameter:

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` aktiverar eller avaktiverar whitelist-systemet

- `False` → Avaktiverad
- `True` → Aktiverad

- `WhiteListPathString` anger filen som används för att lagra tillåtna spelar-ID:n

När whitelist är aktiverad kan bara spelare som finns i den angivna filen ansluta till servern.

## Hantera whitelist

Whitelist-filen ligger vanligtvis i din serverkatalog och innehåller en lista med tillåtna spelar-ID:n.

Varje spelare ska läggas till på en ny rad i filen:

```
SteamID1
SteamID2
SteamID3
```

Se till att använda rätt spelaridentifierare, annars nekas åtkomst. Efter att du uppdaterat whitelist-filen eller ändrat i `ServerConfiguration.ini`, spara ändringarna och starta om servern. Whitelisten träder då i kraft.

## Avslutning

Grattis! Du har nu konfigurerat whitelist på din **Over the Top WWI-server**. Det ger dig kontroll över vem som kan ansluta och hjälper dig hålla en privat eller modererad servermiljö.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />