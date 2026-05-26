---
id: subnautica-2-dashboard
title: "Subnautica 2: Dashboard"
description: "Upptäck hur du hanterar din Subnautica 2-server med ZAP-Hosting dashboard, övervakar hostingprestanda och får tillgång till viktiga zap webbadministrationsfunktioner -> Lär dig mer nu"
sidebar_label: "Subnautica 2: Dashboard"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Du är intresserad av en **Subnautica 2**-server eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan detta vara en utmaning. Men oroa dig inte, den här guiden ger dig en detaljerad introduktion till administrationen av din tjänst så att du får bästa möjliga översikt.

Efter att ha gått igenom denna guide kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga alternativ och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målmedvetet sätt. På så sätt kan du säkerställa att din **Subnautica 2**-server är optimalt anpassad efter dina behov och att du får ut det mesta av de tillgängliga funktionerna i **ZAP-Hosting**-panelen.

<InlineVoucher />

## Product Administration

I avsnittet **Product Administration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan.

### Dashboard

**Dashboard** för din server är hjärtat i administrationen. All grundläggande och viktig information om din tjänst presenteras tydligt här. Detta inkluderar till exempel information om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

I dashboarden har du också möjlighet att starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du komma åt livekonsolen för att få realtidsinformation om serverns status och vidta direkta åtgärder vid behov.

### Statistics

Under **Statistics** får du en omfattande översikt över belastningsvärdena för din server. Där hittar du information om olika aspekter som belastningen på tillgängliga slots, CPU och minne. Du kan visa dessa data för olika tidsperioder, till exempel för de senaste **60 minuterna, 24 timmar, 3 dagar, 7 dagar** eller **30 dagar**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Tack vare denna information får du en bra insikt i användningen av din server. Dessutom är dessa statistik ofta hjälpsamma för att identifiera möjliga prestandaproblem och begränsa deras orsaker. Du kan till exempel spåra när belastningen ökade och om detta är kopplat till vissa händelser eller förändringar. Detta är särskilt viktigt när plötsliga problem uppstår, eftersom det gör att du kan ta riktade steg för felsökning och systematisk analys av möjliga orsaker.

### DDoS Manager

Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera aviseringar för pågående DDoS-attacker på din server så att du kan reagera snabbt när en incident inträffar.

Beroende på serverplats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Detta inkluderar detaljerad trafikinsikt som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna nivå av transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info DDoS Manager Access Missing
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsoptionen `DDoS Manager Overview`. Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::caution DDoS Manager Requirement
Användning av DDoS Manager är endast möjlig om antingen din egen IP-adress eller optionen `DDoS Manager Overview` har bokats som tilläggsoption. Om dessa komponenter saknas i ditt nuvarande paket kan du lägga till dem när som helst genom att uppgradera.
:::

### Log files

Uppstår ett tekniskt problem och du är osäker på orsaken? En första möjlig lösning är att kontrollera **Log files**. Dessa filer innehåller mycket information om servern, såsom aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och bättre förstå orsaken till ett problem. Ofta kan svårigheter upptäckas och lösas genom att ta en riktad titt i loggfilerna.

:::caution Need Help With Log Files
Informationen där hjälper inte eller du förstår den inte? I så fall kan du skapa en **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem. Support finns tillgänglig dagligen och kan hjälpa dig att analysera problemet vidare.
:::

### Event log

**Event Log** ger dig en omfattande översikt över alla aktiviteter relaterade till serveradministrationen. Här kan du när som helst följa när en server startade, stoppade eller kraschade, samt när uppdateringar, säkerhetskopior eller nya installationer utfördes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live Console

**Live Console** ger dig en realtidsvy över alla aktuella händelser på din server. Här kan du se information om spelarnas aktiviteter samt eventuella felmeddelanden och systemmeddelanden. Denna översikt gör att du får en komplett bild av vad som händer på din server och kan upptäcka eventuella problem i ett tidigt skede.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Utöver att övervaka händelser kan du även skicka kommandon direkt till servern i **Live Console**. Detta kan vara användbart för att justera inställningar, utföra vissa åtgärder eller snabbt reagera på problem som uppstår.

### Service Interruptions

Din server var tillfälligt offline och du kan inte förklara varför? En titt i eventloggen och loggfilerna gav inte heller någon information? Det kan vara så att orsaken till problemet inte ligger direkt hos din server, utan hos värdsystemet där din server körs.

Om övervakningssystemet upptäcker ett generellt avbrott, meddelas tekniker automatiskt och tar hand om problemet så snart som möjligt.

I detta avsnitt hittar du en översikt över avbrottshistoriken för värdsystemet där din gameserver-tjänst körs. Mer information och den senaste versionen av tjänstens status finns på [status-sidan](https://status.zap-hosting.com/).

## Settings

I avsnittet **Settings** hittar du alla nödvändiga sidor för att konfigurera din server. De tillgängliga alternativen för att konfigurera din server listas i detalj nedan.

### Settings

Under **Settings** hittar du en översikt över de vanligaste inställningsalternativen för din server. Dessa inkluderar även en kort förklaring. Användningen av inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

Om du är mer van och vill göra mer precisa ändringar rekommenderas istället att använda Config Editor. Mer information om detta finns i kategorin **Configs**.

### Configs

Config-filredigeraren låter dig redigera konfigurationsfilerna direkt från webbplatsen på det klassiska sättet, utan förenklad vy. Detta alternativ gör att du kan anpassa inställningarna för din server och konfigurera dem enligt dina personliga preferenser.

Genom att använda editorn får du direkt tillgång till alla tillgängliga alternativ och kan anpassa dem exakt. Detta är särskilt användbart för avancerade användare som vill ha full kontroll över sina serverinställningar och vet exakt vilka ändringar de vill göra.

:::caution Config Values May Be Overwritten
Har du märkt att några av dina ändringar delvis skrivs över? Var medveten om att vissa värden hämtas från inställningssidan. Om du vill göra dessa ändringar direkt i config måste du först inaktivera motsvarande alternativ på inställningssidan.
:::

### Games

Under **Games** har du alltid möjlighet att byta spelvariant på ditt befintliga spel eller installera ett annat spel generellt. Spel med samma slotpris kan väljas direkt under **Available Games**. För alla andra spel krävs först en justering av slotpriset. Mer information om detta finns i guiden [Game Change](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

Under **Versions** kan du visa och hantera den aktuella versionen av din gameserver. Här kan du när som helst uppdatera till den senaste versionen eller aktivera automatiska uppdateringar för att säkerställa att din server alltid är uppdaterad.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Dessutom kan du även aktivera e-postavisering för automatiska uppdateringar för att hålla dig informerad om uppdateringar och säkerställa att du alltid är uppdaterad.

### Scheduled Tasks

Skapa schemalagda uppgifter som körs automatiskt vid definierade tider för att automatisera olika processer på din server. Du kan ställa in om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa säkerhetskopior eller köra egna kommandon.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Restart planner

Vill du schemalägga serveromstarter vid specifika tider? Restart Planner låter dig ställa in schemalagda automatiska omstarter av din gameserver. Med denna funktion kan du ställa in omstarter vid specifika tider eller med jämna mellanrum.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS settings

Med ZAP DNS-inställningar kan du skapa lättare adresser för din tjänst. Du kan antingen använda en subdomän av en av de tillgängliga domänerna, eller skapa en DNS-post på din egen domän och därmed ha en adress som bättre kan kopplas till ditt projekt.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

I avsnittet **Tools** i din navigationspanel hittar du flera underobjekt som hjälper dig att hantera din server. Dessa inkluderar **FTP Browser**, **Databases** och **Backups**. Nedan får du en detaljerad introduktion till dessa olika områden.

### FTP-Browser

Med **FTP Browser** får du all nödvändig information för att upprätta en anslutning till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din gameserver. Det rekommenderas att använda ett externt FTP-program som [FileZilla](https://filezilla-project.org/) eller [WinSCP](https://winscp.net/eng/index.php) för optimal användning. Om du inte är bekant med hur man använder FTP kan guiden [Access via FTP](gameserver-ftpaccess.md) vara till hjälp.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla är en av de enklaste och mest kända FTP-klienterna. Efter installation kan du starta programmet och ange dina inloggningsuppgifter i toppfältet med de uppgifter som visas i din panel. Efter ett snabbt klick på anslut är du direkt inloggad på servern och kan hantera filerna.

**WinSCP:** WinSCP är främst avsett för SCP och SFTP, men kan även hantera vanliga FTP-anslutningar. Programmet är något mer omfattande än FileZilla och passar därför ofta bättre för avancerade användare.

### Databases

Utöver gameserver-produkter finns även 10 inkluderade databaser tillgängliga. Dessa databaser behövs till exempel när data ska lagras i en databas. Under **Databases** kan du skapa en databas och visa åtkomstuppgifterna. Du har också möjlighet att aktivera backup-alternativet och importera befintliga databas-backuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

Under **Backups** kan du skapa både manuella och automatiska säkerhetskopior för din server och dess tillhörande databas. Detta gör det enklare att återställa dina data vid eventuella problem eller dataförlust.

I inställningarna kan du ange om säkerhetskopior ska skapas automatiskt och om detta ska ske dagligen eller veckovis. Dessutom kan du bestämma om de äldsta säkerhetskopiorna ska raderas vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Som standard tillhandahålls 10 GB lagringsutrymme på lagringsservern för säkerhetskopior för gameserver-produkter. Om du behöver mer lagringsutrymme kan detta uppgraderas mot en avgift. På så sätt säkerställer du att du alltid har tillräckligt med plats för dina säkerhetskopior och kan fortfarande komma åt äldre säkerhetskopior vid behov.

## Further Links

I avsnittet **Further Links** hittar du fler länkar som är relevanta för din produkt.

### Frequently Asked Questions

Avsnittet **Frequently Asked Questions** ger en översikt över de vanligaste frågorna från kunder. Här hittar du hjälpsamma svar och detaljerad information om olika ämnen för att hjälpa dig snabbt och effektivt.

### ZAP-Hosting Documentation

Omfattande dokumentation finns tillgänglig för produkterna och fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du olika guider och hjälp om olika ämnen som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

**News** ger dig en komplett översikt över alla meddelanden och nyheter relaterade till din tjänst. Här hittar du viktig information om olika aspekter som:

- Ändringar i tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om eventuella underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant information som kan vara viktig för användningen av din tjänst

Genom att regelbundet kolla **News** håller du dig informerad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />

## Conclusion

Du har nu en komplett översikt över de viktigaste områdena i **Subnautica 2**-dashboarden och vet var du hittar central administration, konfiguration, verktyg och informationssidor i **ZAP-Hosting**-panelen.

Congratulations, you have successfully learned how to use the Subnautica 2 dashboard. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂