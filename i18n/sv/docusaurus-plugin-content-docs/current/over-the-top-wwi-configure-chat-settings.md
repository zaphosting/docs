---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI: Konfigurera chattinställningar"
description: "Lär dig hur du konfigurerar chatt- och kommunikationsinställningar på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Chattinställningar
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Chattinställningarna i **Over the Top WWI** styr hur spelare kommunicerar via text under spelets gång. Genom att justera dessa inställningar kan du aktivera global kommunikation, begränsa chattanvändning eller helt tysta spelare vid behov.

Rätt chattkonfiguration hjälper till att hålla ordning på servern och förbättrar spelupplevelsen för alla.

<InlineVoucher />

## Konfiguration

Chattinställningarna konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Konfigurationer**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` aktiverar eller inaktiverar global chattkommunikation

- `0` → Inaktiverad
- `1` → Aktiverad

- `ServerMuteAll` tystar all spelarchatt när den är aktiverad

- `0` → Inaktiverad
- `1` → Aktiverad

- `BannedWordsPathString` anger filen som används för att filtrera förbjudna ord. Filen innehåller en lista med blockerade termer som inte tillåts i chatten

Justera dessa inställningar för att styra hur spelare kommunicerar och för att upprätthålla chattmoderering på din server.

Efter att du ändrat `ServerConfiguration.ini`, spara filen och starta om din server. De uppdaterade chattinställningarna tillämpas automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat chattinställningarna på din **Over the Top WWI-server**. Det ger dig kontroll över spelarkommunikationen och hjälper dig att skapa en kontrollerad och rolig spelmiljö.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />