---
id: windrose-firststeps-connect
title: "Windrose: Anslut till servern"
description: "Lär dig hur du ansluter till din Windrose-server med rätt inbjudningskod och etablerar en stabil serveranslutning utan vanliga anslutningsproblem -> Lär dig mer nu"
sidebar_label: Anslut till servern
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Osäker på hur du ansluter till din **Hytale**-server eller vad du behöver för att komma igång? Ingen fara, vi hjälper dig! Vi går igenom allt du behöver, från nödvändiga verktyg och information till själva anslutningsprocessen, samt viktiga saker att tänka på för en smidig och problemfri anslutning. Följ vår guide så är du ansluten på nolltid!

## Obtain server details
Innan du ansluter behöver du hämta relevant serverinformation från din ZAP-Hosting spelserverwebbgränssnitt. För Windrose är den viktigaste detaljen **inbjudningskoden**.

Du hittar inbjudningskoden i din spelserverhantering under serverns konfigurationsfiler i `InviteCode.txt`.

:::info Krav på inbjudningskod
För Windrose är inbjudningskoden nyckelvärdet som används för att ansluta till servern. Om du använder fel kod eller en gammal kod kan anslutningen misslyckas.
:::

Följande information är användbar innan du börjar:

| Information | Syfte |
| --- | --- |
| Innehållet i `InviteCode.txt` | Krävs för att ansluta till Windrose-servern |
| Servernamn | Hjälper dig att identifiera rätt server |
| Valfritt serverlösenord | Kan krävas beroende på din konfiguration |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Establish server connection
När du har din inbjudningskod kan du ansluta till Windrose-servern direkt via spelet.

### Hitta inbjudningskoden i serverhanteringen
Öppna ditt ZAP-Hosting spelserverwebbgränssnitt och navigera till serverns konfigurationsområde. Leta upp filen som heter `InviteCode.txt` och öppna den.

I den här filen hittar du den aktuella inbjudningskoden för din server. Kopiera värdet exakt som det visas.

:::note Platshållarvärden
Om du ser ett värde som `[your_invite_code]` i denna guide, ersätt det med den faktiska koden från din egen `InviteCode.txt`-fil.
:::

### Gå med i servern i Windrose
Starta Windrose och öppna spelets serveranslutnings- eller multiplayer-meny. Leta efter alternativet som låter dig ansluta till en server med en inbjudningskod.

Ange inbjudningskoden från `InviteCode.txt` i det obligatoriska fältet och bekräfta anslutningen. Om din server är skyddad kan du även bli ombedd att ange ett lösenord i detta steg.

| Fält | Vad du ska ange |
| --- | --- |
| Inbjudningskod | `[your_invite_code]` |
| Lösenord | `[your_server_password]` om konfigurerat |

Efter att du skickat in inbjudningskoden bör spelet etablera anslutningen till din Windrose-server.

:::tip Kopiera koden exakt
För att undvika anslutningsproblem, kopiera och klistra in inbjudningskoden direkt från `InviteCode.txt` om möjligt. Även ett litet skrivfel kan hindra en lyckad anslutning.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Potential issues and solutions
Om serveranslutningen inte fungerar direkt kan du kontrollera de vanligaste orsakerna nedan.

### Inbjudningskoden fungerar inte
Om inbjudningskoden avvisas, kontrollera först att du kopierade hela innehållet i `InviteCode.txt` korrekt. Se till att det inte finns extra mellanslag före eller efter koden.

Det kan också vara så att inbjudningskoden har ändrats efter en serveromstart, uppdatering eller konfigurationsändring. I så fall, öppna `InviteCode.txt` igen och använd det aktuella värdet.

### Servern är inte redo än
Om servern fortfarande startar eller inte har slutfört initialiseringen kan spelare inte ansluta även med rätt inbjudningskod.

Kontrollera serverkonsolen och loggarna i din spelserverhantering för att bekräfta att servern har startat framgångsrikt och är helt online.

:::caution Vänta på full uppstart
Försök inte ansluta medan servern fortfarande laddar eller startar om. Detta kan leda till misslyckade anslutningsförsök även om inbjudningskoden är korrekt.
:::

### Konfigurations- eller filproblem
Om servern fortfarande är otillgänglig kan det finnas ett konfigurationsproblem eller korrupta filer som hindrar korrekt uppstart. Granska i så fall nyligen gjorda ändringar på servern och inspektera loggarna efter fel.

Återställ vid behov en fungerande backup eller ångra senaste konfigurationsändringar.

### Saknas lösning eller ej hjälpsam
Om du fortfarande inte kan ansluta efter att ha kontrollerat inbjudningskoden, serverstatus och konfiguration, kontakta ZAP-Hostings supportteam via den officiella [support-sidan](https://zap-hosting.com/en/customer/support/).

När du skapar en förfrågan, inkludera så mycket detaljer som möjligt, till exempel:

- Det exakta problemet du upplever
- Om servern startar utan problem
- Om inbjudningskoden i `InviteCode.txt` är synlig
- Eventuella relevanta felmeddelanden från konsolen eller loggar

## Conclusion
Grattis, du har nu framgångsrikt anslutit till din Windrose-server med inbjudningskoden. För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂