---
title: "Over the Top WWI: Konfigurera Servermeddelanden"
description: "Lär dig hur du ställer in automatiska servermeddelanden på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Servermeddelanden
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Automatiska servermeddelanden är ett smidigt sätt att kommunicera viktig info till spelare under spelets gång. Dessa meddelanden kan användas för att dela regler, pusha din Discord-server eller ge användbara tips.

På en **Over the Top WWI**-server kan meddelanden visas med jämna mellanrum, så att alla spelare får viktig info utan att du behöver göra något manuellt.

<InlineVoucher />

## Konfiguration

Servermeddelanden konfigureras i serverns konfigurationsfil. Du hittar och kan redigera den i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti den hittar du följande parametrar:

```
ShowServerTimedMessages = 1
AddServerMessage = Join the official Discord! discord.gg/example
AddServerMessage = Please report any bugs on our Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` aktiverar eller avaktiverar automatiska meddelanden. Sätt till `1` för att slå på meddelanden eller `0` för att stänga av dem.
- `AddServerMessage` definierar vilka meddelanden som ska visas. Du kan lägga till flera rader för att rotera olika meddelanden under spelets gång.
- `ServerMessagesTimer` bestämmer intervallet mellan meddelanden i sekunder. Till exempel visar `120` ett meddelande varannan minut.

Du kan fritt anpassa och lägga till fler meddelanden genom att lägga till extra rader:

```
AddServerMessage = Välkommen till servern!
AddServerMessage = Följ reglerna och respektera andra spelare.
AddServerMessage = Gå med i vår Discord för uppdateringar.
```

När du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. Meddelandena dyker automatiskt upp i spelet med det inställda intervallet.

## Avslutning

Grattis! Du har nu konfigurerat automatiska meddelanden på din **Over the Top WWI-server**. Det hjälper dig att hålla spelarna uppdaterade och förbättrar kommunikationen på din server.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />