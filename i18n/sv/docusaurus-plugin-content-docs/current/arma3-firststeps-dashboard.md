---
id: arma3-firststeps-dashboard
title: "Arma 3: Översikt Dashboard"
description: "Upptäck hur du effektivt hanterar och optimerar din Arma 3-server med en tydlig översikt över viktiga administrationsfunktioner → Lär dig mer nu"
sidebar_label: Dashboard
services:
  - gameserver-arma3
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Arma 3-server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det kännas klurigt. Men lugn, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom den här guiden kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga inställningar och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så vis kan du säkerställa att din **Arma 3-server** är optimalt anpassad efter dina behov och att du får ut maximalt av de tillgängliga möjligheterna.

<YouTube videoId="o76A8dit91s" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CJ7iGio44HGFwdm/preview" title="Sätt upp Arma 3-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Dyk in i vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan.

### Dashboard

**Dashboarden** för din server är hjärtat i administrationen. Här presenteras all grundläggande och viktig information om din tjänst tydligt. Det inkluderar till exempel info om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/P6qgmx6cywLHQoP/preview)

I dashboarden kan du också starta, stoppa eller starta om din tjänst för att ha full kontroll över driften. Dessutom kan du öppna live-konsolen för att få realtidsinfo om serverns status och agera direkt vid behov.

### Statistik

Under **Statistik** får du en omfattande översikt över belastningsvärdena på din server. Här hittar du info om olika aspekter som belastning på tillgängliga slots, CPU och minne. Du kan visa dessa data för olika tidsperioder, till exempel de senaste **60 minuterna, 24 timmar, 3 dagar, 7 dagar** eller **30 dagar**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Med denna info får du en bra inblick i hur din server används. Statistik är också ofta hjälpsam för att identifiera eventuella prestandaproblem och begränsa deras orsaker. Du kan till exempel spåra när belastningen ökade och om det är kopplat till vissa händelser eller ändringar. Det är extra viktigt vid plötsliga problem, eftersom du då kan ta riktade steg för felsökning och analysera möjliga orsaker systematiskt.

### DDoS Manager

Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera när något händer.

Beroende på serverns plats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Det inkluderar detaljerad trafikinsikt som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen "DDoS Manager Översikt". Om ditt nuvarande paket inte inkluderar dessa kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
DDoS Manager kan endast användas om antingen en egen IP-adress eller optionen "DDoS Manager Översikt" är bokad som tillägg. Saknas dessa i ditt nuvarande paket kan du lägga till dem när som helst via uppgradering.
:::

### Loggfiler

Har du ett tekniskt problem och är osäker på orsaken? Ett första steg kan vara att kolla **loggfilerna**. Dessa filer innehåller mycket info om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och förstå problemet bättre. Ofta kan svårigheter lösas genom att noggrant granska loggfilerna.

:::warning
Hittar du ingen hjälp i informationen eller förstår du den inte? Ingen fara! Vi finns tillgängliga i support varje dag. Skapa bara ett **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem. Vi kollar på det så snabbt vi kan och hjälper dig att lösa det! :)
:::

### Händelselogg

**Händelseloggen** ger dig en komplett översikt över alla aktiviteter kopplade till serveradministrationen. Här kan du när som helst se när servern startades, stoppades eller kraschade, samt när uppdateringar, backuper eller nya installationer gjordes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live Console

**Live Console** ger dig en realtidsvy över alla aktuella händelser på din server. Här ser du info om spelarnas aktiviteter samt eventuella fel- och systemmeddelanden. Denna översikt ger dig en helhetsbild av vad som händer på servern och hjälper dig att upptäcka problem tidigt.

![](https://screensaver01.zap-hosting.com/index.php/s/dktDADkq3bzG3F6/preview)

Utöver att övervaka händelser kan du även skicka kommandon direkt till servern via **Live Console**. Det är smidigt för att justera inställningar, utföra åtgärder eller snabbt reagera på problem.

### Driftstörningar

Var din server offline en stund och du vet inte varför? Kollade du i händelseloggen och loggfilerna utan resultat? Det kan vara så att problemet inte ligger hos din server utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell störning får våra tekniker automatiskt en notis och åtgärdar problemet så snabbt som möjligt.

Här hittar du en översikt över driftstörningar på värdsystemet där din spelserver körs. Mer info och senaste status hittar du på vår nya [statussida](https://status.zap-hosting.com/).

## 

I avsnittet **Inställningar** hittar du alla sidor för att konfigurera din server. De tillgängliga inställningsalternativen listas i detalj nedan.

### Inställningar

Under inställningar hittar du en översikt över de vanligaste konfigurationsalternativen för din server. Här finns även korta förklaringar. Inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

### Konfigurationsfiler

Config-editor ger dig möjlighet att redigera konfigurationsfilerna direkt på webbplatsen i klassisk vy, utan förenklad vy. Detta låter dig anpassa serverinställningarna efter dina personliga preferenser.

Med editorn får du direkt tillgång till alla tillgängliga alternativ och kan finjustera dem. Perfekt för avancerade användare som vill ha full kontroll och vet exakt vilka ändringar de vill göra.

:::warning
Har du märkt att vissa ändringar delvis skrivs över? Tänk på att vissa värden hämtas från inställningssidan. Vill du ändra dessa direkt i config måste du först stänga av motsvarande alternativ på inställningssidan.
:::

### Spel

Under **Spel** kan du alltid byta spelvariant på ditt befintliga spel eller installera ett annat spel. Spel med samma slotpris kan väljas direkt under **Tillgängliga spel**. För andra spel krävs först en justering av slotpriset. Mer info finns i guiden [Spelbyte](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioner

Under **Versioner** kan du se och hantera den aktuella versionen av din spelserver. Här kan du uppdatera till senaste versionen när som helst eller aktivera automatiska uppdateringar för att alltid vara uppdaterad.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Du kan även aktivera e-postnotiser för automatiska uppdateringar så att du alltid håller dig informerad.

### Schemalagda uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid bestämda tider för att automatisera olika processer på din server. Du kan välja om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper är att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa backuper eller köra egna kommandon.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Omstartsschema

Vill du schemalägga serveromstarter vid specifika tider? Med Omstartsschemat kan du ställa in automatiska omstarter av din spelserver vid valda tidpunkter eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar

Med ZAP DNS-inställningar kan du skapa lättare adresser för din tjänst. Du kan använda en subdomän från våra domäner eller skapa en DNS-post på din egen domän för en adress som är mer personlig och lättare att känna igen.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underavsnitt som hjälper dig att hantera din server. Här finns bland annat **FTP Browser**, **Databaser** och **Backuper**. Nedan får du en detaljerad introduktion till dessa områden.

### FTP-Browser

Med **FTP Browser** får du all info du behöver för att ansluta till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att använda ett externt FTP-program som **Filezilla** eller **WinSCP** för bästa upplevelse. Om du är ny på FTP kan guiden [Access via FTP](gameserver-ftpaccess.md) vara till hjälp.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla är troligen den enklaste och mest kända FTP-klienten. Installera, starta och skriv in dina inloggningsuppgifter i den övre raden som du hittar lite längre upp på sidan. Klicka snabbt på "Anslut" så är du inne på servern och kan hantera filerna.

**WinSCP:** WinSCP är egentligen för SCP och SFTP (krypterade varianter av FTP), men funkar lika bra med vanlig FTP. Programmet är lite mer avancerat än FileZilla och passar bättre för erfarna användare.

### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa behövs till exempel när data ska sparas i en databas. Under **Databaser** kan du skapa en databas och se inloggningsuppgifter. Du kan också aktivera backup-funktionen och importera befintliga databas-backuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backuper

Under **Backuper** kan du skapa både manuella och automatiska backuper för din server och dess databas. Det gör det enklare att återställa data vid problem eller dataförlust.

I inställningarna kan du välja om backuper ska skapas automatiskt och om det ska ske dagligen eller veckovis. Du kan också bestämma om de äldsta backuperna ska raderas vid behov, till exempel om lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi erbjuder som standard 10 GB lagringsutrymme på backup-servern för våra spelserverprodukter. Behöver du mer kan du uppgradera mot en avgift. Så har du alltid plats för dina backuper och kan komma åt äldre backuper vid behov.

## Fler länkar

I avsnittet **Fler länkar** hittar du ytterligare länkar som är relevanta för din produkt.

### Vanliga frågor

Avsnittet **Vanliga frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad info om olika ämnen för att snabbt och smidigt få hjälp.

### ZAP-Hosting Dokumentation

Vi erbjuder omfattande dokumentation för våra produkter som fungerar som kunskapsbas för de vanligaste frågorna och funderingarna. Där finns guider och hjälp inom olika områden som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter

**Nyheter** ger dig en komplett översikt över alla meddelanden och uppdateringar som rör din tjänst. Här hittar du viktig info om bland annat:

- Ändringar i tjänsten, t.ex. genom uppdateringar eller nya funktioner
- Meddelanden om planerat underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant info som kan påverka användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />