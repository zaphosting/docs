---
id: dayz-becomeadmin
title: "DayZ: Bli Admin"
description: "Lär dig hur du får full kontroll över din server genom att tilldela adminrättigheter och hantera spelinställningar effektivt → Läs mer nu"
sidebar_label: Bli Admin
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela adminrättigheter ger dig möjlighet att enkelt och heltäckande styra din server. Som admin kan du använda alla tillgängliga funktioner och inställningar som spelet erbjuder direkt i spelet. Här går vi igenom alla steg du behöver för att ge adminrättigheter till din server.  
<InlineVoucher />

## Konfiguration

Adminrättigheterna konfigureras via serverns konfigurationsfil. Du hittar dina serverfiler i spelserverhanteringen under **Configs**. Där får du en översikt över tillgängliga konfigurationsfiler. Öppna **server.DZ.cfg** genom att klicka på den blå knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

I konfigurationsfilen ska du hitta raden **passwordAdmin**. Här anger du önskat lösenord för adminåtkomst. Skriv in ditt valda lösenord och klicka på **Spara**-knappen längst ner.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

För att ändringen ska träda i kraft måste servern startas om. När servern är uppe igen, anslut och öppna chatten i spelet. Kör följande kommando för att logga in som admin:

```
#login password
```



## Vanliga kommandon

Här är en lista på några användbara kommandon du kan köra med dina adminrättigheter:

| KOMMANDO                                   | BESKRIVNING                                                |
| :----------------------------------------- | :---------------------------------------------------------- |
| #login adminpassword                       | Logga in som serverns admin.                               |
| #logout                                    | Logga ut som admin.                                        |
| #mission filename Difficulty               | Välj mission med känt namn och sätt svårighetsgrad – svårighetsparametern är valfri och om den inte anges behålls nuvarande svårighetsgrad. |
| #missions                                  | Välj en mission.                                           |
| ##restart                                  | Starta om en mission.                                      |
| #reassign                                  | Börja om från början och tilldela roller på nytt.          |
| #shutdown                                  | Stänger ner servern.                                       |
| #restartserver                             | Startar om servern.                                        |
| #shutdownserveraftermission                | Stänger ner servern när missionen är slut.                 |
| #restartserveraftermission                 | Startar om servern när missionen är slut.                  |
| #init                                      | Laddar om serverns konfigurationsfil som laddats via -config. |
| #exec ban Name#exec ban ID#exec ban #Player | Ger dig möjlighet att banna en spelare.                   |
| #kick Name#kick ID#kick #Player            | Ger dig möjlighet att kicka en spelare från servern.       |
| #monitor (intervall i sekunder)             | Visar serverns prestandainformation. Om intervallet är 0 stoppas övervakningen. |
| #monitords (intervall i sekunder)           | Visar prestandainformation i serverkonsolen. Om intervallet är 0 stoppas övervakningen. |
| #debug off                                 | Stänger av debug.                                          |
| #debug (intervall i sekunder)               | Standardintervallet är 10 sekunder om inget annat anges.   |
| #debug (kommando) (param)                   | Finns några kommandon: JIPQueue userQueue checkFile totalSent userSent userInfo. Du kan stänga av varje kommando genom att lägga till parametern off efter kommandot, t.ex. #totalSent off. Output skiljer sig mellan kommandona – vissa loggas, andra visas på skärmen osv. Observera att du behöver en debugger som kan fånga OutputDebugString på klientmaskinen. |
| #debug (kommando)                           | Logga ut som admin.                                        |
| #logout                                    | Två kommandon finns: console – skickar vad som finns i serverkonsolen till avsändaren, von – skriver ut i loggfilen definierad i server.cfg, t.ex. “server_console.log”. Du får bekräftelse på dessa kommandon i chattkanalerna. |


## Avslutning

Grattis, du har nu konfigurerat adminrättigheterna! Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />