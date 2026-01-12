---
id: corekeeper-firststeps-dashboard
title: "Core Keeper: Översikt över Kontrollpanelen"
description: "Upptäck hur du effektivt hanterar din Core Keeper-server och optimerar dess inställningar för bästa spelupplevelse → Lär dig mer nu"
sidebar_label: Kontrollpanelen
services:
  -   - gameserver-corekeeper
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Core Keeper-server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det kännas klurigt. Men oroa dig inte, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom denna guide kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga inställningar och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så vis kan du säkerställa att din **Core Keeper-server** är optimalt anpassad efter dina behov och att du får ut det mesta av de tillgängliga möjligheterna.

<YouTube videoId="h1PJVBtIbnw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/WCMiqBedR6tiAWR/preview" title="Sätt upp Core Keeper-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan.

### Kontrollpanelen

**Kontrollpanelen** för din server är hjärtat i administrationen. All grundläggande och viktig information om din tjänst presenteras tydligt här. Det inkluderar till exempel information om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/ekLJTQzLqPXnmkb/preview)

I kontrollpanelen kan du också starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du öppna livekonsolen för att få realtidsinformation om serverns status och agera direkt vid behov.

### DDoS Manager

Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera när något händer.

Beroende på serverns plats och tillgängligt DDoS-skydd kan du även övervaka aktiva attacker i realtid. Det inkluderar detaljerad trafikinsikt som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen "DDoS Manager Översikt". Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
DDoS Manager kan endast användas om antingen en egen IP-adress eller tillägget "DDoS Manager Översikt" är bokat som tilläggsoption. Om dessa saknas i ditt nuvarande paket kan du lägga till dem när som helst genom att uppgradera.
:::

### Loggfiler

Har du ett tekniskt problem och är osäker på orsaken? Ett första steg kan vara att kolla **loggfilerna**. Dessa filer innehåller mycket info om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och förstå orsaken till ett problem. Ofta kan svårigheter upptäckas och lösas genom att granska loggfilerna målmedvetet.

:::warning
Hittar du ingen hjälp i informationen eller förstår du den inte? Ingen fara! Vi finns dagligen i supporten. Skapa bara en **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem. Vi kollar på det så snabbt vi kan och hjälper dig att lösa det! :)
:::

### Händelselogg

**Händelseloggen** ger dig en komplett översikt över alla aktiviteter kopplade till serveradministrationen. Här kan du när som helst se när servern startades, stoppades eller kraschade, samt när uppdateringar, backuper eller nya installationer gjordes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Livekonsol

**Livekonsolen** ger dig en realtidsvy över alla aktuella händelser på din server. Här ser du info om spelarnas aktiviteter samt eventuella fel- och systemmeddelanden. Denna översikt låter dig få en helhetsbild av vad som händer på servern och upptäcka problem tidigt.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Utöver att övervaka händelser kan du även skicka kommandon direkt till servern i **Livekonsolen**. Det är smidigt för att justera inställningar, utföra åtgärder eller snabbt reagera på problem.

### Driftstörningar

Var din server offline en stund och du vet inte varför? Kollade du i händelselogg och loggfiler utan resultat? Det kan vara så att problemet inte ligger hos din server utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell störning, meddelas våra tekniker automatiskt som tar hand om problemet så fort som möjligt.

Här hittar du en översikt över driftstörningar på värdsystemet där din spelserver körs. Mer info och senaste status hittar du på vår nya [statussida](https://status.zap-hosting.com/).

## Inställningar

I avsnittet **Inställningar** hittar du alla sidor för att konfigurera din server. De tillgängliga alternativen för serverinställningar listas i detalj nedan.

### Inställningar

Under inställningar hittar du en översikt över de vanligaste inställningsalternativen för din server. Här finns även korta förklaringar. Inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

Känner du dig mer säker och vill göra mer precisa ändringar rekommenderar vi att använda Config Editor istället. Mer info om detta finns under kategorin **Configs**.

### Configs

Config-filredigeraren låter dig redigera konfigurationsfiler direkt på webbplatsen i klassisk vy, utan förenklad vy. Detta ger dig möjlighet att anpassa serverinställningarna efter dina personliga preferenser.

Med editorn får du direkt tillgång till alla tillgängliga alternativ och kan finjustera dem. Perfekt för avancerade användare som vill ha full kontroll och vet exakt vilka ändringar de vill göra.

:::warning
Har du märkt att vissa ändringar delvis skrivs över? Tänk på att vissa värden hämtas från inställningssidan. Vill du ändra dessa direkt i config-filen måste du först avaktivera motsvarande alternativ på inställningssidan.
:::

### Spel

Under **Spel** kan du alltid byta spelvariant på ditt befintliga spel eller installera ett annat spel helt och hållet. Spel med samma slot-pris kan väljas direkt under **Tillgängliga Spel**. För alla andra spel krävs först en justering av slot-priset. Mer info om detta finns i guiden [Spelbyte](  - gameserver-corekeeper-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioner

Under **Versioner** kan du se och hantera den aktuella versionen av din spelserver. Här kan du när som helst uppdatera till senaste versionen eller aktivera automatiska uppdateringar för att alltid ha en uppdaterad server.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Du kan även aktivera e-postnotiser för automatiska uppdateringar så att du alltid är informerad och uppdaterad.

### Schemalagda Uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid bestämda tider för att automatisera olika processer på din server. Du kan välja om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa backuper eller köra egna kommandon.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Omstartsschema

Vill du schemalägga serveromstarter vid specifika tider? Omstartsschemat låter dig ställa in automatiska omstarter av din spelserver vid valda tidpunkter eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar

Med ZAP DNS-inställningar kan du skapa lättare att komma ihåg-adresser för din tjänst. Du kan använda en subdomän av våra domäner eller skapa en DNS-post på dina egna domäner och få en adress som är bättre kopplad till dig.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underavsnitt som hjälper dig att hantera din server. Här ingår **FTP Browser**, **Databaser** och **Backuper**. Nedan får du en detaljerad introduktion till dessa områden.

### FTP-Browser

Med **FTP Browser** får du all info du behöver för att ansluta till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att använda ett externt FTP-program som **FileZilla** eller **WinSCP** för bästa användarupplevelse. Om du är ny på FTP kan guiden [Access via FTP](  - gameserver-corekeeper-ftpaccess.md) vara till hjälp.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla är troligen den enklaste och mest kända FTP-klienten. Installera, starta och skriv in dina inloggningsuppgifter i den övre raden som du hittar lite längre upp på sidan. Med ett snabbt klick på "Anslut" är du direkt inloggad på servern och kan hantera filerna.

**WinSCP:** WinSCP är egentligen för SCP och SFTP (de krypterade varianterna av FTP), men funkar lika bra med vanlig FTP. Programmet är lite mer avancerat än FileZilla och passar bättre för erfarna användare.

### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa behövs till exempel när data ska sparas i en databas. Under **Databaser** kan du skapa en databas och se inloggningsuppgifter. Du kan också aktivera backup-funktionen och importera befintliga databasbackuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backuper

Under **Backuper** kan du skapa både manuella och automatiska backuper för din server och dess databas. Det gör det enklare att återställa data vid problem eller dataförlust.

I inställningarna kan du välja om backuper ska skapas automatiskt och om det ska ske dagligen eller veckovis. Du kan också bestämma om de äldsta backuperna ska raderas vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi erbjuder som standard 10 GB lagringsutrymme på backup-servern för våra spelserverprodukter. Behöver du mer utrymme kan det uppgraderas mot en avgift. Så säkerställer du att du alltid har plats för dina backuper och kan komma åt äldre backuper vid behov.

## Fler Länkar

I avsnittet **Fler Länkar** hittar du ytterligare länkar som är relevanta för din produkt.

### Vanliga Frågor

Avsnittet **Vanliga Frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad info om olika ämnen för att snabbt och smidigt få hjälp.

### ZAP-Hosting Dokumentation

Vi erbjuder omfattande dokumentation för våra produkter som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du guider och hjälp inom olika områden som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter

**Nyheter** ger dig en komplett översikt över alla meddelanden och uppdateringar som rör din tjänst. Här hittar du viktig info om olika saker som:

- Ändringar i tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om planerat underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant info som kan påverka användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />