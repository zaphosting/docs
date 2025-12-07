---
id: lastoasis-firststeps-dashboard
title: "Last Oasis: Översikt Dashboard"
description: "Upptäck hur du effektivt hanterar din Last Oasis-server och optimerar dess inställningar för bästa prestanda → Lär dig mer nu"
sidebar_label: Dashboard
services:
  - gameserver-lastoasis
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Last Oasis-server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det kännas som en utmaning. Men oroa dig inte, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom den här guiden kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga alternativ och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så vis kan du säkerställa att din **Last Oasis-server** är optimalt anpassad efter dina behov och att du får ut maximalt av de tillgängliga möjligheterna.

<YouTube videoId="hmIG4vX_HpY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/m2FY73Tn4N2mqee/preview" title="Sätt upp Last Oasis-server på bara 5 MINUTER!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Dyka ner i vår video som förklarar allt. Oavsett om du har bråttom eller bara vill ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas detaljerat nedan.

### Dashboard

**Dashboarden** för din server är hjärtat i administrationen. All grundläggande och viktig information om din tjänst presenteras tydligt här. Det inkluderar till exempel info om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/G64G6rdrND2GPm9/preview)

I dashboarden kan du också starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du öppna livekonsolen för att få realtidsinformation om serverns status och agera direkt vid behov.

### DDoS Manager

Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera när något händer.

Beroende på serverns plats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Det inkluderar detaljerad trafikinsikt som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen "DDoS Manager Översikt". Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Loggfiler

Har du tekniska problem och är osäker på orsaken? Ett första steg kan vara att kolla **loggfilerna**. Dessa filer innehåller mycket info om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och förstå orsaken till ett problem. Ofta kan svårigheter upptäckas och lösas genom att noggrant granska loggfilerna.

:::info
Hittar du ingen hjälp i informationen eller förstår du den inte? Ingen fara! Vi finns tillgängliga i supporten varje dag. Skapa bara en **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem för oss. Vi kollar på det så snabbt vi kan och hjälper dig att lösa det! :)
:::

### Händelselogg

**Händelseloggen** ger dig en komplett översikt över alla aktiviteter kopplade till serveradministrationen. Här kan du när som helst se när servern startades, stoppades eller kraschade, samt när uppdateringar, backuper eller nya installationer gjordes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live Console

**Livekonsolen** ger dig en realtidsvy över alla aktuella händelser på din server. Här ser du info om spelarnas aktiviteter samt eventuella fel- och systemmeddelanden. Denna översikt låter dig få en helhetsbild av vad som händer på servern och upptäcka problem tidigt.

![](https://screensaver01.zap-hosting.com/index.php/s/dktDADkq3bzG3F6/preview)

Utöver att övervaka händelser kan du även skicka kommandon direkt till servern i **Livekonsolen**. Det är smidigt för att justera inställningar, utföra åtgärder eller snabbt reagera på problem.

### Driftstörningar

Var din server offline en stund och du vet inte varför? Kollade du i händelseloggen och loggfilerna men hittade inget? Det kan vara så att problemet inte ligger hos din server utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell störning meddelas våra tekniker automatiskt som tar hand om problemet så fort som möjligt.

Här hittar du en översikt över driftstörningar på värdsystemet där din spelserver körs. Mer info och senaste status hittar du på vår nya [statussida](https://status.zap-hosting.com/).

## Inställningar

I avsnittet **Inställningar** hittar du alla nödvändiga sidor för att konfigurera din server. De tillgängliga alternativen för serverinställningar listas detaljerat nedan.

### Inställningar

Under inställningar hittar du en översikt över de vanligaste inställningsalternativen för din server. Här finns även korta förklaringar. Inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

![](https://screensaver01.zap-hosting.com/index.php/s/Y3e6G2io6KaPBZe/preview)

Här kan du till exempel göra följande justeringar:

- Grundinställningar: Spelnamn, Servernamn, Serverbeskrivning, Admin-lösenord

Om du känner dig tryggare och vill göra mer precisa ändringar rekommenderar vi att du använder Config Editor istället. Mer info om detta finns under kategorin **Configs**.

### Configs

Config-filredigeraren låter dig redigera konfigurationsfilerna direkt på webbplatsen i klassisk vy, utan förenklad vy. Detta ger dig möjlighet att anpassa serverns inställningar efter dina personliga preferenser.

Med editorn får du direkt tillgång till alla tillgängliga alternativ och kan skräddarsy dem exakt. Perfekt för avancerade användare som vill ha full kontroll och vet exakt vilka ändringar de vill göra.

:::info
Har du märkt att vissa ändringar delvis skrivs över? Tänk på att vissa värden hämtas från inställningssidan. Vill du ändra dessa direkt i config-filen måste du först stänga av motsvarande alternativ på inställningssidan.
:::

### Spel

Under **Spel** kan du alltid byta spelvariant på ditt befintliga spel eller installera ett annat spel helt och hållet. Spel med samma slotpris kan väljas direkt under **Tillgängliga spel**. För alla andra spel krävs först en justering av slotpriset. Mer info om detta finns i guiden [Spelbyte](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)

### Versioner

Under **Versioner** kan du se och hantera den aktuella versionen av din spelserver. Här kan du uppdatera till senaste versionen när som helst eller aktivera automatiska uppdateringar för att alltid ha servern uppdaterad.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Du kan även aktivera e-postnotiser för automatiska uppdateringar så att du alltid är informerad och uppdaterad.

### Schemalagda uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid bestämda tider för att automatisera olika processer på din server. Du kan välja om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa backuper eller köra egna kommandon.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Omstartsschema

Vill du schemalägga serveromstarter vid specifika tider? Omstartsschemat låter dig ställa in automatiska omstarter av din spelserver vid valda tidpunkter eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar

Med ZAP DNS-inställningar kan du skapa lättare adresser för din tjänst. Du kan använda en subdomän från någon av våra domäner eller skapa en DNS-post på dina egna domäner och få en adress som är bättre kopplad till dig personligen.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underavsnitt som hjälper dig att hantera din server. Här ingår **FTP Browser**, **Databaser** och **Backuper**. Nedan får du en detaljerad introduktion till dessa områden.

### FTP-Browser

Med **FTP Browser** får du all info du behöver för att ansluta till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att du använder ett externt FTP-program som **Filezilla** eller **WinSCP** för bästa användarupplevelse. Om du är ny på FTP kan guiden [Access via FTP](gameserver-ftpaccess.md) vara till hjälp.

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla:** FileZilla är den enklaste och mest kända FTP-klienten. Installera, starta och skriv in dina inloggningsuppgifter i övre fältet som du hittar lite längre upp på sidan. Klicka på "Anslut" så är du inne på servern och kan hantera filerna.

**WinSCP:** WinSCP är egentligen för SCP och SFTP (krypterade varianter av FTP) men kan hantera FTP lika bra. Programmet är mer avancerat än FileZilla och passar för erfarna användare.

### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa behövs till exempel när data ska sparas i en databas. Under **Databaser** kan du skapa en databas och se inloggningsuppgifter. Du kan också aktivera backup-funktionen och importera befintliga databasbackuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backuper

Under **Backuper** kan du skapa både manuella och automatiska backuper för din server och dess databas. Det gör det enklare att återställa data vid problem eller dataförlust.

I inställningarna kan du välja om backuper ska skapas automatiskt och om det ska ske dagligen eller veckovis. Du kan också bestämma om de äldsta backuperna ska raderas vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi erbjuder som standard 10 GB lagringsutrymme för backuper på lagringsservern för våra spelserverprodukter. Behöver du mer utrymme kan det uppgraderas mot en avgift. Så säkerställer du att du alltid har plats för dina backuper och kan komma åt äldre backuper vid behov.

## Fler länkar

I avsnittet **Fler länkar** hittar du ytterligare länkar som är relevanta för din produkt.

### Vanliga frågor

Avsnittet **Vanliga frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad info om olika ämnen för att snabbt och smidigt få hjälp.

### ZAP-Hosting Dokumentation

Vi erbjuder omfattande dokumentation för våra produkter som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du guider och hjälp inom olika områden som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter

**Nyheter** ger dig en komplett översikt över alla meddelanden och uppdateringar som rör din tjänst. Här hittar du viktig info om bland annat:

- Ändringar i tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om planerat underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant info som kan påverka användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />