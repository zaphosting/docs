---
id: palworld-firststeps-dashboard
title: "Palworld: Översikt Dashboard"
description: "Upptäck hur du effektivt hanterar och optimerar din Palworld-server för bästa prestanda och användarupplevelse → Lär dig mer nu"
sidebar_label: Dashboard
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Palworld-server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det kännas lite klurigt. Men lugn, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom den här guiden kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga inställningar och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så vis kan du säkerställa att din **Palworld-server** är optimalt anpassad efter dina behov och att du får ut maximalt av de tillgängliga möjligheterna.

:::tip
Vi har nu en separat **Palworld (Xbox)**-version tillgänglig på våra Gameservers, som låter dig spela på Xbox/Microsoft Store-versionerna av spelet. Kolla in vår [Game Change](gameserver-gameswitch.md) för att lära dig hur du enkelt byter spel. Glöm inte att alltid säkerhetskopiera dina sparfiler.
:::

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5nkkN7JxgoigmSd/preview" title="Sätt upp Palworld-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan.



### Dashboard

**Dashboarden** för din server är hjärtat i administrationen. Här presenteras all grundläggande och viktig information om din tjänst på ett tydligt sätt. Det inkluderar till exempel information om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/qo7zwFkwwt3ot3b/preview)

I dashboarden kan du också starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du öppna live-konsolen för att få realtidsinformation om serverns status och agera direkt vid behov.






### DDoS Manager



Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera när något händer.

Beroende på serverns plats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Det inkluderar detaljerad trafikinsikt som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen "DDoS Manager Overview". Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)







### Loggfiler

Har du ett tekniskt problem och är osäker på orsaken? Ett första steg kan vara att kolla på **Loggfilerna**. Dessa filer innehåller mycket information om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och förstå orsaken till ett problem bättre. Ofta kan svårigheter upptäckas och lösas genom att ta en riktad titt i loggfilerna.

:::info
Hittar du ingen hjälp i informationen eller förstår du den inte? Ingen fara! Vi finns dagligen tillgängliga i supporten. Skapa bara ett **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem för oss. Vi kollar på det så snabbt vi kan och hjälper dig att lösa det! :)
:::



### Händelselogg

**Händelseloggen** ger dig en komplett översikt över alla aktiviteter kopplade till serveradministrationen. Här kan du när som helst se när en server startade, stoppade eller kraschade, samt när uppdateringar, backups eller nya installationer gjordes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Live Console

**Live Console** ger dig en realtidsvy över alla aktuella händelser på din server. Här ser du information om spelarnas aktiviteter samt eventuella fel- och systemmeddelanden. Denna översikt låter dig få en helhetsbild av vad som händer på din server och upptäcka eventuella problem tidigt.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Utöver att övervaka händelser kan du även skicka kommandon direkt till servern i **Live Console**. Det kan vara användbart för att justera inställningar, utföra specifika åtgärder eller snabbt reagera på problem som uppstår.



### Driftstörningar

Din server var tillfälligt offline och du kan inte förklara varför? En titt i händelseloggen och loggfilerna gav heller ingen ledtråd? Det kan vara så att problemet inte ligger direkt hos din server, utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell driftstörning, meddelas våra tekniker automatiskt som tar hand om problemet så snabbt som möjligt.

I detta avsnitt hittar du en översikt över driftstörningshistoriken för värdsystemet där din spelserver körs. Mer info och senaste status för våra tjänster hittar du på vår nya [statussida](https://status.zap-hosting.com/).












## Inställningar

I avsnittet **Inställningar** hittar du alla nödvändiga sidor för att konfigurera din server. De tillgängliga alternativen för att ställa in din server listas i detalj nedan.



### Inställningar

Under inställningar hittar du en översikt över de vanligaste inställningsalternativen för din server. Här finns även korta förklaringar. Användningen av inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

![](https://screensaver01.zap-hosting.com/index.php/s/Y3e6G2io6KaPBZe/preview)

Här kan du till exempel göra följande justeringar: 

- Grundinställningar: Sagegame-namn, Servernamn, Serverbeskrivning, Admin-lösenord

Om du känner dig mer säker och vill göra mer precisa ändringar rekommenderar vi att du använder Config Editor istället. Mer info om detta hittar du i kategorin **Configs**.



### Configs

Config-filredigeraren låter dig redigera konfigurationsfilerna direkt på webbplatsen på det klassiska sättet, utan förenklad vy. Detta ger dig möjlighet att anpassa serverns inställningar efter dina personliga preferenser.

Genom att använda editorn får du direkt tillgång till alla tillgängliga alternativ och kan skräddarsy dem exakt. Detta är särskilt användbart för avancerade användare som vill ha full kontroll över sina serverinställningar och vet exakt vilka ändringar de vill göra.

:::info
Har du märkt att vissa av dina ändringar delvis skrivs över? Var medveten om att vissa värden hämtas från inställningssidan. Vill du göra dessa ändringar direkt i config-filen måste du först inaktivera motsvarande alternativ på inställningssidan.
:::



### Spel

Under **Games** kan du alltid byta spelvariant på ditt befintliga spel eller installera ett annat spel helt och hållet. Spel med samma slot-pris kan väljas direkt under **Available Games**. För alla andra spel krävs först en justering av slot-priset. Mer info om detta finns i guiden [Game Change](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)



### Versioner

Under **Versions** kan du se och hantera den aktuella versionen av din spelserver. Här kan du när som helst uppdatera till senaste versionen eller aktivera automatiska uppdateringar för att alltid ha en uppdaterad server.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Dessutom kan du aktivera e-postnotiser för automatiska uppdateringar så att du hålls informerad och alltid är uppdaterad.



### Schemalagda uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid bestämda tider för att automatisera olika processer på din server. Du kan ställa in om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa backups eller köra egna kommandon. 

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Restart-planerare

Vill du schemalägga serveromstarter vid specifika tider? Restart Planner låter dig ställa in automatiska omstarter av din spelserver. Med denna funktion kan du planera omstarter vid specifika tidpunkter eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar
Med ZAP DNS-inställningar kan du skapa lättare adresser för din tjänst. Du kan antingen använda en subdomän från någon av våra domäner eller skapa en DNS-post på dina egna domäner och därmed få en adress som är bättre kopplad till dig som person.
![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underkategorier som hjälper dig att hantera din server. Här ingår **FTP Browser**, **Databaser** och **Backups**. Nedan får du en detaljerad introduktion till dessa områden.



### FTP-Browser

Med **FTP Browser** får du all nödvändig info för att koppla upp dig mot FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att du använder ett externt FTP-program som **Filezilla** eller **WinSCP** för bästa användarupplevelse. Om du är osäker på hur FTP fungerar kan du kika på guiden [Access via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla:** FileZilla är den enklaste och mest kända FTP-klienten. Installera, starta och fyll i dina inloggningsuppgifter i den övre raden som du hittar lite längre upp på sidan. Med ett snabbt klick på "Connect" loggas du in direkt på servern och kan hantera filerna.

**WinSCP:** WinSCP är egentligen avsett för SCP och SFTP (de krypterade varianterna av FTP) men kan hantera FTP lika bra. Programmet är mer omfattande än FileZilla och passar avancerade användare.



### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa behövs till exempel när data ska sparas i en databas. Under **Databases** kan du skapa en databas och se inloggningsuppgifterna. Du kan också aktivera backup-funktionen och importera befintliga databas-backups.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backups

Under **Backups** kan du skapa både manuella och automatiska backups för din server och dess tillhörande databas. Det gör det enklare att återställa dina data vid problem eller dataförlust.

I inställningarna kan du ange om backups ska skapas automatiskt och om det ska ske dagligen eller veckovis. Dessutom kan du välja om de äldsta backups ska raderas vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi erbjuder som standard 10 GB lagringsutrymme på lagringsservern för backups till våra spelserverprodukter. Behöver du mer utrymme kan det uppgraderas mot en avgift. På så sätt säkerställer du att du alltid har tillräckligt med plats för dina backups och kan komma åt äldre backups vid behov.

## Fler länkar
I avsnittet **Fler länkar** hittar du ytterligare länkar som är relevanta för din produkt. 

### Vanliga frågor
Avsnittet **Vanliga frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad info om olika ämnen för att snabbt och smidigt få hjälp.

### ZAP-Hosting Dokumentation
Vi erbjuder omfattande dokumentation för våra produkter som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du olika guider och hjälp inom flera områden som hjälper dig att använda och administrera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter
**Nyheter** ger dig en komplett översikt över alla meddelanden och nyheter kopplade till din tjänst. Här hittar du viktig info om olika aspekter som:

- Ändringar i tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om eventuella underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant info som kan påverka användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />