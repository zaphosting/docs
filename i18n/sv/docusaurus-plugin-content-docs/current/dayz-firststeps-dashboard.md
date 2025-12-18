---
id: dayz-firststeps-dashboard
title: "DayZ: Översikt Dashboard"
description: "Upptäck hur du effektivt hanterar och optimerar din DayZ-server med en tydlig, steg-för-steg administrationsguide → Lär dig mer nu"
sidebar_label: Dashboard
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **DayZ-server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det kännas klurigt. Men oroa dig inte, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom denna guide kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga inställningar och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så vis kan du säkerställa att din **DayZ-server** är optimalt anpassad efter dina behov och att du får ut maximalt av de tillgängliga möjligheterna.

<YouTube videoId="RZyNHezb2js" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/A9XCJoX8jnRSrQ9/preview" title="Sätt upp DayZ-server på bara EN MINUT!" description="Känner du att du förstår bättre när du ser saker i praktiken? Vi fixar det! Dyka ner i vår video som förklarar allt. Oavsett om du har bråttom eller bara föredrar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan.

### Dashboard

**Dashboarden** för din server är hjärtat i administrationen. Här presenteras all grundläggande och viktig information om din tjänst på ett tydligt sätt. Det inkluderar till exempel information om plats, status, IP:Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/TnzM6NSMzjJAQmr/preview)

I dashboarden kan du också starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du öppna live-konsolen för att få realtidsinformation om serverns status och agera direkt vid behov.

### Statistik

Under **Statistik** får du en omfattande översikt över belastningsvärdena för din server. Där hittar du information om olika aspekter som belastningen på tillgängliga slots, CPU och minne. Du kan visa denna data för olika tidsperioder, till exempel för de senaste **60 minuterna, 24 timmar, 3 dagar, 7 dagar** eller **30 dagar**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Med denna information får du en bra insikt i hur din server används. Dessutom är statistiken ofta hjälpsam för att identifiera eventuella prestandaproblem och begränsa deras orsaker. Till exempel kan du spåra när belastningen ökade och om det är kopplat till vissa händelser eller ändringar. Detta är särskilt viktigt vid plötsliga problem, eftersom det gör att du kan ta riktade steg för felsökning och systematisk analys av möjliga orsaker.

### DDoS Manager

Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera när en incident inträffar.

Beroende på serverns plats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Detta inkluderar detaljerad trafikinsikt, som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen "DDoS Manager Översikt". Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Loggfiler

Har du ett tekniskt problem och är osäker på orsaken? Ett första steg kan vara att kolla **Loggfilerna**. Dessa filer innehåller mycket information om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och förstå orsaken till ett problem bättre. Ofta kan svårigheter upptäckas och lösas genom att noggrant granska loggfilerna.

:::info
Hittar du ingen hjälp i informationen eller förstår du den inte? Ingen fara! Vi finns tillgängliga i supporten varje dag. Skapa bara ett **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem för oss. Vi kollar på det så snabbt vi kan och hjälper dig att lösa det! :)
:::

### Händelselogg

**Händelseloggen** ger dig en komplett översikt över alla aktiviteter kopplade till serveradministrationen. Här kan du när som helst se när en server startades, stoppades eller kraschade, samt när uppdateringar, backuper eller nya installationer genomfördes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Driftstörningar

Din server var offline en stund och du vet inte varför? En titt i händelseloggen och loggfilerna gav inga svar? Det kan vara så att problemet inte ligger direkt hos din server, utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell driftstörning meddelas våra tekniker automatiskt och de tar hand om problemet så snabbt som möjligt.

Här hittar du en översikt över driftstörningar för värdsystemet där din spelserver körs. Mer info och senaste statusen för våra tjänster hittar du på vår nya [statussida](https://status.zap-hosting.com/).

## Inställningar

I avsnittet **Inställningar** hittar du alla sidor som behövs för att konfigurera din server. De tillgängliga alternativen för serverinställningar listas i detalj nedan.

### Inställningar

Under inställningar hittar du en översikt över de vanligaste inställningsalternativen för din server. Här finns även korta förklaringar. Inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

![](https://screensaver01.zap-hosting.com/index.php/s/9Q4cpnSePrgfPTy/preview)

Här kan du till exempel göra följande justeringar:

- Grundinställningar: **Servernamn**, Spelserver-lösenord, Mods, Servermods, Admin-lösenord, Mission, RCON-lösenord, Aktivera/avaktivera RCON

Om du känner dig mer säker och vill göra mer precisa ändringar rekommenderar vi att använda Config Editor istället. Mer info om detta hittar du under kategorin **Configs**.

### Configs

Config Editor låter dig redigera konfigurationsfilerna direkt på webbplatsen i klassisk vy, utan förenklad vy. Detta ger dig möjlighet att anpassa serverinställningarna efter dina personliga preferenser.

Med editorn får du direkt tillgång till alla tillgängliga alternativ och kan finjustera dem. Perfekt för avancerade användare som vill ha full kontroll över sina serverinställningar och vet exakt vilka ändringar de vill göra.

:::info
Har du märkt att vissa ändringar delvis skrivs över? Tänk på att vissa värden hämtas från inställningssidan. Vill du göra ändringarna direkt i config-filen måste du först avaktivera motsvarande alternativ på inställningssidan.
:::

### Spel

Under **Spel** kan du alltid byta spelvariant på ditt befintliga spel eller installera ett helt annat spel. Spel med samma slot-pris kan väljas direkt under **Tillgängliga spel**. För alla andra spel krävs först en justering av slot-priset. Mer info om detta finns i guiden [Spelbyte](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)

### Versioner

Under **Versioner** kan du se och hantera den aktuella versionen av din spelserver. Här kan du när som helst uppdatera till senaste versionen eller aktivera automatiska uppdateringar för att alltid ha en uppdaterad server.

![](https://screensaver01.zap-hosting.com/index.php/s/w3f4FSLpaPKgbcE/preview)

Du kan även aktivera e-postnotiser för automatiska uppdateringar så att du alltid hålls informerad om nya versioner.

### Schemalagda uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid bestämda tider för att automatisera olika processer på din server. Du kan välja om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa backuper eller köra egna kommandon.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Omstartsschema

Vill du schemalägga serveromstarter vid specifika tider? Omstartsschemat låter dig ställa in automatiska omstarter av din spelserver. Med denna funktion kan du planera omstarter vid bestämda tidpunkter eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar

Med ZAP DNS-inställningar kan du skapa lättare adresser för din tjänst. Du kan använda en subdomän från någon av våra domäner eller skapa en DNS-post på dina egna domäner och få en adress som är bättre kopplad till dig som person.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underkategorier som hjälper dig att hantera din server. Här ingår **FTP Browser**, **Databaser** och **Backuper**. Nedan får du en detaljerad introduktion till dessa områden.

### FTP-Browser

Med **FTP Browser** får du all nödvändig info för att ansluta till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att använda ett externt FTP-program som **FileZilla** eller **WinSCP** för bästa användarupplevelse. Är du osäker på hur FTP fungerar kan guiden [Access via FTP](gameserver-ftpaccess.md) vara till hjälp.

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla:** FileZilla är den enklaste och mest kända FTP-klienten. Installera, starta och fyll i dina inloggningsuppgifter i den övre raden som du hittar lite längre upp på denna sida. Klicka på "Anslut" så loggas du in direkt på servern och kan hantera filerna.

**WinSCP:** WinSCP är egentligen avsett för SCP och SFTP (de krypterade varianterna av FTP) men kan hantera FTP på samma sätt. Programmet är mer avancerat än FileZilla och passar för erfarna användare.

### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa behövs till exempel när data ska sparas i en databas. Under **Databaser** kan du skapa en databas och se inloggningsuppgifter. Du kan också aktivera backup-funktionen och importera befintliga databasbackuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backuper

Under **Backuper** kan du skapa både manuella och automatiska backuper för din server och dess tillhörande databas. Det gör det enklare att återställa data vid problem eller dataförlust.

I inställningarna kan du ange om backuper ska skapas automatiskt och om det ska ske dagligen eller veckovis. Du kan också välja om de äldsta backuperna ska raderas vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi erbjuder som standard 10 GB lagringsutrymme på backup-servern för våra spelserverprodukter. Behöver du mer utrymme kan detta uppgraderas mot en avgift. På så sätt säkerställer du att du alltid har tillräckligt med plats för dina backuper och kan komma åt äldre backuper vid behov.

## Fler länkar

I avsnittet **Fler länkar** hittar du ytterligare länkar som är relevanta för din produkt.

### Vanliga frågor

Avsnittet **Vanliga frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad info om olika ämnen för att snabbt och smidigt få hjälp.

### ZAP-Hosting Dokumentation

Vi erbjuder omfattande dokumentation för våra produkter som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du olika guider och hjälp inom flera områden som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter

**Nyheter** ger dig en komplett översikt över alla meddelanden och uppdateringar som rör din tjänst. Här hittar du viktig info om olika saker som:

- Ändringar i tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om planerat underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant info som kan påverka användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />