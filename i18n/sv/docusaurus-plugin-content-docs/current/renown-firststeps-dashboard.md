---
id: renown-firststeps-dashboard
title: "Renown: Översikt av Kontrollpanelen"
description: "Upptäck hur du effektivt hanterar och optimerar din Renown för bästa prestanda och kontroll → Lär dig mer nu"
sidebar_label: Kontrollpanel
services:
  - gameserver-renown
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Renown**-server eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det kännas överväldigande. Men oroa dig inte, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom denna guide kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga alternativ och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så sätt kan du säkerställa att din **Renown**-server är optimalt anpassad efter dina behov och att du får ut det mesta av de tillgängliga möjligheterna.



<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan. 



### Kontrollpanel

**Kontrollpanelen** för din server är hjärtat i administrationen. Här presenteras all grundläggande och viktig information om din tjänst på ett tydligt sätt. Det inkluderar till exempel information om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/rtW5jMPFXZrzfop/preview)

I kontrollpanelen kan du också starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du öppna live-konsolen för att få realtidsinformation om serverns status och agera direkt vid behov.



### DDoS Manager



Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera vid en incident.

Beroende på serverns plats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Detta inkluderar detaljerad trafikinsikt som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen "DDoS Manager Översikt". Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
Användning av DDoS Manager är endast möjlig om antingen en egen IP-adress eller tillägget "DDoS Manager Översikt" har bokats som tilläggsoption. Om dessa komponenter saknas i ditt nuvarande paket kan du lägga till dem när som helst genom att uppgradera.
:::



### Loggfiler

Har du ett tekniskt problem och är osäker på orsaken? En första möjlig lösning är att kolla på **Loggfilerna**. Dessa filer innehåller mycket information om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Speciellt felmeddelanden kan hjälpa till att identifiera och förstå orsaken till ett problem bättre. Ofta kan svårigheter upptäckas och lösas genom att noggrant granska loggfilerna.

:::warning
Hittar du ingen hjälp i informationen eller förstår du den inte? Ingen fara! Vi finns dagligen tillgängliga i supporten. Skapa bara ett **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem för oss. Vi tittar på det så snabbt vi kan och hjälper dig att lösa problemet! :)
:::


### Händelselogg

**Händelseloggen** ger dig en komplett översikt över alla aktiviteter relaterade till serveradministrationen. Här kan du när som helst se när en server startade, stoppade eller kraschade, samt när uppdateringar, backuper eller nya installationer genomfördes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Live-konsol

**Live-konsolen** ger dig en realtidsvy över alla aktuella händelser på din server. Här kan du se information om spelarnas aktiviteter samt eventuella felmeddelanden och systemmeddelanden. Denna översikt ger dig en helhetsbild av vad som händer på din server och hjälper dig att upptäcka problem i ett tidigt skede.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Utöver att övervaka händelser kan du även skicka kommandon direkt till servern i **Live-konsolen**. Det kan vara användbart för att justera inställningar, utföra vissa åtgärder eller snabbt reagera på problem som uppstår.



### Driftstörningar

Var din server tillfälligt offline och du kan inte förklara varför? En titt i händelseloggen och loggfilerna gav heller ingen ledtråd? Det kan vara så att problemet inte ligger direkt hos din server, utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell driftstörning, meddelas våra tekniker automatiskt och de tar hand om problemet så snabbt som möjligt.

I detta avsnitt hittar du en översikt över driftstörningshistoriken för värdsystemet där din spelserver körs. Mer information och den senaste statusen för våra tjänster hittar du på vår nya [statussida](https://status.zap-hosting.com/).












## Inställningar

I avsnittet **Inställningar** hittar du alla nödvändiga sidor för att konfigurera din server. De tillgängliga alternativen för att konfigurera din server listas i detalj nedan.



### Inställningar

Under inställningar hittar du en översikt över de vanligaste inställningsalternativen för din server. Här finns även korta förklaringar. Att använda inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

Om du är mer van och vill göra mer precisa ändringar rekommenderar vi att du använder Config Editor istället. Mer information om detta hittar du i kategorin **Configs**.



### Configs

Config-filredigeraren låter dig redigera konfigurationsfilerna direkt på webbplatsen på det klassiska sättet, utan förenklad vy. Detta alternativ gör att du kan anpassa serverns inställningar efter dina personliga preferenser.

Genom att använda editorn får du direkt tillgång till alla tillgängliga alternativ och kan anpassa dem exakt. Detta är särskilt användbart för avancerade användare som vill ha full kontroll över sina serverinställningar och vet exakt vilka ändringar de vill göra.

:::warning
Har du märkt att vissa av dina ändringar delvis skrivs över? Var medveten om att vissa värden hämtas från inställningssidan. Om du vill göra dessa ändringar direkt i config-filen måste du först inaktivera motsvarande alternativ på inställningssidan.
:::


### Spel

Under **Spel** kan du alltid byta spelvariant på ditt befintliga spel eller installera ett annat spel helt och hållet. Spel med samma slot-pris kan väljas direkt under **Tillgängliga Spel**. För alla andra spel krävs först en justering av slot-priset. Mer information om detta finns i guiden [Spelbyte](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versioner

Under **Versioner** kan du se och hantera den aktuella versionen av din spelserver. Här kan du när som helst uppdatera till den senaste versionen eller aktivera automatiska uppdateringar för att säkerställa att din server alltid är uppdaterad.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Dessutom kan du aktivera e-postnotiser för automatiska uppdateringar för att hålla dig informerad om uppdateringar och alltid vara uppdaterad.



### Schemalagda Uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid definierade tider för att automatisera olika processer på din server. Du kan ställa in om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa backuper eller köra egna kommandon. 

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Omstartsschema

Vill du schemalägga serveromstarter vid specifika tider? Omstartsschemat låter dig ställa in automatiska omstarter av din spelserver. Med denna funktion kan du planera omstarter vid specifika tidpunkter eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar
Med ZAP DNS-inställningar kan du skapa lättare adresser för din tjänst att komma ihåg. Du kan antingen använda en subdomän av någon av våra domäner eller skapa en DNS-post på dina egna domäner och därmed få en adress som är bättre kopplad till dig som person.
![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underavsnitt som hjälper dig att hantera din server. Dessa inkluderar **FTP Browser**, **Databaser** och **Backuper**. Nedan får du en detaljerad introduktion till dessa områden.



### FTP-Browser

Med **FTP Browser** får du all nödvändig information för att upprätta en anslutning till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att använda ett externt FTP-program som **Filezilla** eller **WinSCP** för bästa användarupplevelse. Om du är osäker på hur man använder FTP kan guiden [Access via FTP](gameserver-ftpaccess.md) vara till hjälp.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla är troligen den enklaste och mest kända FTP-klienten. Installera, starta och skriv in dina inloggningsuppgifter i den övre raden som du hittar lite längre upp på denna sida. Efter ett snabbt klick på "Anslut" är du direkt inloggad på servern och kan hantera filerna.

**WinSCP:** WinSCP är egentligen avsett för SCP och SFTP (de krypterade varianterna av FTP), men kan lika gärna hantera vanlig FTP. Programmet är lite mer avancerat än FileZilla och passar bättre för erfarna användare.



### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa databaser behövs till exempel när data ska sparas i en databas. Under **Databaser** kan du skapa en databas och se åtkomstuppgifterna. Du har också möjlighet att aktivera backup-funktionen och importera befintliga databasbackuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backuper

Under **Backuper** kan du skapa både manuella och automatiska backuper för din server och dess tillhörande databas. Detta gör det enklare att återställa dina data vid problem eller dataförlust.

I inställningarna kan du ange om backuper ska skapas automatiskt och om detta ska ske dagligen eller veckovis. Dessutom kan du bestämma om de äldsta backuperna ska tas bort vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi erbjuder som standard 10 GB lagringsutrymme på lagringsservern för backuper för våra spelserverprodukter. Om du behöver mer utrymme kan detta uppgraderas mot en avgift. På så sätt säkerställer du att du alltid har tillräckligt med plats för dina backuper och kan fortfarande komma åt äldre backuper vid behov.

## Fler Länkar
I avsnittet **Fler Länkar** hittar du ytterligare länkar som är relevanta för din produkt. 

### Vanliga Frågor
Avsnittet **Vanliga Frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad information om olika ämnen för att hjälpa dig snabbt och effektivt.

### ZAP-Hosting Dokumentation
Vi erbjuder omfattande dokumentation för våra produkter som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du olika guider och hjälp inom olika områden som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter
**Nyheter** ger dig en komplett översikt över alla meddelanden och nyheter relaterade till din tjänst. Här hittar du viktig information om olika aspekter som:

- Ändringar i tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om eventuella underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant information som kan påverka användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />