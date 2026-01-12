---
id: css-firststeps-dashboard
title: "Counter-Strike Source: Översikt över Kontrollpanelen"
description: "Upptäck hur du effektivt hanterar din Counter-Strike: Source-server och optimerar dess inställningar för bästa prestanda → Lär dig mer nu"
sidebar_label: Kontrollpanel
services:
  - gameserver-cs2-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Counter-Strike: Source-server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det vara en utmaning. Men oroa dig inte, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom denna guide kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga alternativ och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så sätt kan du säkerställa att din **Counter-Strike: Source-server** är optimalt anpassad efter dina behov och att du får ut det mesta av de tillgängliga möjligheterna.

<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan. 



### Kontrollpanel

**Kontrollpanelen** för din server är hjärtat i administrationen. All grundläggande och viktig information om din tjänst presenteras tydligt här. Det inkluderar till exempel information om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga platser. Dessutom visas även belastningen på CPU, minne och RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/z3tAg8PFiS8N9r3/preview)

I kontrollpanelen har du också möjlighet att starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du komma åt livekonsolen för att få realtidsinformation om serverns status och agera direkt vid behov.






### Statistik

Under **Statistik** får du en omfattande översikt över belastningsvärdena för din server. Där hittar du information om olika aspekter som belastningen på tillgängliga platser, CPU och minne. Du kan visa dessa data för olika tidsperioder, till exempel för de senaste **60 minuterna, 24 timmar, 3 dagar, 7 dagar** eller **30 dagar.**

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Tack vare denna information får du en bra inblick i hur din server används. Dessutom är dessa statistik ofta hjälpsamma för att identifiera möjliga prestandaproblem och begränsa deras orsaker. Till exempel kan du spåra när belastningen ökade och om detta är kopplat till vissa händelser eller förändringar. Detta är särskilt viktigt när plötsliga problem uppstår, eftersom det gör att du kan vidta riktade åtgärder för felsökning och systematisk analys av möjliga orsaker.



### DDoS Manager


Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera när en incident inträffar.

Beroende på serverns plats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Detta inkluderar detaljerad trafikinsikt, som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen "DDoS Manager Översikt". Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
Användning av DDoS Manager är endast möjlig om antingen en egen IP-adress eller optionen "DDoS Manager Översikt" har bokats som tillägg. Om dessa komponenter saknas i ditt nuvarande paket kan du lägga till dem när som helst genom att uppgradera.
:::



### Loggfiler

Har du ett tekniskt problem och är osäker på orsaken? En första möjlig lösning är att kolla **Loggfilerna**. Dessa filer innehåller mycket information om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och bättre förstå orsaken till ett problem. Ofta kan svårigheter upptäckas och lösas genom att noggrant granska loggfilerna.

:::warning
Hittar du ingen hjälp i informationen eller förstår du den inte? Ingen fara! Vi finns dagligen tillgängliga i supporten. Skapa bara ett **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem för oss. Vi tittar på det så snabbt som möjligt och hjälper dig att lösa problemet! :)
:::


### Händelselogg

**Händelseloggen** ger dig en omfattande översikt över alla aktiviteter relaterade till serveradministrationen. Här kan du när som helst följa när en server startade, stoppade eller kraschade, samt när uppdateringar, säkerhetskopior eller nya installationer utfördes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Livekonsol

**Livekonsolen** ger dig en realtidsvy över alla aktuella händelser på din server. Här kan du se information om spelarnas aktiviteter samt eventuella felmeddelanden och systemmeddelanden. Denna översikt gör att du får en komplett bild av vad som händer på din server och kan upptäcka eventuella problem i ett tidigt skede.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Utöver att övervaka händelser kan du också skicka kommandon direkt till servern i **Livekonsolen**. Det kan vara användbart för att justera inställningar, utföra vissa åtgärder eller snabbt reagera på problem som uppstår.



### Driftstörningar

Var din server tillfälligt offline och du kan inte förklara varför? En titt i händelseloggen och loggfilerna gav heller ingen information? Det kan vara så att problemet inte ligger direkt hos din server, utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell störning, meddelas våra tekniker automatiskt och de tar hand om problemet så snart som möjligt.

I detta avsnitt hittar du en översikt över driftstörningshistoriken för värdsystemet där din spelserver-tjänst körs. Mer information och den senaste versionen av vår tjänstestatus hittar du på vår nya [statussida](https://status.zap-hosting.com/).












## Inställningar

I avsnittet **Inställningar** hittar du alla nödvändiga sidor för att konfigurera din server. De tillgängliga alternativen för att konfigurera din server listas i detalj nedan.



### Inställningar

Under inställningar hittar du en översikt över de vanligaste inställningsalternativen för din server. Dessa inkluderar även en kort förklaring. Användningen av inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

Om du är mer van och vill göra mer precisa ändringar rekommenderar vi att använda Config Editor istället. Mer information om detta hittar du i kategorin **Configs**.



### Configs

Config-filredigeraren låter dig redigera konfigurationsfilerna direkt från webbplatsen på det klassiska sättet, utan förenklad vy. Detta alternativ gör att du kan anpassa inställningarna för din server och konfigurera dem efter dina personliga preferenser.

Genom att använda editorn får du direkt tillgång till alla tillgängliga alternativ och kan anpassa dem exakt. Detta är särskilt användbart för avancerade användare som vill ha full kontroll över sina serverinställningar och vet exakt vilka ändringar de vill göra.

:::warning
Har du märkt att vissa av dina ändringar delvis skrivs över? Var medveten om att vissa värden hämtas från inställningssidan. Om du vill göra dessa ändringar direkt i config-filen måste du först inaktivera motsvarande alternativ på inställningssidan.
:::


### Spel

Under **Spel** har du alltid möjlighet att byta spelvariant på ditt befintliga spel eller installera ett annat spel generellt. Spel med samma slot-pris kan väljas direkt under **Tillgängliga Spel**. För alla andra spel krävs först en justering av slot-priset. Mer information om detta finns i guiden [Spelbyte](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versioner

Under **Versioner** kan du se och hantera den aktuella versionen av din spelserver. Här kan du när som helst uppdatera till den senaste versionen eller aktivera automatiska uppdateringar för att säkerställa att din server alltid är uppdaterad.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Dessutom kan du aktivera e-postnotiser för automatiska uppdateringar för att hålla dig informerad om uppdateringar och säkerställa att du alltid är uppdaterad.



### Plugins

För detta spel erbjuder vi möjligheten att enkelt installera välkända och populära resurser/plugins med bara ett klick under **Plugins**. I översikten hittar du ett urval av tillgängligt innehåll som du kan lägga till genom att klicka på installationsknappen. Efter att servern startats om kommer dessa plugins att installeras, aktiveras och finnas tillgängliga för dig.

![](https://screensaver01.zap-hosting.com/index.php/s/QY4xxqFKTXbYXoc/preview)

Genom att använda denna funktion kan du snabbt och enkelt utöka innehållet på din spelserver utan att behöva göra justeringar själv. Det sparar tid och minskar risken för fel eller kompatibilitetsproblem.



### Steam Workshop

Om du letar efter nytt innehåll för att förbättra din spelupplevelse erbjuder Steam Workshop ett brett urval av mods och kartor för olika spel. För att använda en samling mods eller kartor i ditt spel behöver du bara ange Steam Workshop Collection ID. Därefter måste du starta om din server för att säkerställa att det nya innehållet laddas. När detta är gjort kan du använda det nya innehållet på din server och lägga till mer variation och kul i ditt spel.

![](https://screensaver01.zap-hosting.com/index.php/s/AaL9sQeye5gKzWQ/preview)



### Schemalagda Uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid definierade tider för att automatisera olika processer på din server. Du kan ställa in om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa säkerhetskopior eller köra egna kommandon. 

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Omstartsschema

Vill du schemalägga serveromstarter vid specifika tider? Omstartsschemat låter dig ställa in automatiska omstarter av din spelserver. Med denna funktion kan du planera omstarter vid specifika tider eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar
Med ZAP DNS-inställningar kan du skapa lättare adresser att komma ihåg för din tjänst. Du kan antingen använda en subdomän av någon av våra domäner eller skapa en DNS-post på dina egna domäner och därmed ha en adress som är bättre kopplad till dig som person.
![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underavsnitt som hjälper dig att hantera din server. Dessa inkluderar **FTP Browser**, **Databaser** och **Säkerhetskopior**. Nedan får du en detaljerad introduktion till dessa olika områden.



### FTP-Browser

Med **FTP Browser** får du all nödvändig information för att upprätta en anslutning till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att använda ett externt FTP-program som **Filezilla** eller **WinSCP** för bästa användning. Om du inte är bekant med hur man använder FTP kan du ta en titt på guiden [Access via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:**  FileZilla är förmodligen den enklaste och mest kända FTP-klienten. Installera, starta och skriv in dina inloggningsuppgifter i den övre raden som du hittar lite längre upp på denna sida. Efter ett snabbt klick på "Anslut" är du direkt inloggad på servern och kan hantera filerna.

**WinSCP:**  WinSCP är egentligen avsett för SCP och SFTP (de krypterade varianterna av FTP), men kan lika gärna hantera vanlig FTP. Programmet är lite mer avancerat än FileZilla och passar bättre för erfarna användare.



### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa databaser behövs till exempel när data ska sparas i en databas. Under **Databaser** kan du skapa en databas och se åtkomstuppgifterna. Du har också möjlighet att aktivera backup-alternativet och importera befintliga databas-backuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Säkerhetskopior

Under **Säkerhetskopior** kan du skapa både manuella och automatiska säkerhetskopior för din server och dess tillhörande databas. Detta gör det enklare att återställa dina data vid eventuella problem eller dataförlust.

I inställningarna kan du ange om säkerhetskopior ska skapas automatiskt och om detta ska ske dagligen eller veckovis. Dessutom kan du bestämma om de äldsta säkerhetskopiorna ska raderas vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi tillhandahåller som standard 10 GB lagringsutrymme på lagringsservern för säkerhetskopior för våra spelserverprodukter. Om du behöver mer lagringsutrymme kan detta uppgraderas mot en avgift. På så sätt säkerställer du att du alltid har tillräckligt med plats för dina säkerhetskopior och kan fortfarande komma åt äldre säkerhetskopior vid behov.

## Fler länkar
I avsnittet **Fler länkar** hittar du ytterligare länkar som är relevanta för din produkt. 

### Vanliga frågor
Avsnittet **Vanliga frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad information om olika ämnen för att hjälpa dig snabbt och effektivt.

### ZAP-Hosting Dokumentation
Vi erbjuder omfattande dokumentation för våra produkter, som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du olika guider och hjälp om olika ämnen som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter
**Nyheter** ger dig en komplett översikt över alla meddelanden och nyheter relaterade till din tjänst. Här hittar du viktig information om olika aspekter som:

- Ändringar av tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om eventuella underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant information som kan vara viktig för användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />